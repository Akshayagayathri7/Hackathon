<template>
  <div>
    <div class="mb-4"><label>{{$t('label')}}</label></div>
    <v-select
      :items="$t('items')"
      item-text="name"
      :label="$t('placeholder')"
      :v-model="$t(`items[${this.selectedLoan.name}]`)"
      solo
      return-object
      full-width
      @change="onChangePage"
    ></v-select>
    <v-container v-if="status">
      <v-row>
        <div class="col-md-6 sm-12 align-self-center">
          <v-img
            :src="require(`../assets/${img}.jpg`)"
          />
        </div>
        <div class="col-md-6 sm-12">
          <h1 class="mb-4">{{ $t("card_description") }}</h1>
          <p >
            {{ $t(`items[${this.selectedLoan.value}].description`) }}
          </p>
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="durations in $t('duration')"
              :key="durations"
              :label="durations"
              :value="durations"
            ></v-radio>
          </v-radio-group>
        </div>
      </v-row>
      <v-row>
        <div>
          <v-btn
            outlined
            rounded
            text
            @click="goToSummary"
          >{{ $t("button") }}
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    radioGroup: 1,
    status: false,
    selectedLoan: '',
    img:'',
  }),
  
  methods: {
    onChangePage(a) {
      this.status = true
      this.selectedLoan = a;
      this.img = this.$t(`items[${this.selectedLoan.value}].img`);
    },
    goToSummary() {
      this.$router.push({name: 'Acknowledgement'});
    }
  },
};
</script>
<style scoped>
</style>
