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
        class="my-7 card"
      />
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("isVisible");
          return;
        }
        entry.target.classList.remove("isVisible");
      });
    });

    // Tell the observer which elements to track
    const cards = document.querySelectorAll(".card");
    cards.forEach((el) => {
      observer.observe(el);
    });
  },
  computed: {
    ...mapState({
      darkMode: (state) => state.darkMode,
    }),
    _services() {
      return [
        {
          icon: require(`../assets/img/services/gif1---${
            this.darkMode ? "blanco" : "negro"
          }.gif`),
          title: "Analysis and strategy",
          description:
            "We study and investigate the brands behavior, to create data based strategies, that efficiently manage to communicate their message and connect with their audience.",
          items: [
            "Marketing research",
            "Competition research",
            "Brand Strategy",
            "Communication Strategy",
            "Marketing Strategy",
            "Content Strategy",
          ],
        },
        {
          icon: require(`../assets/img/services/gif4---${
            this.darkMode ? "blanco" : "negro"
          }.gif`),
          title: "Content creation",
          description:
            "We develop creativity loaded content, in different formats,in order to connect through emotion, with the brand's target audience, with a clear and targeted message.",
          items: [
            "Photography",
            "Videos",
            "Copywriting",
            "Graphic design",
            "Illustration",
          ],
        },
        {
          icon: require(`../assets/img/services/gif3---${
            this.darkMode ? "blanco" : "negro"
          }.gif`),
          title: "Web development",
          description:
            "We create web sites based on outstanding technologies and trends, helping brands to achieve a solid strategy.",
          items: ["Websites", "Apps", "Landing page"],
        },
        {
          icon: require(`../assets/img/services/gif5---${
            this.darkMode ? "blanco" : "negro"
          }.gif`),
          title: "Search engine marketing",
          description:
            "We optimize web pages for search engines, thus we can increase the traffic of potential clients towards brands.",
          items: ["SEO", "SEM"],
        },
        {
          icon: require(`../assets/img/services/gif2---${
            this.darkMode ? "blanco" : "negro"
          }.gif`),
          title: "Social marketing",
          description: `We build brand's presence in digital media.<br>
                            We care about the customer’s needs,
                            that's why we create a close
                            relationship between the brand and
                            its audience.`,
          items: [
            "Digital media strategy",
            `Brand’s voice development`,
            "Digital Advertising (Ads)",
            "Influencer Marketing",
            "Reports and metrics (statistics)",
          ],
        },
        {
          icon: require(`../assets/img/services/gif6---${
            this.darkMode ? "blanco" : "negro"
          }.gif`),
          title: "Branding and graphic design",
          description: `An idea is born, and we make it come true. Branding is a brand\'s core, what makes them different and recognizable. We define all the elements, from the name to the advertisements, pointing your target audience.`,
          items: [
            "Naming",
            "Logo",
            "Brand’s identity manual",
            "Printing design",
            "Digital Media graphic design",
          ],
        },
      ];
    },
  },
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
