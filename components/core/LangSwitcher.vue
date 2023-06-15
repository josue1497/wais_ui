<template>
  <div>
    <ul class="hidden md:flex px-5 border-black dark:border-white border-x-2">
      <li v-for="(locale, index) in availableLocales" :key="index">
        <button
          :key="locale"
          @click.prevent.stop="setLocale(locale)"
          class="text-black dark:text-white"
          >
          {{locale.toUpperCase()}}
          </button>
      </li>
    </ul>
    <div class="flex md:hidden justify-around items-center text-3xl">
      <button class="px-5" @click.prevent.stop="setLocale('en')">English</button>
      <div class="h-8 border-r-2 border-black dark:border-white"></div>
      <button class="px-5" @click.prevent.stop="setLocale('es')">Español</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "LanguageSwitcher",
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
      this.$i18n.setLocale(locale);
    }
  }
};
</script>