<template>
  <div>
    <section
      class="w-full flex main-banner bg relative overflow-hidden"
    >
      <div
        class="flex flex-col justify-start items-start my-56 md:my-36 lg:my-40 w-full relative"
        style="z-index: 10"
      >
        <div class="flex flex-col justify-center items-center w-full">
          <h1 class="home-title home-title-leading text-black dark:text-white flex flex-col w-full p-5 md:p-none md:w-3/4 lg:w-8/12">
            <span class="mr-auto">Think</span>
            <span class="sub-text-margin text-[#E25990] animate__animated animate__flip " v-if="bigger">Bigger</span>
            <span class="sub-positive-text-margin text-[#2AD39B] animate__animated animate__flipInX" v-if="positive">Positive</span>
            <span class="sub-text-margin text-[#6464F9] animate__animated animate__flip" v-if="bold">Bold</span>
            <Wisely class="sub-text-margin" v-if="wisely"></Wisely>
          </h1>
        </div>
      </div>
      <SocialNetworkBar></SocialNetworkBar>
      <div class="point banner-one flat-1"></div>
      <div class="point banner-two flat-1"></div>
      <div class="point banner-three flat-1"></div>
    </section>
    <CoreSection
      justify="center"
      items="center"
      id="fans"
      sm-px="0"
      px="16"
      class="h-screen md:h-screen md:justify-start md:items-center"
    >
      <div class="w-full py-10 px-0 md:px-16 text-[2rem]flat-3">
        <h3
          data-aos="fade-up"
          class="wais-text text-left text-black dark:text-white w-full 2xl:w-3/4 px-8 relative"
        >
          <span class="block"
            >{{$t('_home.customer_text_1')}}
              <span :class="`customer customers-animation customer-animation-fade relative`" :data-customer="$t('_home.customers')"></span>
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
      class="h-screen md:h-screen relative"
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
      class="h-screen md:h-[20rem] lg:h-[30rem] xl:h-[50rem] relative items-center md:items-start"
    >
      <div class="w-full px-0 md:px-0 text-center flat-2">
        <h3 class="wais-text text-center font-normal">{{ $t('_home.our_clients') }}</h3>
        <div class="w-full overflow-x-hidden hidden md:flex" v-if="resetImages">
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
        <div class="max-w-full  overflow-x-hidden flex md:hidden slider my-auto" v-if="resetImages">
          <div class="p-0 md:px-5 slide-track ">
            <div
              class="justify-center align-center flat-2 w-full flex mx-5 my-auto slide"
              v-for="({ l, n }, index) of clients"
              :key="index"
            >
              <img :src="!darkMode ? n : l" :alt="!darkMode ? n : l" class="mx-5" height="350" width="550"/>
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
    Wisely
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
    bigger: true,
    positive: false,
    bold: false,
    wisely: false,
    currentImage: 0,
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
    this.animations()
    this.nextImage()

  },
  methods: {
    ...mapActions(["setResetImages"]),
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async animations(){
      const transition = 2 * 1000
      await this.timeout(transition)
      this.bigger = this.bold = this.wisely = this.positive = false
      this.positive = true
      await this.timeout(1000)
      this.bigger = this.bold = this.wisely = this.positive = false
      this.bold = true
      await this.timeout(1500)
      this.bigger = this.bold = this.wisely = this.positive = false
      this.wisely = true
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

.customer-animation-fade {
  animation: customer-fade 2s ease-in-out;
  animation-delay: 1.5s;
}
.customer {
  background: #666be4;
  padding: 0 10px 0 10px;
  color: #fff;
  line-height: 1px;
  position: relative;
  box-sizing: content-box;
  transition: all .5s ease-in-out;
  padding-left: 10px;
}

.dark .customer {
  background: transparent;
  color: #666be4;
}

@keyframes customer-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.customer::before {
  content: attr(data-customer);
}
.customer-animation::after {
  content: "";
  background: #fff;
  height: 7%;
  border-bottom: 0;
  position: absolute;
  top: 50%;
  left: 0;
  animation: line 5s ease;
  transition: all .5s ease-in-out;
  width: 0%;
}

.dark .customer-animation::after {
  background: #666be4;
}

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
    width: 100%;
    transform: scaleX(0);
    transform-origin: left;
  }
  10% {
    transform: scaleX(0);
    transform-origin: left;
  }
  20% {
    transform: scaleX(1);
    transform-origin: left;
  }
  30% {
    /* width: 100%; */
    transform: scaleX(1);
    transform-origin: left;
  }
  40% {
    width: 100%;
    transform: scaleX(0);
    transform-origin: right;
  }
  50% {
    transform: scaleX(0);
    transform-origin: right;
  }
  60% {
    transform: scaleX(0);
    transform-origin: right;
  }
  70% {
    transform: scaleX(0);
    transform-origin: right;
  }
  80% {
    transform: scaleX(0);
    transform-origin: right;
  }
  90% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(0);
    transform-origin: right;
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

  .point.banner-one {
    height: 20vh;
    width: 20vh;
    filter: blur(3.5vh);
  }

  .point.banner-two {
    width: 20vh;
    height: 20vh;
    animation-delay: 3s;
    filter: blur(3.5vh);
  }

  .point.banner-three {
    width: 20vh;
    height: 20vh;
    animation-delay: 1s;
    filter: blur(3.5vh);
  }

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {

  .point.banner-one {
    top: 0;
    right: 5vh;
  }

  .point.banner-two {
    right: -5vh;
    bottom: 20vh;
  }

  .point.banner-three {
    left: -5vh;
    bottom: 15vh;
  }

  .point.one {
    left: 0;
    top: 0;
    width: 35vh;
    height: 35vh;
    filter: blur(10vh);
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 20vh;
    height: 20vh;
    filter: blur(20vh);
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .point.banner-one {
    right: 5vh;
    top: 0;
  }

  .point.banner-two {
    right: -5vh;
    bottom: 20vh;
  }

  .point.banner-three {
    left: -5vh;
    bottom: 15vh;
  }

  .point.one {
    left: -5vh;
    top: 0;
    width: 35vh;
    height: 35vh;
    filter: blur(10vh);
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 20vh;
    height: 20vh;
    filter: blur(20vh);
  }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  .point.banner-one {
    right: unset;
    top: unset;
    left: 10vh;
    bottom: 10vh;
  }

  .point.banner-two {
    right: 10vh;
    bottom: 15vh;
  }

  .point.banner-three {
    left: unset;
    bottom: 15vh;
    right: 5vh;
  }

  .point.one {
    left: -40vh;
    top: -41vh;
  }

  .point.two {
    right: 20vh;
    top: 15vh;
    width: 40vh;
    height: 40vh;
    filter: blur(25vh);
  }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
  .point.banner-one {
    right: unset;
    top: unset;
    left: 10vh;
    bottom: 10vh;
  }

  .point.banner-two {
    left: 46vh;
    top: -2vh;
    right: unset;
    bottom: unset;
  }

  .point.banner-three {
    left: unset;
    bottom: 15vh;
    right: 5vh;
  }

  .point.one {
    left: -40vh;
    top: -41vh;
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 20vh;
    height: 20vh;
    filter: blur(15vh);
  }
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .point.one {
    left: -40vh;
    top: -41vh;
  }

  .point.two {
    right: 20vh;
    top: 10vh;
    width: 30vh;
    height: 30vh;
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

.text-wisely {
  background: rgb(0,214,161);
  background: linear-gradient(90deg, rgba(0,214,161,1) 0%, rgba(255,88,146,1) 35%, rgba(118,119,253,1) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 150% auto;
  padding-bottom: 4rem;
}

.sub-text-margin {
  @apply ml-[6rem] md:ml-[12.5rem] lg:ml-[14rem] xl:ml-[15rem] 2xl:ml-[20rem];
}

.sub-positive-text-margin {
  @apply ml-[3rem] md:ml-[12.5rem] lg:ml-[14rem] xl:ml-[15rem] 2xl:ml-[20rem];
}

.sm-marquee-item {
  height: 100%;
  width: 100vh
}

.slider {
	height: 50vh;
	overflow:hidden;
	position: relative;
	width: 960px;
}

.slide-track {
		animation: scroll 40s linear infinite;
		display: flex;
		width: calc(350px * 18);
	}
	
	.slide {
		height: 200px;
		width: 350px;
	}

@keyframes scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-350px * 7))}
}

</style>
