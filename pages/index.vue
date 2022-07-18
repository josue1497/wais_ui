<template>
  <div>
    <section
      class="w-full flex main-banner relative overflow-hidden"
      @mousemove="updateSpotlight"
      @mouseleave="leave"
      @mouseenter="enter"
    >
      <div
        class="super-circle s-circle-1"
        id="cs-1"
        style="top: -50%; right: -30%"
      ></div>
      <div
        class="super-circle s-circle-3"
        id="cs-3"
        style="bottom: -129%; right: -20%"
      ></div>
      <div
        class="super-circle s-circle-2"
        id="cs-2"
        style="left: -70%; top: -20%"
      ></div>
      <div class="hidden md:block circle-out">
        <div
          class="circle circle-in-1"
          :style="{ transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)' }"
        ></div>
        <div
          class="circle circle-in-2"
          :style="{ transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)' }"
        ></div>
        <div
          class="circle circle-in-3"
          :style="{ transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)' }"
        ></div>
        <div
          class="circle circle-in-4"
          :style="{ transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)' }"
        ></div>
        <div
          class="circle circle-in-5"
          :style="{ transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)' }"
        ></div>
      </div>
      <div
        class="flex flex-col justify-start items-start my-44 md:my-36 w-full relative"
        style="z-index: 10"
      >
        <div class="flex flex-col justify-center items-center w-full">
          <h1 class="home-title flex flex-col w-3/4 md:w-10/12 lg:w-8/12">
            <span class="mr-auto">Think</span
            ><span class="ml-auto">Wisely</span>
          </h1>
        </div>
      </div>
      <div
        class="w-full md:w-3/4 absolute inset-x-0 bottom-0 px-0 py-10 md:px-14"
      >
        <h1 class="home-subtitle flex flex-col w-3/4 md:w-full GFG uppercase">
          <span class="block">Wais</span><span class="block">Digital</span>
        </h1>
      </div>
      <SocialNetworkBar></SocialNetworkBar>
    </section>
    <CoreSection
      justify="start"
      items="center"
      id="1"
      sm-px="0"
      px="16"
      class="h-72 md:h-screen"
    >
      <div class="w-full py-10 px-0 md:px-16 flat-3">
        <h3
          data-aos="fade-up"
          class="wais-text text-left text-black dark:text-white w-full 2xl:w-3/4 px-8 relative"
        >
          <span class="block"
            >{{$t('_home.customer_text_1')}} 
            <span v-show="isEN" :class="`customer customers-animation relative`"></span>
            <span v-show="!isEN" :class="`cliente cliente-animation relative`"></span>
          </span>
          <span class="block">{{$t('_home.customer_text_2')}}</span>
        </h3>
      </div>
    </CoreSection>
    <CoreSection
      id="2"
      sm-px="12"
      px="16"
      sm-size="72"
      class="h-72 md:h-screen relative"
    >
      <div
        class="wais-text-1 text-center w-11/12 md:w-full flat-3 overflow-hidden"
      >
        <span data-aos="fade-up" class="inline-block">{{ $t('_home.marketing') }}</span>
        <span
          data-aos="fade-up"
          data-aos-delay="300"
          class="inline-block text-[#666be4]"
          >+</span
        >
        <span data-aos="fade-up" data-aos-delay="400" class="inline-block"
          >{{ $t('_home.communications') }}</span
        >
        <span
          data-aos="fade-up"
          data-aos-delay="500"
          class="inline-block text-[#df6469]"
          >+</span
        >
        <span data-aos="fade-up" data-aos-delay="600" class="block"
          >{{ $t('_home.customer_experience') }}</span
        >
        <span class="block">
          <span data-aos="fade-up" data-aos-delay="700" class="inline-block"
            >{{ $t('_home.graphic_design') }}</span
          >
          <span
            data-aos="fade-up"
            data-aos-delay="800"
            class="inline-block text-[#5fd19c]"
            >+</span
          >
          <span data-aos="fade-up" data-aos-delay="900" class="inline-block"
            >{{ $t('_home.web_apps') }}
          </span>
          <span data-aos="fade-up" data-aos-delay="900" class="block"
            >{{ $t('_home.development') }}</span
          >
        </span>
      </div>
      <div class="point one flat-1"></div>
    </CoreSection>
    <CoreSection
      items="start"
      justify="center"
      id="3"
      color="#2A00FF"
      sm-px="0"
      sm-size="64"
      class="h-auto md:h-[20rem] lg:h-[30rem] xl:h-[50rem] relative"
    >
      <div class="w-full px-0 md:px-0 text-center flat-2">
        <h3 class="wais-text text-center font-normal">{{ $t('_home.our_clients') }}</h3>
        <div class="w-full overflow-x-hidden hidden md:flex">
          <div class="p-0 md:px-5 flex marquee-content w-full">
            <div
              class="p-2 md:p-4 flex justify-center align-center flat-2 marquee-item"
              v-for="({ l, n }, index) of clients"
              :key="index"
            >
              <img
                :src="!darkMode ? n : l"
                :alt="!darkMode ? n : l"
                class="mx-auto"
              />
            </div>
          </div>
        </div>
        <div class="w-full overflow-x-hidden inline md:hidden">
          <div class="p-0 md:px-5 block w-full grid grid-cols-2 gap-4">
            <div
              :class="`py-4 px-8 md:p-4 justify-center align-center flat-2 w-full flex`"
              v-for="({ l, n, span }, index) of smClients"
              :key="index"
            >
              <img :src="!darkMode ? n : l" :alt="!darkMode ? n : l" />
            </div>
          </div>
        </div>
      </div>
      <div class="point two flat-1"></div>
    </CoreSection>
  </div>
