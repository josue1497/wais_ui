<template>
  <div class="is-dark flex flex-col">
    <div class="w-full h-48 flex mt-28">
      <h1
        class="text-[72px] md:text-[104px] lg:text-[144px] text-center m-auto"
      >
        Services
      </h1>
    </div>
    <div class="flex flex-col mx-auto w-full wrapper flat-2">
      <ServiceContent
        v-for="(service, index) of _services"
        :key="index"
        :service-data="service"
        :class="'my-7 card ' + (index === 0 ? 'isVisible':'')"
      ></ServiceContent>  
    </div>
    <div class="w-3/4 p-5">
      <h1
        class="text-[90px] md:text-[180px] lg:text-[300px] font-normal leading-[5rem] md:leading-[10rem] lg:leading-[20rem] flex flex-col w-3/4 md:w-full GFG uppercase"
      >
        <span class="block">Quality</span><span class="block">Work</span>
      </h1>
    </div>
    <div class="point three flat-1"></div>
  </div>
</template>

<script>
import ServiceContent from "../components/core/ServiceContent";
import { mapState } from "vuex";
import aosMixin from "../mixins/aos.mixin";

export default {
  name: "services",
  mixins: [aosMixin],
  components: { ServiceContent },
  mounted() {
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach((entry) => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.add("isVisible");
    //       return;
    //     }
    //     entry.target.classList.remove("isVisible");
    //   });
    // });

    // // Tell the observer which elements to track
    // const cards = document.querySelectorAll(".card");
    // cards.forEach((el) => {
    //   observer.observe(el);
    // });
  },
  head() {
    return {
      title: this.$t('services'),
    }
  },
  computed: {
    ...mapState({
      darkMode: (state) => state.darkMode,
    }),
    _services() {
      return [
        {
          icon: require(`../assets/img/services/gif1---${
            this.getTheme()
          }.gif`),
          ...this.$t('_services.analysis'),
        },
        {
          icon: require(`../assets/img/services/gif4---${
             this.getTheme()
          }.gif`),
          ...this.$t('_services.content'),
        },
        {
          icon: require(`../assets/img/services/gif3---${
             this.getTheme()
          }.gif`),
          ...this.$t('_services.web'),
        },
        {
          icon: require(`../assets/img/services/gif5---${
             this.getTheme()
          }.gif`),
          ...this.$t('_services.marketing')
        },
        {
          icon: require(`../assets/img/services/gif2---${
             this.getTheme()
          }.gif`),
          ...this.$t('_services.social')
        },
        {
          icon: require(`../assets/img/services/gif6---${
             this.getTheme()
          }.gif`),
          ...this.$t('_services.branding')
        },
      ];
    },
  },
  methods: {
    getTheme(){
      return this.darkMode ? "blanco" : "negro";
    }
  }
};
</script>

<style scoped>
.three {
  background: #ff3200;
  right: 20vh;
  bottom: 10vh;
  width: 35vh;
  height: 35vh;
  filter: blur(15vh);
}

.GFG {
  color: transparent;
  /*font-size: 50px;*/
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}

.dark .GFG {
  -webkit-text-stroke-color: white;
}
</style>
