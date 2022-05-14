<template>
  <div class="align-self-center">
    <v-row>
      <div class="col-md-4 align-self-center">
        <v-img
          :src="require('../assets/thank_you1.jpg')"
          contain
          height="200"
        />.
      </div>
      <div class="col-md" style="text-align: center">
        <h1 class="font-title mb-5">{{$t('thanks_title')}}</h1>
        <div
          style="color: saddlebrown; font-size: 20px; font-family: monospace"
        >
          <h3>{{$t('Summary_title')}}</h3>
          <p>
            {{$t('plan_title')}}
            {{ $t(`card_content[${this.$store.state.selectedItem}].title`) }}
          </p>
          <p>
           {{$t('amount_title')}}
            {{ $t(`card_content[${this.$store.state.selectedItem}].cost`) }}
          </p>
          <p>
            {{$t('service_title')}}
            {{ $t(`card_content[${this.$store.state.selectedItem}].services`) }}
          </p>
        </div>
      </div>
    </v-row>
  </div>
</template>
<style scoped>
.align-self-center {
  align-self: center;
}
</style>