</template>

<script>
import CoreSection from "../components/core/CoreSection";
import { mapState } from "vuex";
import aosMixin from "../mixins/aos.mixin";
import SocialNetworkBar from "../components/core/SocialNetworkBar.vue";

export default {
  mixins: [aosMixin],
  components: {
    CoreSection,
    SocialNetworkBar
  },
  head() {
    return {
      title: this.$t('home'),
    }
  },
  computed: {
    ...mapState({
      darkMode: (state) => state.darkMode,
    }),
    isEN() {
      return this.$i18n.locale === "en";
    },
  },
  data: () => ({
    smClients: [
      {
        l: require(`../assets/img/clients/century-l.svg`),
        n: require(`../assets/img/clients/century-n.svg`),
      },
      {
        l: require(`assets/img/clients/check-l.svg`),
        n: require(`assets/img/clients/check-n.svg`),
      },
      {
        l: require(`../assets/img/clients/pastora-l.svg`),
        n: require(`../assets/img/clients/pastora-n.svg`),
      },
      {
        l: require(`../assets/img/clients/hebe-l.svg`),
        n: require(`../assets/img/clients/hebe-n.svg`),
      },
      {
        l: require(`../assets/img/clients/nikk-l.svg`),
        n: require(`../assets/img/clients/nikk-n.svg`),
      },
      {
        l: require(`../assets/img/clients/resinca-l.svg`),
        n: require(`../assets/img/clients/resinca-n.svg`),
      },
    ],
    clients: [
      {
        l: require(`../assets/img/clients/century-l.svg`),
        n: require(`../assets/img/clients/century-n.svg`),
      },
      {
        l: require(`assets/img/clients/check-l.svg`),
        n: require(`assets/img/clients/check-n.svg`),
      },
      {
        l: require(`../assets/img/clients/pastora-l.svg`),
        n: require(`../assets/img/clients/pastora-n.svg`),
      },
      {
        l: require(`../assets/img/clients/hebe-l.svg`),
        n: require(`../assets/img/clients/hebe-n.svg`),
      },
      {
        l: require(`../assets/img/clients/nikk-l.svg`),
        n: require(`../assets/img/clients/nikk-n.svg`),
      },
      {
        l: require(`../assets/img/clients/resinca-l.svg`),
        n: require(`../assets/img/clients/resinca-n.svg`),
      },
      {
        l: require(`../assets/img/clients/century-l.svg`),
        n: require(`../assets/img/clients/century-n.svg`),
      },
      {
        l: require(`assets/img/clients/check-l.svg`),
        n: require(`assets/img/clients/check-n.svg`),
      },
      {
        l: require(`../assets/img/clients/pastora-l.svg`),
        n: require(`../assets/img/clients/pastora-n.svg`),
      },
      {
        l: require(`../assets/img/clients/hebe-l.svg`),
        n: require(`../assets/img/clients/hebe-n.svg`),
      },
      {
        l: require(`../assets/img/clients/nikk-l.svg`),
        n: require(`../assets/img/clients/nikk-n.svg`),
      },
      {
        l: require(`../assets/img/clients/resinca-l.svg`),
        n: require(`../assets/img/clients/resinca-n.svg`),
      },
      {
        l: require(`../assets/img/clients/century-l.svg`),
        n: require(`../assets/img/clients/century-n.svg`),
      },
      {
        l: require(`assets/img/clients/check-l.svg`),
        n: require(`assets/img/clients/check-n.svg`),
      },
      {
        l: require(`../assets/img/clients/pastora-l.svg`),
        n: require(`../assets/img/clients/pastora-n.svg`),
      },
      {
        l: require(`../assets/img/clients/hebe-l.svg`),
        n: require(`../assets/img/clients/hebe-n.svg`),
      },
      {
        l: require(`../assets/img/clients/nikk-l.svg`),
        n: require(`../assets/img/clients/nikk-n.svg`),
      },
      {
        l: require(`../assets/img/clients/resinca-l.svg`),
        n: require(`../assets/img/clients/resinca-n.svg`),
      },
    ],
    showPointer: false,
  }),
  async mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("customer-animation");
          return;
        }
        entry.target.classList.remove("customer-animation");
      });
    });

    observer.observe(document.querySelector(".customer"));

    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("cliente-animation");
          return;
        }
        entry.target.classList.remove("cliente-animation");
      });
    });

    observer2.observe(document.querySelector(".cliente"));
  },
  methods: {
    enter(e) {
      this.showPointer = true;
    },
    leave(e) {
      this.showPointer = false;
    },
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async updateSpotlight(e) {
      const spotlight = document.querySelectorAll(`.circle`);
      if (spotlight) {
        for (const el of spotlight) {
          el.style.transform = `translate3d(${e.x - 100}px, ${
            e.y
          }px, 0px) rotate(-25deg)`;
          await this.timeout(200);
        }
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.animationInterval);
  },
};
</script>

