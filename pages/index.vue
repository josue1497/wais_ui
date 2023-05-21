<template>
  <div>
    <section
      class="w-full flex main-banner bg relative"
    >
      <div
        class="flex flex-col justify-center lg:justify-center items-center w-full relative"
        style="z-index: 10"
      >
        <div class="flex flex-col justify-center items-center w-full">
          <h1 class="home-title home-title-leading font-normal text-black dark:text-white flex flex-col justify-start w-full px-2 md:p-none md:w-3/4 lg:w-8/12 min-h-[35vh] md:min-h-[62vh] lg:min-h-[65vh] xl:min-h-[62vh] 2xl:min-h-[64vh]">
            <span class="mr-auto">Think</span>
            <Animated enter="fadeIn" leave="fadeOut" :duration="{ enter: 500, leave: 500 }">
              <span class="sub-text-margin padding-aux text-[#E25990] animate__animated animate__fadeIn " v-if="bigger">Bigger</span>
            </Animated>
            <Animated enter="fadeIn" leave="fadeOut" :duration="{ enter: 500, leave: 500 }">
              <span class="sub-positive-text-margin padding-aux text-[#2AD39B] animate__animated animate__flipInX" v-if="positive">Positive</span>
            </Animated>
            <Animated enter="fadeIn" leave="fadeOut" :duration="{ enter: 500, leave: 500 }">
              <span class="sub-text-margin padding-aux text-[#6464F9] animate__animated animate__fadeIn" v-if="bold">Bold</span>
            </Animated>
            <Wisely class="sub-wisely-text-margin" v-if="wisely"></Wisely>
          </h1>
          <NuxtLink class="get-started-button flex flex-row align-center justify-center" to="/contact">
            <span>{{ $t("start_project") }}</span>
          </NuxtLink>
        </div>
      </div>
      <SocialNetworkBar></SocialNetworkBar>
      <div class="animate__animated animate__fadeIn" v-if="showBannerOne">
        <div class="point point-banner banner-one flat-1 banner-color-1"></div>
      </div>
      <div class="animate__animated animate__fadeIn" v-if="showBannerTwo">
        <div class="point point-banner banner-two flat-1 banner-color-2"></div>
      </div>
      <div class="animate__animated animate__fadeIn" v-if="showBannerThree">
        <div class="point point-banner banner-three flat-1 banner-color-3"></div>
      </div>
    </section>
    <!-- <img src="img/zona_segura_wais.png" alt="jp;a"/>    -->
    <CoreSection
      justify="center"
      items="center"
      id="fans"
      sm-px="0"
      px="16"
      class="h-[50vh] md:h-screen md:justify-start md:items-center"
    >
      <div class="w-full py-10 px-0 md:px-16 text-[2rem] flat-3">
        <h3
          data-aos="fade-up"
          class="wais-text text-left text-black dark:text-white w-full 2xl:w-3/4 px-8 relative"
        >
          <span class="block"
            >{{$t('_home.customer_text_1')}}
                <span :class="`customer customers-animation relative`" :data-customer="$t('_home.customers')"></span>
          </span>
          <span class="block">{{$t('_home.customer_text_2')}}</span>
        </h3>
      </div>
    </CoreSection>
    <CoreSection
      id="services"
      sm-px="12"
      px="16"
      sm-size="72"
      class="h-[50vh] md:h-screen relative"
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
      id="clients"
      color="#2A00FF"
      sm-px="0"
      sm-size="64"
      class="h-[75vh] md:h-[20rem] lg:h-[30rem] xl:h-[50rem] relative items-center md:items-start"
    >
      <div class="w-full px-0 md:px-0 text-center flat-2">
        <h3 class="wais-text text-center font-normal">{{ $t('_home.our_clients') }}</h3>
        <div class="w-full overflow-x-hidden hidden md:flex slider" v-if="resetImages">
          <div class="p-0 md:px-5 flex slide-track w-full">
            <div
              class="p-2 md:p-4 flex justify-center align-center flat-2 slide"
              v-for="({ l, n }, index) of clients"
              :key="index"
            >
              <img
                :src="!darkMode ? n : l"
                :alt="!darkMode ? n : l"
                class="mx-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div class="overflow-x-hidden slider-sm my-auto" v-if="resetImages">
          <div class="p-0 md:px-5 slide-track ">
            <div
              class="justify-center align-center flat-2 w-full flex mx-5 my-auto slide"
              v-for="({ l, n }, index) of clients"
              :key="index"
            >
              <img :src="!darkMode ? n : l" :alt="!darkMode ? n : l" class="mx-5" loading="lazy"/>
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
import { mapState, mapActions } from "vuex";
import aosMixin from "../mixins/aos.mixin";
import SocialNetworkBar from "../components/core/SocialNetworkBar.vue";
import Wisely from "../components/core/Wisely.vue";

