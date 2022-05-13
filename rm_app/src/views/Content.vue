<template>
<v-row>
<v-container fluid grid-list-md>
  <v-layout row wrap>
  <v-flex v-for="i in 3" :key="i">
  <v-hover v-slot="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out purple lighten-2 v-card--reveal text-h2 white--text"
            style="height: 100%;"
          >
            <ol><li v-for="item in $t(`card_content[${i-1}].services_offered`)" :key="item">
              {{item}}</li></ol>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="purple"
          class="white--text"
          large
          right
          top
          @click="proceed(i)"
        >Proceed
        </v-btn>
        <div class="font-weight-light grey--text text-h6 mb-2">
          {{$t(`card_content[${i-1}].title`)}}
        </div>
        <h3 class="text-h4 font-weight-light orange--text mb-2">
          {{$t('amount')}}: {{$t(`card_content[${i-1}].cost`)}} <span>&#8364;</span>
        </h3>
        <div class="font-weight-light text-h6 mb-2">
          {{$t('services')}}: {{$t(`card_content[${i-1}].services`)}}
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
  </v-flex>
  </v-layout>
</v-container>
</v-row>
</template>
<script>
export default {
  methods:{
    proceed(i) {
      this.$store.commit('updateSelectedItem', i);
      console.log(this.$store.state.selectedItem);
      this.$router.push({name: 'Acknowledgement'});
    }
  }
}
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 1;
  position: absolute;
  width: 100%;
}
</style>