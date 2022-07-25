<template>
  <v-layout>

    <NavbarComponent/>

    <v-main class="ma-5">

      <v-tooltip
          :value="showPopUp"
      >
        <span>{{ errorMessage }}</span>
      </v-tooltip>

      <router-view/>

      <v-btn fab dark right bottom fixed color="error" to="/record">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>

    </v-main>

  </v-layout>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent'
import errorMessages from "@/utils/error.messages";

export default {
  name: 'MainLayout',
  components: {
    NavbarComponent
  },
  data: () => ({
    errorMessage: '',
    showPopUp: false
  }),
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(fbError) {
      this.errorMessage = errorMessages[fbError.code] || 'Something gone wrong'
      this.showPopUp = true
      this.timeoutID = setTimeout(() => this.showPopUp = false , 5000)
    }
  },
  async mounted() {
    if (this.$store.getters.info) {
      await this.$store.dispatch('fetchInfo')
    }
  },
  beforeDestroy() {
    clearTimeout(this.timeoutID)
  }

}

</script>
