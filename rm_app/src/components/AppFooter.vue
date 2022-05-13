<template>
  <v-footer
    color="purple"
    padless
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
        if (event.srcElement.innerText === 'NL') {
          this.$i18n.locale = 'nl';
          return;
        }
        this.$i18n.locale = 'en';
      }
    }
  }
</script>