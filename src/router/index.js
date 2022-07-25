import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import SmallLayout from '@/layouts/SmallLayout.vue'
import {getAuth, onAuthStateChanged} from "firebase/auth";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,
    meta: {requiresAuth: true},
    children: [
      {
        path: '/',
        name: 'Count',
        meta: {sidebar: 'sidebar'},
        component: () => import('@/views/HomeView.vue')
      },
      {
        path: '/categories',
        name: 'Categories',
        meta: {sidebar: 'sidebar'},
        component: () => import('@/views/CategoriesView.vue')
      },
      {
        path: '/detail-record',
        name: 'Detail-record',
        component: () => import('@/views/DetailRecordView.vue')
      },
      {
        path: '/history',
        name: 'History',
        meta: {sidebar: 'sidebar'},
        component: () => import('@/views/HistoryView.vue')
      },
      {
        path: '/planning',
        name: 'Planning',
        meta: {sidebar: 'sidebar'},
        component: () => import('@/views/PlanningView.vue')
      },
      {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/ProfileView.vue')
      },
      {
        path: '/record',
        name: 'Record',
        meta: {sidebar: 'sidebar'},
        component: () => import('@/views/RecordView.vue')
      }
    ]
  },
  {
    path: '/',
    meta: {requiresAuth: false},
    component: SmallLayout,
    children: [
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/RegisterView.vue')
      },
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/LoginView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (to.matched.some(record => record.meta.requiresAuth) && !user) {
      next('login?message=login')
    } else if (to.matched.some(record => record.meta.requiresAuth === false) && user) {
      router.back()
    }
    else {
      next()
    }
  })
})

export default router