<style>
.circle {
  transform: rotate(-25deg);
  border-radius: 50%;
  background: transparent;
  border: 1px solid #000000;
  position: absolute;
  transition: all 0.8ms ease-in-out;
  will-change: transform;
  transform-style: preserve-3d;
  @apply h-2 md:h-[50px] lg:h-[75px] xl:h-[120px] 2xl:h-[150px] w-4 md:w-[100px] lg:w-[150px] xl:w-[240px] 2xl:w-[300px];
}

.circle-in-2 {
  margin-top: 3vh;
  margin-left: 2vh;
}

.circle-in-3 {
  margin-top: 6vh;
  margin-left: 4vh;
}

.circle-in-4 {
  margin-top: 9vh;
  margin-left: 6vh;
}

.circle-in-5 {
  margin-top: 12vh;
  margin-left: 8vh;
}

.marquee-content {
  display: flex;
  animation: scroll-marquee 20s linear infinite;
}

.marquee-item {
  flex: 0 0 16vw;
  margin: 0 1vw;
}

.marquee-item img {
  display: block;
  width: 100%;
}

.s-circle-1 {
  background: #99fcce;
  width: 180vh;
  height: 180vh;
  /*left: -19.64px;*/
  /*top: -91.02px;*/
}

.s-circle-2 {
  background: #f7633f;
  width: 220vh;
  height: 220vh;
  /*left: -65px;*/
  /*top: 62px;*/
}

.s-circle-3 {
  background: #b749e6;
  width: 200vh;
  height: 200vh;
  /*top: 58px;*/
  /*z-index: 1;*/
  /*animation: super-circle infinite 4s;*/
}

.super-circle {
  position: absolute;
  /*width: 160vh;*/
  /*height: 160vh;*/
  filter: blur(25vh);
  /*-webkit-box-shadow: inset 6px 2px 44px 20px #FFFFFF;*/
  /*box-shadow: inset 6px 2px 44vh 20px #FFFFFF;*/
  border-radius: 100vh;
  transition: all 5s ease-in-out;
}

