<template>
  <ul class="fixed flat-4 lang-options p-5">
    <li v-for="(locale, index) in availableLocales" :key="index">
      <button
        :key="locale"
        @click.prevent.stop="setLocale(locale)"
        >
        <country-flag :country='setLocaleCode(locale)' class="rounded-lg"/>
        </button
      >
    </li>
  </ul>
</template>
<script>
import CountryFlag from 'vue-country-flag'

export default {
  name: "LanguageSwitcher",
  components: {
    CountryFlag
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i !== this.$i18n.locale);
    },
  },
  methods:{
    setLocaleCode(code){
      switch (code) {
        case 'en': return 'us'
        case 'es': return 'es'
        default: return code
      }
    },
    setLocale(locale) {
        console.log('hola')
      this.$i18n.setLocale(locale);
    }
  }
};
</script>
<style scoped>
.lang-options {
  top: 50%;
  -webkit-transform: translateY(-30vh);
  -ms-transform: translateY(-30vh);
  transform: translateY(-30vh);
  right: 0;
}
</style>
