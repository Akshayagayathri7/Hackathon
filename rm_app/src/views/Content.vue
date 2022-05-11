<template>
  <div class="about">
    <v-row justify="center">
      <v-select
        :items="$t('items')"
        item-text="name"
        label="Select a Service"
        solo
        return-object
        full-width
        @change="onChangePage"
      ></v-select>
    </v-row>
    <v-card v-if="status" class="mx-auto" max-width>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="text-h5 mb-4">{{ $t("card_description") }}</div>
          <v-list-item-subtitle>
            <p>{{ $t(`items[${this.selectedLoan}].description`) }}</p>
          </v-list-item-subtitle>
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="durations in $t('duration')"
              :key="durations"
              :label="durations"
              :value="durations"
            ></v-radio>
          </v-radio-group>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn outlined rounded text> {{ $t("button") }} </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    radioGroup: 1,
    status: false,
    selectedLoan: '',
  }),
  methods: {
    onChangePage(a) {
      this.status = true
      this.selectedLoan = a.value
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