export default {
  mixins: [aosMixin],
  components: {
    CoreSection,
    SocialNetworkBar,
    Wisely,
},
  head() {
    return {
      title: this.$t('home'),
    }
  },
  computed: {
    ...mapState({
      darkMode: (state) => state.darkMode,
      resetImages: (state) => state.resetImages,
    }),
    isEN() {
      return this.$i18n.locale === "en";
    },
  },
  data: () => ({
    smClients: [
      {
        l: `/img/clients/century-l.svg`,
        n: `/img/clients/century-n.svg`,
      },
      {
        l: `/img/clients/check-l.svg`,
        n: `/img/clients/check-n.svg`,
      },
      {
        l: `/img/clients/pastora-l.svg`,
        n: `/img/clients/pastora-n.svg`,
      },
      // {
      //   l: `/img/clients/hebe-l.svg`,
      //   n: `/img/clients/hebe-n.svg`,
      // },
      {
        l: `/img/clients/nikk-l.svg`,
        n: `/img/clients/nikk-n.svg`,
      },
      {
        l: `/img/clients/resinca-l.svg`,
        n: `/img/clients/resinca-n.svg`,
      },
    ],
    clients: [
      {
        l: `/img/clients/century-l.svg`,
        n: `/img/clients/century-n.svg`,
      },
      {
        l: `/img/clients/check-l.svg`,
        n: `/img/clients/check-n.svg`,
      },
      {
        l: `/img/clients/pastora-l.svg`,
        n: `/img/clients/pastora-n.svg`,
      },
      // {
      //   l: `/img/clients/hebe-l.svg`,
      //   n: `/img/clients/hebe-n.svg`,
      // },
      {
        l: `/img/clients/nikk-l.svg`,
        n: `/img/clients/nikk-n.svg`,
      },
      {
        l: `/img/clients/resinca-l.svg`,
        n: `/img/clients/resinca-n.svg`,
      },
      {
        l: `/img/clients/century-l.svg`,
        n: `/img/clients/century-n.svg`,
      },
      {
        l: `/img/clients/check-l.svg`,
        n: `/img/clients/check-n.svg`,
      },
      {
        l: `/img/clients/pastora-l.svg`,
        n: `/img/clients/pastora-n.svg`,
      },
      // {
      //   l: `/img/clients/hebe-l.svg`,
      //   n: `/img/clients/hebe-n.svg`,
      // },
      {
        l: `/img/clients/nikk-l.svg`,
        n: `/img/clients/nikk-n.svg`,
      },
      {
        l: `/img/clients/resinca-l.svg`,
        n: `/img/clients/resinca-n.svg`,
      },
      {
        l: `/img/clients/century-l.svg`,
        n: `/img/clients/century-n.svg`,
      },
      {
        l: `/img/clients/check-l.svg`,
        n: `/img/clients/check-n.svg`,
      },
      {
        l: `/img/clients/pastora-l.svg`,
        n: `/img/clients/pastora-n.svg`,
      },
      // {
      //   l: `/img/clients/hebe-l.svg`,
      //   n: `/img/clients/hebe-n.svg`,
      // },
      {
        l: `/img/clients/nikk-l.svg`,
        n: `/img/clients/nikk-n.svg`,
      },
      {
        l: `/img/clients/resinca-l.svg`,
        n: `/img/clients/resinca-n.svg`,
      },
    ],
    showPointer: false,
    showBannerOne: false,
    showBannerTwo: false,
    showBannerThree: false,
    bigger: true,
    positive: false,
    bold: false,
    wisely: false,
    currentImage: 0,
  }),
  async mounted() {
    const vm = this;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(async (entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("customer-animation");
          return;
        }
        entry.target.classList.remove("customer-animation");
      });
    });

    observer.observe(document.querySelector(".customer"));
    this.animationsPoints()
    this.animations()
    this.nextImage()

  },
  methods: {
    ...mapActions(["setResetImages"]),
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async animations(){
      const transition = 1 * 1000
      // 1.01 porque si es 1 directamente parpadea la animacion
      const leave = 1.01 * 1000
      await this.timeout(transition)
      this.bigger = this.bold = this.wisely = this.positive = false
      await this.timeout(leave)
      this.positive = true
      await this.timeout(transition)
      this.bigger = this.bold = this.wisely = this.positive = false
      await this.timeout(leave)
      this.bold = true
      await this.timeout(transition)
      this.bigger = this.bold = this.wisely = this.positive = false
      await this.timeout(leave)
      this.wisely = true
    },
    async animationsPoints(){
      const transition = 1 * 1000
      // 1.01 porque si es 1 directamente parpadea la animacion
      // const leave = 1.01 * 1000
      await this.timeout(transition)
      this.showBannerOne = true
      await this.timeout(transition)
      this.showBannerTwo = true
      await this.timeout(transition)
      this.showBannerThree = true


    },
    async nextImage(){
      let index = 0;
      while(index <= this.smClients.length - 1) {
        await this.timeout(2000)
        this.currentImage = index
        if(index === this.smClients.length - 1){
          index = 0
        } else index++
      }

    },
  },
  beforeDestroy() {
    clearInterval(this.animationInterval);
  },
};
</script>

