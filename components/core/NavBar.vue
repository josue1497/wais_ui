<template>
  <nav
    :class="`fixed ${visible ? 'bg-white dark:bg-[#232531]' :'bg-transparent'} border-gray-200 px-2 sm:px-4 py-2.5 w-full nav flat-4`"
    id="navbar"
  >
    <div class="flex flex-wrap justify-between items-center mx-auto w-full p-3">
      <a href="/" class="flex">
        <Logo />
      </a>
      <div class="flex flex-row">
        <label for="toggleB" class="flex md:hidden items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input
              type="checkbox"
              id="toggleA"
              class="sr-only"
              v-model="disableOrEnable"
            />
            <!-- line -->
            <div
              class="block dark:bg-white bg-[#232531] border border-[#232531] dark:border-white w-16 h-9 rounded-full"
            ></div>
            <!-- dot -->
            <div
              class="dot absolute left-1 top-1 bg-white w-7 h-7 rounded-full transition flex justify-center items-center"
            >
              <div v-if="!disableOrEnable">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <div v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="#fff"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </label>
        <BurgerButton class="block md:hidden" ref="burger" @onMenu="visible = !visible" />
      </div>

      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul
          class="flex flex-col mt-4 md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium"
        >
          <!-- <li class="menu-item">
            <NuxtLink to="projects" class="menu-item-link" aria-current="page"
              > {{ $t("projects") }}
            </NuxtLink>
          </li> -->
          <li class="menu-item">
            <NuxtLink to="/services" class="menu-item-link">
              {{ $t("services") }}
            </NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/about" class="menu-item-link" aria-current="page"
              >{{ $t("about") }}
            </NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/contact" class="menu-item-link"> {{ $t("contact") }} </NuxtLink>
          </li>
          <li class="menu-item">
            <NuxtLink to="/careers" class="menu-item-link"> {{ $t("careers") }} </NuxtLink>
          </li>
          <li class="lang-item">
            <LangSwitcher></LangSwitcher>
          </li>
          <li class="flex justify-center items-center">
            <label for="toggleB" class="flex items-center cursor-pointer">
              <!-- toggle -->
              <div class="relative">
                <!-- input -->
                <input
                  type="checkbox"
                  id="toggleB"
                  class="sr-only"
                  v-model="disableOrEnable"
                />
                <!-- line -->
                <div
                  class="block dark:bg-white bg-[#232531] border border-[#232531] dark:border-white w-16 h-9 rounded-full"
                ></div>
                <!-- dot -->
                <div
                  class="dot absolute left-1 top-1 bg-white w-7 h-7 rounded-full transition flex justify-center items-center"
                >
                  <div v-if="!disableOrEnable">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                      />
                    </svg>
                  </div>
                  <div v-else>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="#fff"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
    <transition name="slide-fade">
      <div class="w-full h-screen is-dark px-14 bg-[#e5e5e5] dark:bg-[#232531]" v-if="visible">
        <div
          class="col-span-12 md:col-span-2 flex md:hidden items-center md:items-start flex-col"
        >
          <!-- <NuxtLink to="/projects"
            ><p class="mobile-links">{{ $t("projects") }}</p></NuxtLink
          > -->
          <NuxtLink to="/about"><p class="mobile-links">{{ $t("about") }}</p></NuxtLink>
          <NuxtLink to="/services"
            ><p class="mobile-links">{{ $t("services") }}</p></NuxtLink
          >
          <NuxtLink to="/careers"><p class="mobile-links">{{ $t("careers") }}</p></NuxtLink>
          <NuxtLink to="/contact"><p class="mobile-links">{{ $t("contact") }}</p></NuxtLink>
          <LangSwitcher class="mobile-links"></LangSwitcher>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
import BurgerButton from "./BurgerButton";
import Logo from "./Logo";
import LangSwitcher from "./LangSwitcher";

export default {
  name: "NavBar",
  components: {
    BurgerButton,
    Logo,
    LangSwitcher,
  },
  computed: {
    ...mapState({
      darkMode: (state) => state.darkMode,
    }),
  },
  mounted() {
    this.disableOrEnable = this.darkMode;
    const vm = this;
    vm.prevScrollPosition = window.pageYOffset;
    window.addEventListener('scroll', () => {
        vm.isCardVisible();
    });
    window.addEventListener("resize", () => this.isCardVisible());

  },
  data: () => ({
    disableOrEnable: false,
    prevScrollPosition: 100,
    visible: false,
  }),
  methods: {
    ...mapActions(["setDarkMode", "setResetImages"]),
    isCardVisible() {
        const cards = document.querySelectorAll(".card");
        for (const card of cards) {
            this.isElementInViewport(card)
                ? card.classList.add("isVisible")
                : card.classList.remove("isVisible");
        }
    },
    isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        const { top, bottom } = this.getParamByDevice()
        return (
            rect.top >= top &&
            rect.bottom - bottom <=
            (window.innerHeight || document.documentElement.clientHeight) 
        );
    },
    getParamByDevice() {
      return this.mobileAndTabletCheck() ? { top: 40, bottom: 20 } : { top: 75, bottom: 200 };
    },
    mobileAndTabletCheck() {
      const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
          console.log(navigator.userAgent)

        
        return toMatch.some((toMatchItem) => navigator.userAgent.match(toMatchItem));
    }
  },
  watch: {
    disableOrEnable(nValue) {
      this.setDarkMode(nValue);
      this.setResetImages(nValue);
      if (nValue) document.querySelector("body").classList.add("dark");
      else document.querySelector("body").classList.remove("dark");
    },
    $route() {
        this.visible = false
        this.$refs['burger'].restore()
    }
  }
};
</script>
<style scoped>
.menu-item {
  @apply border border-[#232531] dark:border-white dark:text-white dark:hover:text-gray-200 rounded-full px-5 py-2 bg-transparent hover:bg-[#232531] dark:bg-transparent dark:hover:bg-[#E5E5E5] text-[#232531] hover:text-[#E5E5E5] dark:text-[#E5E5E5] dark:hover:text-[#232531];
}

.lang-item {
  @apply px-5 py-2;
}
.menu-item-link {
  @apply block p-0;
}

.nav {
  transition: all ease-in-out 0.3s;
}

.mobile-links {
  font-size: 42px;
  line-height: 45px;
  text-transform: uppercase;
  margin-top: 10vh;
}
.nav {
  position: fixed !important;
}

.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-10px);
  /*opacity: 0;*/
}
</style>
