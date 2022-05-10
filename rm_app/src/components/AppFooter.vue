<template>
  <v-footer
    color="primary lighten-1"
    padless
    absolute
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
        @click="changeLanguage"
      >
        {{ link }}
      </v-btn>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'EN',
        'NL',
      ],
    }),
    methods: {
      changeLanguage(event) {
        if (event.target.textContent === 'NL') {
          this.$i18n.locale = 'nl';
        }
      }
    }
  }
</script>