@keyframes super-circle {
  0% {
    transform: translate3d(10vh, 10vh, 0);
  }
  10% {
    transform: translate3d(20vh, 20vh, 0);
  }
  20% {
    transform: translate3d(30vh, 30vh, 0);
  }
  30% {
    transform: translate3d(40vh, 40vh, 0);
  }
  40% {
    transform: translate3d(50vh, 50vh, 0);
  }
  50% {
    transform: translate3d(60vh, 60vh, 0);
  }
  60% {
    transform: translate3d(70vh, 70vh, 0);
  }
  70% {
    transform: translate3d(80vh, 80vh, 0);
  }
  80% {
    transform: translate3d(80vh, 80vh, 0);
  }
  90% {
    transform: translate3d(90vh, 90vh, 0);
  }
  100% {
    transform: translate3d(100vh, 100vh, 0);
  }
}

@keyframes scroll-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translatex(-144vw);
  }
}

.GFG {
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.customer, .cliente {
  background: #666be4;
  padding: 0 10px 0 10px;
  color: #fff;
  line-height: 1px;
  position: relative;
  box-sizing: content-box;
  transition: all .5s ease-in-out;
  padding-left: 10px;
}

.customer::before {
  content: "customers";
}

.cliente::before {
  content: "clientes";
}

.customer-animation::after, .cliente-animation::after {
  content: "";
  background: #fff;
  height: 7%;
  border-bottom: 0;
  position: absolute;
  top: 50%;
  left: 0;
  animation: line 5s ease;
  width: 0%;
}

.dark .customer-animation::after {
  background: #666be4;
}

.customer-animation::before {
  content: "fans";
  animation: fans 6s ease;
}

.cliente-animation::before {
  content: "fans";
  animation: fans2 6s ease;
}

@keyframes line {
  0% {
    width: 100%;
    transform: scaleX(0);
    transform-origin: center;
  }
  10% {
    transform: scaleX(0);
    transform-origin: center;
  }
  20% {
    transform: scaleX(1);
    transform-origin: center;
  }
  30% {
    /* width: 100%; */
    transform: scaleX(1);
    transform-origin: center;
  }
  40% {
    width: 100%;
    transform: scaleX(0);
    transform-origin: center;
  }
  50% {
    transform: scaleX(0);
    transform-origin: center;
  }
  60% {
    transform: scaleX(0);
    transform-origin: center;
  }
  70% {
    transform: scaleX(0);
    transform-origin: center;
  }
  80% {
    transform: scaleX(0);
    transform-origin: center;
  }
  90% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(0);
    transform-origin: center;
  }
}

@keyframes fans {
  0% {
    content: "customers";
    opacity: 1;
  }
  30% {
    content: "customers";
    opacity: 0;
  }
  40% {
    content: "fans";
    opacity: 0;
  }
  100% {
    content: "fans";
    opacity: 1;
  }
}

@keyframes fans2 {
  0% {
    content: "clientes";
    opacity: 1;
  }
  30% {
    content: "clientes";
    opacity: 0;
  }
  40% {
    content: "fans";
    opacity: 0;
  }
  100% {
    content: "fans";
    opacity: 1;
  }
}

.dark .customer {
  color: #666be4;
  background: transparent;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .point.one {
    left: 0;
    top: 0;
    width: 35vh;
    background: #adf1d6;
    height: 35vh;
    filter: blur(10vh);
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 20vh;
    height: 20vh;
    background: #2a00ff;
    filter: blur(20vh);
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .point.one {
    left: -5vh;
    top: 0;
    width: 35vh;
    height: 35vh;
    background: #adf1d6;
    filter: blur(10vh);
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 20vh;
    height: 20vh;
    background: #2a00ff;
    filter: blur(20vh);
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .point.one {
    left: -40vh;
    top: -41vh;
    background: #adf1d6;
  }

  .point.two {
    right: 20vh;
    top: 15vh;
    width: 40vh;
    height: 40vh;
    background: #2a00ff;
    filter: blur(25vh);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .point.one {
    left: -40vh;
    top: -41vh;
    background: #adf1d6;
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 20vh;
    height: 20vh;
    background: #2a00ff;
    filter: blur(15vh);
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .point.one {
    left: -40vh;
    top: -41vh;
    background: #adf1d6;
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 30vh;
    height: 30vh;
    background: #2a00ff;
    filter: blur(18vh);
  }
}

.ellipse {
  border-color: #45597e;
  border-style: solid;
  border-width: 5px;
  height: 100px;
  width: 150px;
  border-radius: 50%;
  transform: rotate(15deg);
}

</style>
