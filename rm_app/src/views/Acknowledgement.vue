<template>
  <div class="container">
    <v-img
      class="white--text text-align-center"
      height="500px"
      width
      :src="require('../assets/thank_you.gif')"
    >
      <div>
        <h2>{{ $t("thankyou_text") }}</h2>
      </div></v-img
    >
  </div>
</template>
<style scoped>
v-img{
  position: fixed;
  overflow-y: scroll;
  width: 100%;
}
</style>
