<template>
  <v-app>
    <AppHeader />
    <div class="layout">
    <router-view />
    </div>
    <AppFooter />
  </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "App",
  components: {
    AppFooter,
    AppHeader,
  },
};
</script>
<style scoped>
.layout {
  margin: 16px;
  display: block;
}
</style>
