<template>

  <nav>

    <v-app-bar color="primary" dark app clipped-left>

      <v-col class="d-flex align-center">

        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-items class="d-none d-md-flex text-sm-body-2">{{ date }}</v-toolbar-items>

      </v-col>

      <v-col class="d-none d-sm-flex justify-center">

        <div class="d-flex align-center">

          <v-icon x-large right class="mr-3">mdi-chart-timeline-variant-shimmer</v-icon>
          <v-app-bar-title>Vue CRM</v-app-bar-title>

        </div>

      </v-col>

      <v-col class="text-right">

        <v-menu offset-y>

          <template v-slot:activator="{ on }">

            <v-btn v-on="on" text>{{ name }}
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>

          </template>

          <v-list dense>

            <v-list-item to="/profile">
              <v-list-item-icon>
                <v-icon large>mdi-account-circle</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Profile</v-list-item-title>
            </v-list-item>

            <v-divider></v-divider>

            <v-list-item @click.prevent="logout" active-class="active">
              <v-list-item-icon>
                <v-icon large>mdi-clipboard-arrow-left</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Exit</v-list-item-title>
            </v-list-item>

          </v-list>

        </v-menu>

      </v-col>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" height="100%" app clipped stateless color="error">

      <v-list dark>

        <v-list-item v-for="route in routes"
                     :key="route.path"
                     :to="route.path"
                     active-class="success"
                     dense
        >
          <v-list-item-title>{{ route.name }}</v-list-item-title>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>

  </nav>


</template>

<script>

export default {
  name: 'NavbarComponent',
  data: () => ({
    date: `Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}`,
    drawer: true,
  }),

  methods: {
    async logout() {
      await this.$store.dispatch('logout')
      await this.$router.push('/login?message=logout')
    }
  },

  computed: {
    routes() {
      return this.$router.getRoutes()
          .filter((el) => el.meta.sidebar)
    },
    name() {
      return this.$store.getters.info.name
    }
  },

  mounted() {
    this.intervalID = setInterval(() => {
      this.date = `Date: ${new Date().toLocaleDateString()} Time: ${new Date().toLocaleTimeString()}`
    }, 1000)
  },

  beforeDestroy() {
    clearInterval(this.intervalID)
  }
}
</script>
