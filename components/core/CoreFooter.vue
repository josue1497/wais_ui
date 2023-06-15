<template>
  <footer class="p-12 block z-index-1 text-black dark:text-white">
    <div class="block">
      <div class="grid gap-y-8 grid-cols-12 py-8 px-2 text-2xl">
        <div class="col-span-12 md:col-span-2">
          <a href="/" class="flex w-full">
            <Logo class="mx-auto md:mr-auto" />
          </a>
        </div>
        <div class="col-span-12 md:col-span-3 flex items-center md:items-start flex-col">
          <p class="font-normal text-[24px] md:text-[20px] lg:text-[24px]">
            {{ $t("start_project") }}
          </p>
          <a href="mailto:hello@waisdigital.com"
            ><p class="font-bold text-wisely">hello@waisdigital.com</p></a
          >
        </div>
        <div
          class="col-span-12 md:col-span-2 hidden md:flex items-center md:items-start flex-col"
        >
          <a href="/about"
            ><p class="footer-links">{{ $t("about") }}</p></a
          >
          <a href="/services"
            ><p class="footer-links">{{ $t("services") }}</p></a
          >
        </div>
        <div
          class="col-span-12 md:col-span-2 hidden md:flex items-center md:items-start flex-col"
        >
          <a href="/projects"
            ><p class="footer-links">{{ $t("projects") }}</p></a
          >
          <a href="/careers"
            ><p class="footer-links">{{ $t("careers") }}</p></a
          >
        </div>
        <div
          class="col-span-12 md:col-span-2 hidden md:flex items-center md:items-start flex-col"
        >
          <a href="/contact"
            ><p class="footer-links">{{ $t("contact") }}</p></a
          >
        </div>
        <div
          class="col-span-12 md:col-span-2 flex md:hidden items-center md:items-start flex-col"
        >
          <a href="/about"
            ><p class="footer-links mb-4">{{ $t("about") }}</p></a
          >
          <a href="/services"
            ><p class="footer-links mb-4">{{ $t("services") }}</p></a
          >
          <a href="/projects"
            ><p class="footer-links mb-4">{{ $t("projects") }}</p></a
          >
          <a href="/careers"
            ><p class="footer-links mb-4">{{ $t("careers") }}</p></a
          >
          <a href="/contact"
            ><p class="footer-links mb-4">{{ $t("contact") }}</p></a
          >
        </div>
      </div>
    </div>

    <hr class="border border-t-black dark:border-t-white w-full mt-2 mx-auto" />
    <div class="grid gap-4 grid-cols-12 py-5">
      <div class="col-span-12 md:col-span-3">
        <div
          class="flex justify-around md:justify-start items-center md:items-center text-[28px] md:text-[22px] lg:text-[24px] xl:text-[24px]"
        >
          <div class="mr-0 md:mr-7">
            <a href="https://www.instagram.com/waisdigital/" target="_blank"
              ><i class="fa-brands fa-instagram"></i
            ></a>
            <!-- <font-awesome-icon :icon="['fas', 'adjust']"  />
            <font-awesome-icon icon="dollar-sign"  style="font-size: 30px"/>
            <font-awesome-icon icon="cog"/> -->
          </div>
          <div class="mr-0 md:mr-7">
            <a
              href="https://www.linkedin.com/company/wais-digital/?viewAsMember=true"
              target="_blank"
              ><i class="fa-brands fa-linkedin"></i></a>
          </div>
          <div class="mr-0 md:mr-7">
            <a href="https://www.facebook.com/waisdigital" target="_blank"
              ><i class="fa-brands fa-facebook"></i></a>
          </div>
          <div class="mr-0 md:mr-7">
            <a href="https://www.behance.net/waisdigita46b7/projects" target="_blank">
              <i class="fa-brands fa-behance"></i></a>
          </div>
        </div>
      </div>
      <div class="col-span-12 md:col-span-9 hidden md:flex">
        <a class="ml-auto text-xl hover:cursor-pointer hover:underline hover:decoration-1" @click="openModal('terms')">
          {{ $t("terms") }}
        </a>
        <a class="ml-auto text-xl hover:cursor-pointer hover:underline hover:decoration-1" @click="openModal('privacy')">
          {{ $t("privacy") }}
        </a>
        <p class="ml-auto text-xl">
          {{ $t("copyright") }}
        </p>
      </div>
    </div>
    <transition name="modal">
      <div v-if="open" class="fixed z-50 inset-0 overflow-y-auto">
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <div class="fixed inset-0 transition-opacity">
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <div
            class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full md:w-3/4 sm:p-6"
          >
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <Privacy v-if="type === 'privacy'"></Privacy>
                <Terms v-if="type === 'terms'"></Terms>
              </div>
            </div>
            <div class="mt-5 sm:mt-6 flex">
              <span class="mx-auto w-1/2 rounded-md shadow-sm">
                <button
                  @click="close"
                  class="w-full rounded-md border border-transparent px-4 py-2  bg-[#232531] dark:bg-white text-base leading-6 font-medium dark:text-[#232531] text-white shadow-sm hover:bg-[#3c3e4d]  focus:outline-none transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                >
                  {{$t('close')}}
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </footer>
</template>

<script>
import Logo from "./Logo";
import Privacy from "./Privacy.vue";
import Terms from "./Terms.vue";

export default {
  name: "CoreFooter",
  components: {
    Logo,
    Privacy,
    Terms
},
  data() {
    return {
      open: false,
      type: 'terms',
    };
  },
  methods: {
    openModal(type = 'terms') {
      this.type = type;
      this.open = true;
    },
    close() {
      this.open = false;
    },
  },
};
</script>

<style scoped>
.footer-links {
  @apply text-[22px] md:text-[18px] lg:text-[22px] uppercase font-light md:font-normal;
  /*font-size: 18px;*/
  /*line-height: 35px;*/
  /*text-transform: uppercase;*/
}

.gradient-text {
  @apply text-[22px] md:text-[20px] lg:text-[24px] font-normal;
  background: -webkit-linear-gradient(45deg, #b6462b, #66d0a3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
