<template>
  <div class="is-dark flex flex-col">
    <div class="w-full h-48 flex mt-36">
      <h1
        class="text-[72px] md:text-[104px] lg:text-[144px] text-center m-auto"
      >
        {{$t('services')}}
      </h1>
    </div>
    <div class="flex flex-col mx-auto w-full wrapper flat-2">
      <ServiceContent
        v-for="(service, index) of _services"
        :key="index"
        :service-data="service"
        :class="`my-7 card ${ index === 0 ? 'isVisible' : ''}`"/>
    </div>
    <div class="flex flex-col mx-auto w-full wrapper flat-2">
      <NuxtLink class="get-started-button flex flex-row align-center justify-center animate__animated animate__pulse animate__delay-2s animate__infinite" to="/contact">
          <span>{{ $t("start_project") }}</span>
      </NuxtLink>
    </div>
    <div class="w-3/4 p-5">
      <h1
        class="text-[90px] md:text-[180px] lg:text-[220px] xl:text-[270px] font-normal leading-[5rem] md:leading-[10rem] lg:leading-[20rem] flex flex-col w-3/4 md:w-full GFG uppercase"
      >
        <span class="block">Quality</span><span class="block">Work</span>
      </h1>
    </div>
    <div class="point three point-blur flat-1"></div>
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
  head() {
    return {
      title: this.$t('services'),
    }
  },
  data: () => ({
    _dark: false
  }),
  computed: {
    ...mapState({
      darkMode: (state) => state.darkMode,
    }),
    getTheme(){
      return this.darkMode.toString() === "true" ? "blanco" : "negro";
    },
    _services() {
      return [
        {
          icon:  this.getImage(1),
          ...this.$t('_services.analysis'),
        },
        {
          icon:  this.getImage(4),
          ...this.$t('_services.content'),
        },
        {
          icon:  this.getImage(3),
          ...this.$t('_services.web'),
        },
        {
          icon:  this.getImage(5),
          ...this.$t('_services.marketing')
        },
        {
          icon:  this.getImage(2),
          ...this.$t('_services.social')
        },
        {
          icon: this.getImage(6),
          ...this.$t('_services.branding')
        },
      ];
    },
  },
  methods: {
    getImage(image) {
      return `/img/services/gif${image}---${this.getTheme}.gif`;
    },
  },
  watch: {
    darkMode(nvalue){
      this._dark = nvalue;
    }
  },
};
</script>

<style scoped>
.three {
  background: #ff3200;
  right: 20vh;
  bottom: 10vh;
  /* width: 35vh;
  height: 35vh; */
  @apply w-[20vh] h-[20vh] md:w-[22vh] md:h-[22vh] lg:w-[28vh] lg:h-[28vh] xl:w-[32vh] xl:h-[32vh];
}

.point-blur {
  @apply blur-[8vh] md:blur-[10vh] lg:blur-[12vh] xl:blur-[14vh];
}

.GFG {
  color: transparent;
  /*font-size: 50px;*/
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: black;
}

.dark .GFG {
  -webkit-text-stroke-color: white;
}
</style>
