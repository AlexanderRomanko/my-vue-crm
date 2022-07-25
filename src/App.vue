<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',

// created: async function () {
//   try {
//     await this.$router.push('/')
//   } catch (e) {
//     await this.$store.dispatch('logout')
//   }
// }
}
</script>
