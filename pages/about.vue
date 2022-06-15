<template>
  <div>
    <HeadSection class="is-dark py-16 flex-col px-0" id="about-1" color="#2A00FF">
      <div
        class="marquee my-marquee mt-6 border-t py-5 border-b border-t-black border-b-black  dark:border-t-white dark:border-b-white w-full">
        <div class="marquee-inner" aria-hidden="true">
          <p class="marquee-content text-6xl md:text-[75px] lg:text-[97px] mx-5">About us</p>
        </div>
      </div>
      <div class="px-4 md:px-12 lg:px-24 py-14 flex flex-col w-full md:w-11/12 mx-auto">
        <p class="wais-text-2 w-full md:w-1/2 h-56 md:h-80">
          We’re a team of creative professionals, we’re dynamic, always in a quest for
          continuous growth.</p>
        <div class="point about-one flat-1"></div>
        <p class="wais-text-3 ml-auto w-4/6 mt-8 md:mt-6 flat-1">
          <span class="block">We <span class="text-white dark:text-gray-400 ">are passionate</span> about <span
            class="text-white dark:text-gray-400 ">creativity and details,</span></span>
          <span class="block my-4"> we trust that each human being has a unique talent, that is why our team is made up of professionals from different disciplines,</span>
          <span class="block">the uniqueness of each one adds value to our solutions.</span>
        </p>
      </div>
    </HeadSection>
    <CoreSection class="w-full h-screen flex" items="start" id="careers-2" color="#01C97B" px="0" sm-px="0">
      <div class="flex flex-col justify-center items-start w-full pb-8">
        <div class="hero-image w-full mx-auto"></div>
        <div class="flex flex-col justify-end items-end title-content w-full h-full">
          <div class="flex justify-center flex-col items-start w-full md:w-1/2 mr-auto ml-auto md:mr-0  p-5 md:p-10">
            <p class="text-2xl md:text-[32px] lg:text-[48px]  leading-[2rem] md:leading-[3rem] lg:leading-[4rem] ">
              <span class="block"><span class="about-customer">Together</span>, we create better experiences for brands, for people.</span>
              <span class="block my-4">We seek to generate a positive impact.
              #PositiveChange</span>
            </p>
          </div>
        </div>
      </div>
    </CoreSection>
  </div>

</template>

<script>
    import HeadSection from "../components/core/HeadSection";
    import CoreSection from "../components/core/CoreSection";
    import InfiniteMarquee from 'infinite-marquee'

    export default {
        name: "about",
        components: {CoreSection, HeadSection},
        mounted() {
            new InfiniteMarquee({
                el: document.querySelector('.my-marquee'),
                direction: 'right',
                duration: 80,
                css: false
            })
        }
    }
</script>

<style scoped>
  .hero-image {
    background-image: url(../assets/img/img8.jpg);
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
  }

  .about-customer {
    background: #666BE4;
    color: #fff;
    padding: 4px 10px;

  }

  .dark .customer {
    color: #666BE4;
    background: transparent;
  }

  .four {
    background: #F071DC;
    right: 75vh;
    top: 20vh;
    width: 75vh;
    height: 75vh;
    filter: blur(20vh);
  }

  .point.about-one {
    right: 50vh;
    top: 47vh;
    width: 55vh;
    height: 55vh;
    background: #2A00FF;
    filter: blur(20vh);
  }
</style>
