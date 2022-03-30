<template>
  <div class="is-dark px-3 md:px-14 py-16">
    <section class="w-full flex" id="careers-1">
      <div class="flex flex-col justify-center items-start m-auto w-full">
        <div class="flex flex-col justify-end items-end title-content md:ml-10 h-full w-full md:w-3/4 ">
          <h1 class="text-title  mx-auto md:mr-auto text-center flat-2">
            Let's talk
          </h1>
          <div class="flex justify-center flex-col items-end ml-auto w-10/12 md:w-1/2 py-5 md:py-10 px-5 flat-2">
            <p class="text-subtitle ml-auto leading-title ">
              Complete this info and we'll get back to you in 48 hours or less.
            </p>
          </div>
          <div class="point four flat-1"></div>
          <form autocomplete="off" class="flex justify-center flex-col items-end w-full py-2 md:py-5 px-5 flat-3"
                method="post" action="">
            <div class="form-control">
              <input type="text" name="current-name" id="current-name" class="w-full" placeholder="Name" autofocus/>
            </div>
            <div class="form-control">
              <input type="text" name="current-email" id="current-email" class="w-full" placeholder="Email"
                     autofill="off"
              />
            </div>
            <div class="form-control area">
              <textarea type="text" name="message" id="message" class="w-full mt-2" cols="4" rows="4"
                        placeholder="Message"></textarea>
            </div>
          </form>
        </div>
        <hr class="border border-t-black dark:border-t-white w-11/12 mt-2 mx-auto">
        <div class="w-full p-5 md:px-14 py-2 md:py-5 ">
          <button class="send-button">Send</button>
        </div>
        <div class="flex w-full p-5 flex-col">
          <div class="flex flex-col w-3/4 md:w-1/3 ml-auto">
            <p class="mr-auto text-sm md:text-lg">If you want to communicate directly</p>
            <div class="flex flex-col mr-auto justify-evenly text-2xl py-2">
              <p class="ml-auto text-xl md:text-3xl">
                <a href="tel:+58414-3417791"><span class="block">+58 414-3417791</span></a>
                <a href="tel:+58412-9507154"><span class="block">+58 412-9507154</span></a>
              </p>
              <div class="flex mr-auto flex-row justify-evenly text-xl md:text-2xl my-4">
                <a href="tel:+58414-3417791"><i class="fa-solid fa-phone"></i></a>
                <a href="https://t.me/waisdigital" target="_blank"><i class="fa-solid fa-paper-plane mx-5"></i></a>
                <a href="https://wa.me/584143417791" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import CoreSection from "../components/core/CoreSection";
    import HeadSection from "../components/core/HeadSection";

    export default {
        name: "contact",
        components: {HeadSection, CoreSection}
    }
</script>

<style scoped>
  .hero-image {
    background-image: url(../assets/img/img1.jpg);
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    width: 100%;
  }


  .text-title, .text-subtitle {
    line-height: 1;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .text-title {
      font-size: 4.75rem;
    }

    .text-subtitle {
      font-size: 1.25rem;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .text-title {
      font-size: 4.75rem;
    }

    .text-subtitle {
      font-size: 1.25rem;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .text-title {
      font-size: 13rem; /* 128px */

    }

    .text-subtitle {
      font-size: 1.5rem;
    }
  }

  .form-control {
    @apply z-10 flex flex-row w-full p-2;
  }

  .form-control.area {
    @apply z-10 flex flex-col w-full p-2;
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
