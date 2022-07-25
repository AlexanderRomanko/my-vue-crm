import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";

Vue.config.productionTip = false
Vue.use(Vuelidate)

const firebaseConfig = {
  apiKey: "AIzaSyD52F2BU6xq7eBMw54Sa3mywIDdpdDXDjQ",
  authDomain: "my-vue-crm-207bc.firebaseapp.com",
  projectId: "my-vue-crm-207bc",
  storageBucket: "my-vue-crm-207bc.appspot.com",
  messagingSenderId: "208291887246",
  appId: "1:208291887246:web:4f476d09b78fe4ba3d31df",
  measurementId: "G-RX14XGBBBQ",
  databaseURL: "https://my-vue-crm-207bc-default-rtdb.europe-west1.firebasedatabase.app"
}

const app = initializeApp(firebaseConfig)

getAuth(app)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')