<style>
.arrow-down {
  animation: float 6s ease-in-out infinite;
}

/*Keyframes float div */
@keyframes float {
 0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-20px);
	}
	100% {
		transform: translatey(0px);
	}
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

@keyframes scroll-marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translatex(-144vw);
  }
}

.customer, .fans {
  background: transparent;
  color: #666be4;
  position: relative;
  box-sizing: content-box;
  transition: all .5s ease-in-out;
  display: inline-flex;
}

.dark .customer, .dark .fans {
  background: transparent;
  color: #666be4;
}

.customer::before {
  content: attr(data-customer);
}
/* .customer-animation::after {
  content: "";
  background: #666be4;
  height: 100%;
  border-bottom: 0;
  position: absolute;
  animation: line 4.5s linear;
  animation-delay: 1.5s;
  transition: all .8s linear ;
  width: 100%;
} */
/*
.dark .customer-animation::after {
  background: #666be4;
} */

.customer-animation::before {
  content: "fans";
  animation: fans 4s ease;
}
.cliente-animation::before {
  content: "fans";
  animation: fans2 4s ease;

}

@keyframes line {
  0% {
    transform: scaleX(0);
    transform-origin: left;
    justify-content: end;
  }
  10% {
    width: 100%;
    transform: scaleX(1);
    transform-origin: left;
    justify-content: start;
  }
  20% {
    transform: scaleX(1);
    transform-origin: left;
    justify-content: start;
  }
  30% {
    transform: scaleX(1);
    transform-origin: left;
    justify-content: start;
  }
  40% {
    transform: scaleX(1);
    transform-origin: left;
    justify-content: start;
  }
  50% {
    transform: scaleX(1);
    transform-origin: left;
    justify-content: start;
  }
  60% {
    width: 0%;
    transform: scaleX(0);
    transform-origin: right;
    justify-content: end;
  }
  70% {
    transform: scaleX(0);
    transform-origin: right;
    justify-content: end;
  }
  80% {
    transform: scaleX(0);
    transform-origin: right;
    justify-content: end;
  }
  90% {
    transform-origin: right;
    transform: scaleX(0);
    justify-content: end;
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
    justify-content: end;
  }
}

