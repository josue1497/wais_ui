<template>
  <div class="is-dark pb-14">
    <HeadSection class="w-full h-screen flex" id="careers-1" color="#2A00FF">
      <div class="flex flex-col justify-center items-center m-auto w-full">
        <div class="flex flex-col justify-end items-end title-content h-full w-full py-10">
          <h1 class="text-7xl md:text-[20vh]  mx-auto leading-title text-center">
            Careers
          </h1>
          <hr class="border border-t-black dark:border-t-white w-full mt-5">
          <div class="mx-auto w-3/4 flex flex-col justify-center items-center">
            <div class="flex justify-center flex-col items-start mr-auto xs:w-3/4 md:w-5/12 py-10 px-5">
              <p class="text-lg md:text-2xl mr-auto leading-title ">
                We believe that providing better results, creates a positive impact on companies and people.
              </p>
              <p class="text-lg md:text-2xl mr-auto leading-title bg-[#666BE4] text-white">#PositiveChange</p>
            </div>
            <div class="flex justify-center flex-col items-start xs:w-3/4 md:w-5/12 md:py-10 ml-auto px-4">
              <p class="xs:text-lg md:text-2xl mr-auto leading-title">
                We are a team of <span class="text-white dark:text-slate-400">observant and creative people</span>,
                passionate
                about the detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </HeadSection>
    <CoreSection class="w-full h-screen flex" id="careers-2" color="#01C97B" px="0" sm-px="0">
      <div class="flex flex-col justify-center items-center m-auto w-full h-24 pb-8">
        <div class="flex flex-col justify-end items-end title-content w-full relative">
          <div class="hero-image w-full mx-auto flat-2"></div>
          <div class="flex justify-center flex-col items-start mr-auto w-3/4 md:w-1/2 px-5 md:px-32 py-8 font-medium flat-2">
            <p class="text-2xl md:text-[32px] mr-auto leading-title">
              We like to <span class="text-white dark:text-slate-400">keep up with the trends</span> and market changes.
            </p>
          </div>
          <div class="point six flat-1"></div>
          <div class="flex justify-center flex-col items-start w-1/2 ml-auto relative">
            <p class="text-xl md:text-5xl mr-auto leading-title w-full flat-2">
              Would you like to <span class="join-ellipse relative">join us?</span>
            </p>
          </div>
        </div>
      </div>
    </CoreSection>
  </div>
</template>

<script>
    import CoreSection from "../components/core/CoreSection";
    import HeadSection from "../components/core/HeadSection";

    export default {
        name: "careers",
        components: {HeadSection, CoreSection}
    }
</script>

<style scoped>
  .hero-image {
    background-image: url(../assets/img/img1.jpg);
    height: 60vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
  }

  .join-ellipse::after {
    content: "";
    position: absolute;
    background: url(../assets/img/ellipses.svg);
    background-size: contain;
    background-repeat: no-repeat;
    @apply w-44 h-44;
    top: -2vh;
    right: 0;
  }

  .point.six {
    background: #01C97B;
    left: 20vh;
    top: 35vh;
    filter: blur(20vh);
    width: 60vh;
    height: 60vh;
  }

</style>
