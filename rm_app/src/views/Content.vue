<template>
  <div class="col-12">
    <div class="mb-4"><label>{{$t('label')}}</label></div>
    <v-select
      :items="$t('items')"
      item-text="name"
      :label="$t('placeholder')"
      :v-model="$t(`items[${this.selectedLoan.name}]`)"
      item-color="purple"
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
              v-for="(durations, index) in $t('duration')"
              :key="index"
              :label="durations.value"
              :value="durations.key"
              @click="dialog = true"
            ></v-radio>
          </v-radio-group>          
          <v-dialog
            v-model="dialog"
            max-width="290"
          >
            <v-card>
              <v-card-title class="text-h5">
                {{$t(`cost[${this.radioGroup-1}].amount`)}}
              </v-card-title>
              <v-card-text>
                {{$t(`cost[${this.radioGroup-1}].text`)}}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="purple lighten-3"
                  text
                  @click="dialog = false"
                >
                  OK
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-row>
        <div class="text-align-center">
          <v-btn
            depressed
            :disabled="!radioGroup"
            color="purple lighten-3"
            @click="goToSummary"
          >{{ $t("button_submit") }}
          </v-btn>
        </div>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    radioGroup: null,
    status: false,
    selectedLoan: '',
    img:'',
    dialog: false,
  }),
  
  methods: {
    onChangePage(a) {
      this.status = true
      this.selectedLoan = a;
      this.img = this.$t(`items[${this.selectedLoan.value}].img`);
    },
    goToSummary() {
      this.$router.push({name: 'Acknowledgement'});
    },
  },
};
</script>
<style scoped>
.text-align-center{
  text-align: center;
}
</style>
