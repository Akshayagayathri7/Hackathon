<template>
  <div class="container">
    <!-- <v-img
      class="white--text text-align-center"
      height="500px"
      width
      :src="require('../assets/thank_you.gif')"
    >
      <div>
        <h2>{{ $t("thankyou_text") }}</h2>
      </div></v-img
    > -->
    <h2>Thank you opting</h2>
    <h3>Summary:</h3>
    <p>The plan chosen by you: {{$t(`card_content[${this.$store.state.selectedItem}].title`)}}</p>
    <p>Amount Charged: {{$t(`card_content[${this.$store.state.selectedItem}].cost`)}}</p>
    <p>No.of services provided: {{$t(`card_content[${this.$store.state.selectedItem}].services`)}}</p>
  </div>
</template>
<style scoped>
v-img{
  position: fixed;
  overflow-y: scroll;
  width: 100%;
}
</style>
