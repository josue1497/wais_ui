<template>
  <div class="">
    <section class="w-full flex main-banner relative" @mousemove="updateSpotlight" @mouseleave="leave"
             @mouseenter="enter">
      <canvas width="32" height="32" class="absolute"></canvas>
      <div class="circle-out" v-if="showPointer">
        <div class="circle circle-in-1" id="circle"></div>
        <div class="circle circle-in-2"></div>
        <div class="circle circle-in-3"></div>
        <div class="circle circle-in-4"></div>
        <div class="circle circle-in-5"></div>
      </div>
      <div class="flex flex-col justify-start items-start my-44 md:my-20 w-full relative">
        <div class="flex flex-col justify-center items-center w-full pr-4 pl-4 md:pr-24 md:pl-0">
          <h1
            class="text-[13vh] md:text-[12rem] mx-auto md:ml-auto leading-[5rem] md:leading-[10rem] flex flex-col w-full md:w-4/6">
            <span class="mr-auto">Think</span><span class="ml-auto">Wisely</span>
          </h1>
        </div>
      </div>
      <div class="w-full md:w-3/4 absolute inset-x-0 bottom-0 py-10 md:py-3">
        <h1
          class="text-[10vh] md:text-[10rem] leading-[5rem] md:leading-[10rem] flex flex-col w-3/4 md:w-full GFG uppercase">
          <span class="block">Marketing</span><span class="block">Agency</span>
        </h1>
      </div>
      <div class="icon-bar hidden  md:block">
        <a href="https://www.instagram.com/waisdigital/" target="_blank"
           class="facebook text-black bg-transparent dark:text-white"><i
          class="fa-brands fa-instagram"></i></a>
        <a href="https://www.linkedin.com/company/wais-digital/?viewAsMember=true" target="_blank"
           class="twitter text-black bg-transparent dark:text-white"><i
          class="fa-brands fa-linkedin-in"></i></a>
        <a href="https://www.facebook.com/waisdigital" target="_blank"
           class="google text-black bg-transparent dark:text-white"><i
          class="fa-brands fa-facebook-f"></i></a>
        <a href="https://www.behance.net/waisdigita46b7/projects" target="_blank"
           class="youtube text-black bg-transparent dark:text-white"><i
          class="fa-brands fa-behance"></i></a>
      </div>
    </section>
    <CoreSection justify="start" items="center" id="1" sm-px="0" px="16" class="h-72 md:h-screen">
      <div class="w-full py-10 px-0 md:px-16  flat-3" data-aos="slide-up">
        <h3 class="text-4xl md:text-7xl text-left text-black dark:text-white w-full md:w-3/4 px-8">
          Attract <span class="customer"></span> who connect with the essence of your brand
        </h3>
      </div>
    </CoreSection>
    <CoreSection id="2" sm-px="12" px="16" sm-size="72" class="h-72 md:h-screen relative">
      <h3 class="text-[24px] md:text-[55px] text-center w-11/12 md:w-full leading-[27px] md:leading-[73px] flat-3"
          data-aos="slide-up"
          :data-aos-delay="100">
        <span data-aos="fade-up"
              :data-aos-delay="100">Marketing
        <span class="text-[#666be4]">+</span>
        Communication <span
            class="text-[#df6469]">+</span>
        <span data-aos="fade-up" class="block"
              :data-aos-delay="300">Customer Experience</span> <span class="block">Graphic Design
        <span class="text-[#5fd19c]">+</span>
        <span data-aos="fade-up"
              :data-aos-delay="400">Web / Apps <span class="block">Development</span></span>
          </span>
        </span>
      </h3>
      <div class="point one flat-1"></div>
    </CoreSection>
    <CoreSection items="start" justify="center" id="3" color="#2A00FF" sm-px="0" sm-size="64"
                 class="h-auto md:h-screen relative">
      <div class="w-full px-0 md:px-0 text-center">
        <h3 class="text-[42px] md:text-[74px] text-center flat-2">
          Our clients
        </h3>
        <div class="w-full overflow-x-hidden">
          <div class=" p-0 md:px-5 flex marquee-content w-full">
            <div class="p-2 md:p-4 flex justify-center align-center flat-2 marquee-item"
                 v-for="({l, n}, index) of clients" :key="index" >
              <img :src="!darkMode? n : l" :alt="!darkMode? n : l" class="mx-auto">
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
    import {mapState} from 'vuex'
    import aosMixin from '../mixins/aos.mixin'

    export default {
        components: {
            CoreSection
        },
        computed: {
            ...mapState({
                darkMode: (state) => state.darkMode
            })
        },
        data: () => ({
            clients: [
                {l: require(`../assets/img/clients/century-l.svg`), n: require(`../assets/img/clients/century-n.svg`)},
                {l: require(`assets/img/clients/check-l.svg`), n: require(`assets/img/clients/check-n.svg`)},
                {l: require(`../assets/img/clients/pastora-l.svg`), n: require(`../assets/img/clients/pastora-n.svg`)},
                {l: require(`../assets/img/clients/hebe-l.svg`), n: require(`../assets/img/clients/hebe-n.svg`)},
                {l: require(`../assets/img/clients/nikk-l.svg`), n: require(`../assets/img/clients/nikk-n.svg`)},
                {l: require(`../assets/img/clients/resinca-l.svg`), n: require(`../assets/img/clients/resinca-n.svg`)},
                {l: require(`../assets/img/clients/century-l.svg`), n: require(`../assets/img/clients/century-n.svg`)},
                {l: require(`assets/img/clients/check-l.svg`), n: require(`assets/img/clients/check-n.svg`)},
                {l: require(`../assets/img/clients/pastora-l.svg`), n: require(`../assets/img/clients/pastora-n.svg`)},
                {l: require(`../assets/img/clients/hebe-l.svg`), n: require(`../assets/img/clients/hebe-n.svg`)},
                {l: require(`../assets/img/clients/nikk-l.svg`), n: require(`../assets/img/clients/nikk-n.svg`)},
                {l: require(`../assets/img/clients/resinca-l.svg`), n: require(`../assets/img/clients/resinca-n.svg`)},
                {l: require(`../assets/img/clients/century-l.svg`), n: require(`../assets/img/clients/century-n.svg`)},
                {l: require(`assets/img/clients/check-l.svg`), n: require(`assets/img/clients/check-n.svg`)},
                {l: require(`../assets/img/clients/pastora-l.svg`), n: require(`../assets/img/clients/pastora-n.svg`)},
                {l: require(`../assets/img/clients/hebe-l.svg`), n: require(`../assets/img/clients/hebe-n.svg`)},
                {l: require(`../assets/img/clients/nikk-l.svg`), n: require(`../assets/img/clients/nikk-n.svg`)},
                {l: require(`../assets/img/clients/resinca-l.svg`), n: require(`../assets/img/clients/resinca-n.svg`)},
            ],
            showPointer: false,
        }),
        methods: {
            enter(e) {
                this.showPointer = true;
            },
            leave(e) {
                this.showPointer = false;
            },
            timeout(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            },
            async updateSpotlight(e) {
                const spotlight = document.querySelectorAll(`.circle`)
                if (spotlight) {
                    for (const el of spotlight) {
                        await this.timeout(150);
                        el.style.willChange = 'transform';
                        el.style.transform = `translate3d(${e.x}px, ${e.y}px, 0px) rotate(-25deg)`;
                        el.style.transformStyle = `preserve-3d`;
                    }

                }
            }
        },
        mixins: [aosMixin]
    }

