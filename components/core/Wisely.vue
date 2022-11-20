<template>
  <div class="animate__animated animate__fadeIn">
    <div class="flex flex-col">
      <span class="text-wisely">Wisely</span
      >
        <span class="wais-sub wais-sub-margin wais-sub-letter-spacing animate__animated animate__fadeInUp" v-if="showWais">Wais Digital</span
        >
    </div>
  </div>
</template>
<script>
export default {
  name: "Wisely",
  data: () => ({
    showWais: false,
    showGradient: false,
  }),
  mounted() {
    this.presentWisely();
  },
  methods: {
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async presentWisely() {
      await this.timeout(200);
      this.showWais = true;
      await this.timeout(1000);
      this.showGradient = true;
    },
  },
};
</script>
<style>

.text-wisely {
  background: rgb(0,214,161);
  background: linear-gradient(90deg, rgba(0,214,161,1) 0%, rgba(255,88,146,1) 35%, rgba(118,119,253,1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 150% auto;
  padding-bottom: 4rem;
  text-align: center;
}

.wais-sub {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  @apply text-black dark:text-white text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2.5rem];
}

.wais-sub-margin {
  @apply mt-[-5.5rem] md:mt-[-7rem] lg:mt-[-7rem] xl:mt-[-7.5rem] 2xl:mt-[-10rem];
}

.wais-sub-letter-spacing {
  @apply tracking-[.25rem] md:tracking-[.4rem] lg:tracking-[.5rem] xl:tracking-[.6rem] 2xl:tracking-[.7rem];
}
</style>
