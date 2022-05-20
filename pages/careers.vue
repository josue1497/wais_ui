<template>
  <div class="is-dark pb-14 overflow-x-hidden">
    <HeadSection class="w-full h-[30rem] md:h-screen flex" id="careers-1" color="#2A00FF">
      <div class="flex flex-col justify-center items-center m-auto w-full">
        <div class="flex flex-col justify-end items-end title-content h-full w-full py-10">
          <h1 class="text-[72px] md:text-[180px] lg:text-[288px] font-normal mx-auto leading-[5rem] md:leading-[12rem] lg:leading-[18rem] text-center">
            Careers
          </h1>
          <hr class="border border-t-black dark:border-t-white w-full mt-1 md:mt-2 lg:mt-5">
          <div class="mx-auto w-3/4 flex flex-col justify-center items-center">
            <div class="flex justify-center flex-col items-start mr-auto w-full md:w-3/4 lg:w-5/12 py-10 px-5">
              <p class="text-[24px] md:text-[30px] lg:text-[42px] leading-[2rem] md:leading-[2rem] lg:leading-[3rem] mr-auto ">
                We believe that providing better results, creates a positive impact on companies and people.
              </p>
              <p class="text-[24px] md:text-[30px] lg:text-[42px] leading-[2rem] md:leading-[2rem] lg:leading-[3rem] mr-auto bg-[#666BE4] text-white">#PositiveChange</p>
            </div>
            <div class="point seven flat-1"></div>
            <div class="flex justify-center flex-col items-start xs:w-3/4 md:w-5/12 md:py-10 ml-auto px-4 flat-1">
              <p class="text-[24px] md:text-[30px] lg:text-[42px] leading-[2rem] md:leading-[2rem] lg:leading-[3rem]  mr-auto leading-title">
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
            <p class="text-[24px] md:text-[30px] lg:text-[42px] leading-[2rem] md:leading-[2rem] lg:leading-[3rem]  mr-auto ">
              We like to <span class="text-white dark:text-slate-400">keep up with the trends</span> and market changes.
            </p>
          </div>
          <div class="point six flat-1"></div>
          <div class="flex justify-center flex-col items-start w-1/2 ml-auto relative">
            <p class="text-[24px] md:text-[30px] lg:text-[42px] leading-[2rem] md:leading-[2rem] lg:leading-[3rem] mr-auto w-full flat-2">
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
    filter: blur(20vh);
  }

  .point.seven {
    right: 35vh;
    top: 50vh;
    width: 55vh;
    height: 55vh;
    background: #2A00FF;
    filter: blur(15vh);
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .point.six {
      left: 20vh;
      top: 70vh;
      width: 30vh;
      height: 30vh;
      filter: blur(20vh);
    }

    .point.seven {
      right: 15vh;
      top: 60vh;
      width: 20vh;
      height: 20vh;
    }

  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .point.six {
      left: 20vh;
      top: 70vh;
      width: 30vh;
      height: 30vh;
    }

    .point.seven {
      right: 15vh;
      top: 60vh;
      width: 20vh;
      height: 20vh;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .point.six {
      left: 20vh;
      top: 35vh;
      width: 40vh;
      height: 40vh;
    }
    .point.seven {
      right: 15vh;
      top: 60vh;
      width: 20vh;
      height: 20vh;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .point.six {
      left: 20vh;
      top: 35vh;
      width: 50vh;
      height: 50vh;
    }
    .point.seven {
      right: 15vh;
      top: 60vh;
      width: 30vh;
      height: 30vh;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .point.six {
      left: 20vh;
      top: 35vh;
      width: 60vh;
      height: 60vh;
    }
    .point.seven {
      right: 30vh;
      top: 60vh;
      width: 40vh;
      height: 40vh;
    }
  }
</style>
