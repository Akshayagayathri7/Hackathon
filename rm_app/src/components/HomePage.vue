<template>
  <div class="align-self-center">
    <v-row>
    <!-- <div clss="col-md-6 sm-12 align-self-center">
      
    </div>
    <div class="col-md-6 sm-12">{{$t('home_content')}}</div> -->
    <div class="col-md-6 align-self-center">
      <v-img
      :src="require('../assets/Relationship_Manager.png')"
      contain
      height="200"
    />.</div>
    <div class="col-md-6">{{$t('home_content')}}</div>
    </v-row>
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
};
.align-self-center {
  align-self: center;
}
</style>
