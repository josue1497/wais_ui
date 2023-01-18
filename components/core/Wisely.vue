<template>
  <div class="animate__animated animate__fadeIn">
    <div class="flex flex-col relative items-center">
      <span class="text-wisely waisly-padding mb-auto">Wisely</span>
      <span class="wais-sub wais-sub-position wais-sub-letter-spacing animate__animated animate__fadeIn" v-if="showWais">Wais Digital</span>
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
  --bg-size: 400%;
  --color-one: rgba(0,214,161,1) ;
  --color-two: rgba(255,88,146,1);
  --color-three: rgba(118,119,253,1);
  background: linear-gradient(
                90deg,
                var(--color-one) 25%,
                var(--color-two) 50%,
                var(--color-three) 75%,
                var(--color-one) 100%
              ) 0 0 / var(--bg-size) 100%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: move-bg 15s infinite linear;
  text-align: center;
}

.waisly-padding {
  padding-bottom: 4rem;
}
.wais-sub {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  position: absolute; 
  @apply text-black dark:text-white text-[1rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2rem] 2xl:text-[2.5rem];
}

.wais-sub-margin {
  @apply mt-[-5.5rem] md:mt-[-7rem] lg:mt-[-7rem] xl:mt-[-7.5rem] 2xl:mt-[-10rem];
}

.wais-sub-letter-spacing {
  @apply tracking-[.25rem] md:tracking-[.4rem] lg:tracking-[.5rem] xl:tracking-[.6rem] 2xl:tracking-[.7rem];
}

.wais-sub-position {
  @apply bottom-[1vh] md:bottom-[-5vh] lg:bottom-[-7vh] xl:bottom-[-7vh] 2xl:bottom-[-9vh]; 
}

@keyframes move-bg {
  to {
    background-position: var(--bg-size) 0;
  }
}

@media (prefers-reduced-motion: no-preference) {
  .boujee-text {
    animation: move-bg 8s linear infinite;
  }
  @keyframes move-bg {
    to {
      background-position: var(--bg-size) 0;
    }
  }
}
</style>
