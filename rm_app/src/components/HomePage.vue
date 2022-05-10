<template>
  <div>
    <div>{{$t('home_content')}}</div>
    <v-img
      :src="require('../assets/Relationship_Manager.png')"
      class="my-3"
      contain
      height="200"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
