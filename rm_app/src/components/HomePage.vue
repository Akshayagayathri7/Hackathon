<template>
  <div>
    <div class="align-content">{{$t('home_content')}}</div>
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
  data: () => ({
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.align-content {
  text-align: center;
  font-weight: 500;
  font-size: 24px;
}
</style>
