<template>
  <div>
    <section class="w-full flex main-banner relative overflow-hidden" @mousemove="updateSpotlight" @mouseleave="leave"
             @mouseenter="enter">
      <canvas width="32" height="32" class="absolute" id="granim-canvas"></canvas>
      <!--      style="transform: scale(2)"-->
      <div class="hidden md:block circle-out ">
        <div class="circle circle-in-1" :style="{transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)'}"></div>
        <div class="circle circle-in-2" :style="{transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)'}"></div>
        <div class="circle circle-in-3" :style="{transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)'}"></div>
        <div class="circle circle-in-4" :style="{transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)'}"></div>
        <div class="circle circle-in-5" :style="{transform: 'translate3d(40vw, 35vh, 0px) rotate(-25deg)'}"></div>
      </div>
      <div class="flex flex-col justify-start items-start my-44 md:my-20 w-full relative">
        <div class="flex flex-col justify-center items-center w-full ">
          <h1
            class="text-[77px] md:text-[180px] lg:text-[200px] xl:text-[277px] mx-auto md:ml-auto leading-[5rem] md:leading-[10rem] lg:leading-[12rem] xl:leading-[15rem] flex flex-col w-3/4 md:w-10/12 lg:w-8/12">
            <span class="mr-auto">Think</span><span class="ml-auto">Wisely</span>
          </h1>
        </div>
      </div>
      <div class="w-full md:w-3/4 absolute inset-x-0 bottom-0  px-0 py-10 md:px-14">
        <h1
          class="text-[90px] md:text-[180px] lg:text-[210px] xl:text-[359px] font-normal leading-[5rem] md:leading-[8rem] lg:leading-[12rem] xl:leading-[20rem] flex flex-col w-3/4 md:w-full GFG uppercase">
          <span class="block">Wais</span><span class="block">Digital</span>
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
        <h3
          class="text-[36px] md:text-[55px] lg:text-[70px] xl:text-[114px] leading-[2rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[8rem] text-left text-black dark:text-white w-full lg:w-3/4 px-8 relative">
          Attract <span class="customer relative"></span> who connect with the essence of your brand
        </h3>
      </div>
    </CoreSection>
    <CoreSection id="2" sm-px="12" px="16" sm-size="72" class="h-72 md:h-screen relative">
      <h3
        class="text-[24px] md:text-[44px] lg:text-[60px] xl:text-[82px] leading-[2rem] md:leading-[4rem] lg:leading-[5rem] xl:leading-[8rem] text-center w-11/12 md:w-full flat-3"
        data-aos="slide-up"
        :data-aos-delay="100">
        <span>Marketing
        <span class="text-[#666be4]">+</span>
        Communication <span
            class="text-[#df6469]">+</span>
        <span class="block">Customer Experience</span> <span class="block">Graphic Design
        <span class="text-[#5fd19c]">+</span>
        <span>Web / Apps <span class="block">Development</span></span>
          </span>
        </span>
      </h3>
      <div class="point one flat-1"></div>
    </CoreSection>
    <CoreSection items="start" justify="center" id="3" color="#2A00FF" sm-px="0" sm-size="64"
                 class="h-auto md:h-[20rem] lg:h-[30rem] xl:h-[50rem] relative">
      <div class="w-full px-0 md:px-0 text-center flat-2">
        <h3 class="text-[22px] md:text-[44px] lg:text-[74px] text-center">
          Our clients
        </h3>
        <div class="w-full overflow-x-hidden">
          <div class=" p-0 md:px-5 flex marquee-content w-full">
            <div class="p-2 md:p-4 flex justify-center align-center flat-2 marquee-item"
                 v-for="({l, n}, index) of clients" :key="index">
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
                        el.style.transform = `translate3d(${e.x}px, ${e.y}px, 0px) rotate(-25deg)`;
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
    transition: all .3ms ease-in-out;
    will-change: transform;
    transform-style: preserve-3d;
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

  @keyframes scroll-marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translatex(-144vw);
    }
  }

  .GFG {
    color: transparent;
    /*font-size: 50px;*/
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  .customer {
    background: #666BE4;
    padding: 0 10px 0 10px;
    color: #fff;
    line-height: 1px;
    position: relative;
    box-sizing: content-box;
  }

  .customer::after {
    content: "";
    background: #fff;
    height: 10px;
    border-bottom: 0;
    position: absolute;
    top: 8vh;
    left: 0;
    animation: line infinite 4s;
  }

  .customer::before {
    content: "customers";
    animation: fans infinite 4s;
    padding-left: 10px;
  }

  @keyframes line {
    0% {
      width: 0;
    }
    10% {
      width: 0;
    }
    20% {
      width: 100%;
    }
    30% {
      width: 100%;
      transform: scaleX(1);
      transform-origin: center right;
    }
    40% {
      width: 100%;
      transform: scaleX(0);
      transform-origin: center right;
    }
    50% {
      transform: scaleX(0);
      transform-origin: center right;
    }
    60% {
      transform: scaleX(0);
      transform-origin: center right;
    }
    70% {
      transform: scaleX(0);
      transform-origin: center right;
    }
    80% {
      transform: scaleX(0);
      transform-origin: center right;
    }
    90% {
      transform: scaleX(0);
    }
    100% {
      transform: scaleX(0);
      transform-origin: center right;
    }
  }

  @keyframes fans {
    0% {
      content: "customers";
    }
    10% {
      content: "customers";
    }
    20% {
      content: "customers";
    }
    30% {
      content: "fans";
    }
    40% {
      content: "fans";
    }
    50% {
      content: "fans";
    }
    60% {
      content: "fans";
    }
    70% {
      content: "fans";
    }
    80% {
      content: "fans";
    }
    90% {
      content: "fans";
    }
    100% {
      content: "fans";
    }
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
      width: 50vh;
      height: 50vh;
      background: #2A00FF;
      filter: blur(25vh);
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
      width: 30vh;
      height: 30vh;
      background: #2A00FF;
      filter: blur(15vh);
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
