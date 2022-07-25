<template>

  <v-layout>

    <v-main class="grey darken-1 small-layout">

      <v-tooltip
          :value="showPopUp"
      >
        <span>{{ errorMessage }}</span>
      </v-tooltip>

      <router-view/>

    </v-main>

  </v-layout>
</template>

<script>
import errorMessages from "@/utils/error.messages";

export default {
  name: 'SmallLayout',
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

  mounted() {
    if (errorMessages[this.$route.query.message]) {
      this.errorMessage = errorMessages[this.$route.query.message]
      this.showPopUp = true
      this.timeoutID = setTimeout(() => this.showPopUp = false , 5000)
    }
  },

  beforeDestroy() {
    clearTimeout(this.timeoutID)
  }

}

</script>

<style scoped>

</style>
