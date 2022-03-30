<template>
  <nav class="bg-transparent dark:bg-[#232531] border-gray-200 px-2 sm:px-4 py-2.5 w-full fixed z-10">
    <div class="flex flex-wrap justify-between items-center mx-auto w-full p-3">
      <RouterLink to="/" class="flex">
        <Logo/>
      </RouterLink>
      <div class="flex flex-row">
        <label for="toggleB" class="flex md:hidden  items-center cursor-pointer">
          <!-- toggle -->
          <div class="relative">
            <!-- input -->
            <input type="checkbox" id="toggleA" class="sr-only" v-model="disableOrEnable">
            <!-- line -->
            <div
              class="block dark:bg-white bg-[#232531] border border-[#232531] dark:border-white  w-16 h-9 rounded-full"></div>
            <!-- dot -->
            <div
              class="dot absolute left-1 top-1 bg-white w-7 h-7 rounded-full transition flex justify-center items-center">
              <div v-if="!disableOrEnable">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                </svg>
              </div>
              <div v-else>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                  <path fill-rule="evenodd"
                        d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                        clip-rule="evenodd"/>
                </svg>
              </div>
            </div>
          </div>
        </label>
        <BurgerButton class="block md:hidden"/>
      </div>

      <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
          <li class="menu-item">
            <RouterLink to="/projects"
                        class="menu-item-link"
                        aria-current="page">Projects
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/services"
                        class="menu-item-link">
              Services
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/contact"
                        class="menu-item-link">
              Contact
            </RouterLink>
          </li>
          <li class="menu-item">
            <RouterLink to="/careers"
                        class="menu-item-link">
              Careers
            </RouterLink>
          </li>
          <li class="flex justify-center items-center">
            <label for="toggleB" class="flex items-center cursor-pointer">
              <!-- toggle -->
              <div class="relative">
                <!-- input -->
                <input type="checkbox" id="toggleB" class="sr-only" v-model="disableOrEnable">
                <!-- line -->
                <div class="block dark:bg-white bg-[#232531] border border-[#232531] dark:border-white  w-16 h-9 rounded-full"></div>
                <!-- dot -->
                <div
                  class="dot absolute left-1 top-1 bg-white w-7 h-7 rounded-full transition flex justify-center items-center">
                  <div v-if="!disableOrEnable">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                    </svg>
                  </div>
                  <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                      <path fill-rule="evenodd"
                            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                            clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
              </div>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
    import {mapState, mapActions} from 'vuex'
    import Logo from './Logo'
    import BurgerButton from "./BurgerButton";

    export default {
        name: "NavBar",
        components: {
            BurgerButton,
            Logo
        },
        computed: {
            ...mapState({
                darkMode: (state) => state.darkMode
            })
        },
        mounted() {
            this.disableOrEnable = this.darkMode
        },
        data: () => ({
            disableOrEnable: false
        }),
        methods: {
            ...mapActions(['setDarkMode'])
        },
        watch: {
            disableOrEnable(nValue) {
                console.log(nValue);
                this.setDarkMode(nValue);
                if (nValue) document.querySelector('body').classList.add('dark');
                else document.querySelector('body').classList.remove('dark');
            }
        }
    }
</script>

<style scoped>
  .menu-item {
    @apply border border-[#232531] dark:border-white dark:text-white dark:hover:text-gray-200 rounded-full px-5 py-2 bg-transparent hover:bg-[#232531] dark:bg-[#232531] dark:hover:bg-[#E5E5E5] text-[#232531] hover:text-[#E5E5E5] dark:text-[#E5E5E5] dark:hover:text-[#232531]
  }

  .menu-item-link {
    @apply block p-0
  }
</style>
