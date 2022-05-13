<template>
  <div>
    <v-toolbar
      dark
      prominent
      :src="require('../assets/background_bank.jpg')"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title><router-link class="link-color"
       :to="{ path: '*' }">{{$t('app_title')}}</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <img
      :src="require('../assets/logo.png')"
      contain
      height="120"
      align="right"
    />
    </v-toolbar>
  </div>
</template>
<style scoped>
.link-color {
  color:white;
  text-decoration: none;
}
</style>
