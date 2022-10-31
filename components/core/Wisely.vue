<template>
  <div class="animate__animated animate__fadeIn">
    <div class="flex flex-col">
      <span class="text-wisely">
        <!-- animate__slideInLeft -->
        Wisely</span
      >
        <span class="wais-sub animate__animated animate__fadeInUp" v-if="showWais">
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
  color: #000;
  text-align: center;
  @apply text-[1rem] mt-[-6rem] md:text-[1.5rem] md:mt-[-8rem] lg:text-[2rem] lg:mt-[-9rem] xl:text-[2rem] xl:mt-[-9rem] 2xl:text-[2.5rem] 2xl:mt-[-10rem];
}
</style>