@keyframes fans {
  0% {
    content: attr(data-customer);
    opacity: 1;
  }
  30% {
    content: attr(data-customer);
    opacity: 1;
  }
  40% {
    content: attr(data-customer);
    opacity: 0;
  }
  50% {
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
    opacity: 1;
  }
  40% {
    content: "clientes";
    opacity: 0;
  }
  50% {
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
  }

  .point-banner {
    /* filter: blur(3.5vh); */
    @apply blur-[3.5vh] md:blur-[5vh] lg:md:blur-[6vh] w-[15vh] h-[15vh] md:w-[20vh] md:h-[20vh] lg:w-[25vh] lg:h-[25vh] xl:w-[30vh] xl:h-[30vh] 2xl:w-[35vh] 2xl:h-[35vh] ;
  }

  .point.banner-color-1 {
    @apply bg-[#7677fd] md:bg-[#ff89b2] ;
  }
  .point.banner-color-2 {
    @apply bg-[#ff89b2] md:bg-[#00d6a1];
  }
  .point.banner-color-3 {
    @apply bg-[#00d6a1] md:bg-[#7677fd];
  }

  .point.banner-one {
    @apply top-0 right-[5vh] md:right-[unset] md:top-[-10vh] md:left-[30vh] lg:left-[25vh] lg:top-[-25vh] xl:left-[35vh] xl:bottom-[-20vh] ;
  }

  .point.banner-two {
    /* animation-delay: 3s; */
    @apply bottom-[20vh] right-[8vh] md:right-[10vh] md:bottom-[-10vh] lg:right-[13vh] lg:bottom-[-12vh] xl:right-[12vh] xl:bottom-[-15vh] ;
  }

  .point.banner-three {
    /* animation-delay: 1s; */
    @apply left-[-2vh] bottom-[10vh] md:left-[-12vh] md:bottom-[-12vh] lg:bottom-[-20vh] lg:left-[-20vh] xl:bottom-[-20vh] xl:left-[-20vh] ;
  }

  .point.one {
    background: #00d6a1;
    @apply w-[10vh] h-[10vh] md:w-[15vh] md:h-[15vh] lg:w-[20vh] lg:h-[20vh] xl:w-[20vh] xl:h-[20vh] 2xl:w-[25vh] 2xl:h-[25vh] ;
  }
  .point.two {
    background: #2a00ff;
    @apply w-[15vh] h-[15vh] md:w-[15vh] md:h-[15vh] lg:w-[20vh] lg:h-[20vh] xl:w-[20vh] xl:h-[20vh] 2xl:w-[25vh] 2xl:h-[25vh] ;
  }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

  .point.one {
    left: 0;
    top: 0;
    filter: blur(5vh);
    -webkit-filter: blur(5vh);
  }

  .point.two {
    left: -5vh;
    top: 10vh;
    filter: blur(5vh);
    -webkit-filter: blur(5vh);
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {

  .point.one {
    left: -5vh;
    top: 0;
    /* width: 35vh;
    height: 35vh; */
    filter: blur(5vh);
    -webkit-filter: blur(5vh);
  }

  .point.two {
    left: -5vh;
    top: 10vh;
    /* width: 20vh;
    height: 20vh; */
    filter: blur(5vh);
    -webkit-filter: blur(5vh);
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {

  .point.one {
    left: -10vh;
    top: -10vh;
  }

  .point.two {
    left: -10vh;
    top: 15vh;
    filter: blur(8vh);
    -webkit-filter: blur(8vh);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .point.one {
    left: -10vh;
    top: -10vh;
  }

  .point.two {
    right: -5vh;
    top: 10vh;
    left: unset;
    filter: blur(8vh);
    -webkit-filter: blur(8vh);
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

.padding-aux {
  padding-bottom: 4rem;
}

.sub-text-margin {
  @apply ml-[7rem] md:ml-[12.5rem] lg:ml-[14rem] xl:ml-[15rem] 2xl:ml-[20rem];
}

.sub-positive-text-margin {
  @apply ml-[3rem] md:ml-[12.5rem] lg:ml-[14rem] xl:ml-[15rem] 2xl:ml-[20rem];
}

.sub-wisely-text-margin {
  @apply ml-[7rem] md:ml-[12.5rem] lg:ml-[15rem] xl:ml-[15rem] 2xl:ml-[10rem];
}

.sm-marquee-item {
  height: 100%;
  width: 100vh
}

.slider-sm {
	height: 50vh;
	overflow:hidden;
	position: relative;
	width: 960px;
}

.slider-sm .slide-track {
		animation: scroll-sm 40s linear infinite;
		display: flex;
		width: calc(350px * 18);
	}

	.slider-sm .slide-track .slide {
		height: 200px;
		width: 350px;
	}

@keyframes scroll-sm {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-350px * 7))}
}


/**
 new infinite banner
*/

/* .slider-sm {
  height: auto;
  margin: auto;
  overflow: hidden;
  align-items: center;
  @apply flex md:hidden;

} */

.slider {
  height: auto;
  margin: auto;
  overflow: hidden;
  align-items: center;
  width: calc(350px * 18);
  @apply hidden md:flex;

}


.slider .slide-track {
  display: flex;
  animation: scroll 40s linear infinite;
  -webkit-animation: scroll 40s linear infinite;
}

.slider .slide {
  display: flex;
}

.slider .slide img {
    width: auto;
    aspect-ratio: 16/9;
    object-fit: contain;
    padding: 10px;
    margin: 20px;
}

@keyframes scroll {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(calc(-240px * 5));
  }
}

</style>
