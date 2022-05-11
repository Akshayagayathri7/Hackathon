<template>
  <div class="about">
    <v-row justify="center">
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
    </v-row>
    <v-card v-if="status" class="mx-auto" max-width>
      <div class="ml-4">
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
        <v-card-actions>
          <v-btn outlined rounded text> {{ $t("button") }} </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    radioGroup: 1,
    status: false,
    selectedLoan: "",
  }),
  methods: {
    onChangePage(a) {
      this.status = true;
      this.selectedLoan = a;
    },
  },
};
</script>
<style scoped>
.error {
  margin-top: 20px;
  background-color: rgb(39, 8, 96);
  text-align: left;
}
</style>
