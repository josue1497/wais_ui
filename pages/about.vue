<template>
  <div>
    <HeadSection class="is-dark py-16 flex-col px-0" id="about-1" color="#2A00FF">
      <div
        class="marquee my-marquee mt-6 border-t py-5 border-b border-t-black border-b-black  dark:border-t-white dark:border-b-white w-full">
        <!-- <div class="marquee-inner" aria-hidden="true">
          <p class="marquee-content text-6xl md:text-[75px] lg:text-[97px] mx-5">{{$t('about')}}</p>
        </div> -->
        <client-only>
          <marquee-text :repeat="30">
            <p class="marquee-content text-6xl md:text-[75px] lg:text-[97px] mx-5">{{$t('about')}}</p>
          </marquee-text>
        </client-only>
      </div>
      <div class="px-4 md:px-12 lg:px-24 py-14 flex flex-col w-full md:w-11/12 mx-auto">
        <p class="about-text w-full md:w-1/2 h-56 md:h-80">{{ $t('_about.text_1') }}</p>
        <div class="point about-one flat-1"></div>
        <p class="about-text-1 ml-auto w-4/6 mt-8 md:mt-6 flat-1">
          <span class="block">{{ $t('_about.text_2_1_1') }} 
          <span class="text-white dark:text-gray-400 ">{{ $t('_about.text_2_1_2') }}</span> 
          {{ $t('_about.text_2_1_3') }} 
          <span
            class="text-white dark:text-gray-400 ">{{ $t('_about.text_2_1_4') }}</span></span>
          <span class="block my-4">{{ $t('_about.text_2_2_1') }}</span>
          <span class="block">{{ $t('_about.text_2_3_1') }}</span>
        </p>
      </div>
    </HeadSection>
    <CoreSection class="w-full h-[40rem] md:h-screen flex" items="start" id="careers-2" color="#01C97B" px="0" sm-px="0">
      <div class="flex flex-col justify-center items-start w-full pb-8">
        <div class="hero-image w-full mx-auto"></div>
        <div class="flex flex-col justify-end items-end title-content w-full h-full">
          <div class="flex justify-center flex-col items-start w-full md:w-1/2 mr-auto ml-auto md:mr-0  p-5 md:p-10">
            <p class="about-text">
              <span class="block"><span class="about-customer">{{ $t('_about.text_3_1') }}</span>
              {{ $t('_about.text_3_2') }}</span>
              <span class="block my-4">{{ $t('_about.text_3_3') }}</span>
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
    // import InfiniteMarquee from 'infinite-marquee'
    // import MarqueeText from 'vue-marquee-text-component'

    export default {
        name: "about",
        components: {CoreSection, HeadSection, MarqueeText: () => import('vue-marquee-text-component')},
        mounted() {
            // const a = new InfiniteMarquee({
            //     el: document.querySelector('.my-marquee'),
            //     direction: 'right',
            //     duration: 80,
            //     css: false
            // })
            // console.log(a)
        },
        head() {
          return {
            title: this.$t('about'),
          }
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

  .about-text {
    @apply text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[48px] leading-[2rem] md:leading-[2rem] lg:leading-[2.5rem] xl:leading-[3rem] 2xl:leading-[3.5rem];
  }

  .about-text-1 {
    @apply text-[18px] md:text-[20px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px]  leading-[1.5rem] md:leading-[2rem] lg:leading-[2rem] xl:leading-[3rem] 2xl:leading-[3rem];
  }
</style>
