<template>
  <div>
    <HeadSection class="is-dark py-16 flex-col px-0" id="about-1" color="#2A00FF">
      <div
        class="marquee my-marquee mt-6 border-t py-5 border-b border-t-black border-b-black  dark:border-t-white dark:border-b-white w-full">
        <div class="marquee-inner" aria-hidden="true">
          <p class="marquee-content text-6xl mx-5">About us</p>
        </div>
      </div>
      <div class="px-3 md:px-12 py-14 flex flex-col w-3/4 mx-auto">
        <p class="text-2xl w-full md:w-1/2">We’re a team of creative professionals, we’re dynamic, always in a quest for
          continuous growth.</p>
        <p class="text-lg md:text-2xl ml-auto w-3/4 md:w-1/2 mt-8 md:mt-6">
          <span class="block">We <span class="text-white dark:text-gray-400 ">are passionate</span> about <span
            class="text-white dark:text-gray-400 ">creativity and details,</span></span>
          <span class="block my-4"> we trust that each human being has a unique talent, that is why our team is made up of professionals from different disciplines,</span>
          <span class="block">the uniqueness of each one adds value to our solutions.</span>
        </p>
      </div>
    </HeadSection>
    <CoreSection class="w-full h-screen flex" id="careers-2" color="#01C97B" px="0" sm-px="0">
      <div class="flex flex-col justify-center items-center m-auto w-full pb-8">
        <div class="hero-image w-full mx-auto"></div>
        <div class="flex flex-col justify-end items-end title-content w-full md:w-3/4 h-full">
          <div class="flex justify-center flex-col items-start w-full md:w-1/2 mr-auto ml-auto md:mr-0  p-5 md:p-10">
            <p class="text-xl md:text-2xl leading-title">
              <span class="block"><span class="customer">Together</span>, we create better experiences for brands, for people.</span>
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

  .customer {
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
</style>
