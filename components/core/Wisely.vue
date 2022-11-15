<template>
  <div class="animate__animated animate__fadeIn">
    <div class="flex flex-col">
      <span class="text-wisely">
        <!-- animate__slideInLeft -->
        Wisely</span
      >
        <span class="wais-sub wais-sub-margin wais-sub-letter-spacing animate__animated animate__fadeInUp" v-if="showWais">
          <!-- animate__slideInUp -->
          Wais Digital</span
        >
    </div>
  </div>
</template>
<script>
export default {
  name: "Wisely",
  data: () => ({
    showWais: false,
    wisely: ["W", "i", "s", "e", "l", "y", ""],
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
.wais-sub {
  /* font-size: 2rem; */
  /* margin-top: -8rem; */
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  @apply text-black dark:text-white text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2.5rem];
}

.wais-sub-margin {
  @apply mt-[-6rem] md:mt-[-7rem] lg:mt-[-8rem] xl:mt-[-8.5rem] 2xl:mt-[-11rem];
}

.wais-sub-letter-spacing {
  @apply tracking-[.3rem] md:tracking-[.4rem] lg:tracking-[.5rem] xl:tracking-[.6rem] 2xl:tracking-[.7rem];
}
</style>