</script>

<style>
  .circle {
    transform: rotate(-25deg);
    border-radius: 50%;
    background: transparent;
    border: 1px solid #000000;
    height: 150px;
    width: 300px;
    position: absolute;
    transition: all 1ms ease-in-out;

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
    0% { transform: translateX(0); }
    100% { transform: translatex(-144vw); }
  }

  .GFG {
    color: transparent;
    /*font-size: 50px;*/
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  .customer::before {
    content: "customers";
    animation: fans infinite 5s;
    padding-left: 10px;
  }

  @keyframes fans {

    0% {
      content: "customers";
      text-decoration: none;
    }

    50% {
      content: "customers";
      text-decoration: line-through;
    }

    75% {
      content: "fans";
      text-decoration: none;
    }
  }

  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }


  .links {
    padding-top: 15px;
  }

  .leading-title {
    line-height: 20px;
  }

  .title-content {
    width: 45%;
  }

  .customer {
    background: #666BE4;
    color: #fff;
    line-height: 1px;
  }

  .dark .customer {
    color: #666BE4;
    background: transparent;
  }


  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .point.one {
      left: 0;
      top: 0;
      width: 35vh;
      background: #ADF1D6;
      height: 35vh;
      filter: blur(10vh);
    }

    .point.two {
      right: 0;
      top: 20vh;
      width: 30vh;
      height: 30vh;
      background: #2A00FF;
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
      background: #ADF1D6;
      filter: blur(10vh);
    }

    .point.two {
      right: 0;
      top: 20vh;
      width: 30vh;
      height: 30vh;
      background: #2A00FF;
      filter: blur(20vh);
    }

  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .point.one {
      left: -40vh;
      top: -41vh;
      background: #ADF1D6;
    }

    .point.two {
      right: 0;
      top: 20vh;
      width: 60vh;
      height: 60vh;
      background: #2A00FF;
      filter: blur(20vh);
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .point.one {
      left: -40vh;
      top: -41vh;
      background: #ADF1D6;
    }

    .point.two {
      right: 0;
      top: 20vh;
      width: 60vh;
      height: 60vh;
      background: #2A00FF;
      filter: blur(20vh);
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {

    .point.one {
      left: -40vh;
      top: -41vh;
      background: #ADF1D6;
    }

    .point.two {
      right: 0;
      top: 20vh;
      width: 60vh;
      height: 60vh;
      background: #2A00FF;
      filter: blur(20vh);
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

  .icon-bar {
    position: fixed;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    z-index: 11;
  }

  .icon-bar a {
    display: block;
    text-align: center;
    padding: 16px;
    transition: all 0.4s ease;
    font-size: 20px;
  }

  .icon-bar a:hover {
    transform: translateY(-10px);
  }


</style>
