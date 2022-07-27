<template>
  <div class="px-2 md:px-5 py-0 md:py-5 flex flex-col md:flex-row">
    <div
      class="w-full md:w-1/2 flex flex-col justify-start items-center px-0 md:px-14 py-0 md:py-8 mb-auto"
    >
      <img
        :src="serviceData.icon"
        loading="lazy"
        alt="icon"
        class="mx-auto w-24 md:w-56"
        v-if="resetImages"
      />
      <p
        class="text-[26px] md:text-[30px] lg:text-[38px] xl:text-[54px] 2xl:text-[72px] text-center py-3 md:py-5 px-3 md:px-10 font-normal leading-[2rem] md:leading-[3rem] lg:leading-[4rem]"
      >
        {{ serviceData.title }}
      </p>
    </div>
    <div class="w-full md:w-1/2 flex flex-col p-0 md:p-10">
      <p class="service-description" v-html="serviceData.description"></p>
      <ul class="mt-4 md:mt-12 grid grid-cols-12 gap-2">
        <li
          v-for="(item, index) of serviceData.items"
          :key="index"
          class="font-light service-item col-span-6 md:col-span-12"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "ServiceContent",
  props: {
    serviceData: { type: Object, default: () => ({}) },
  },
  computed: {
    ...mapState({
      resetImages: (state) => state.resetImages,
    }),
  }
};
</script>
<style scoped>
.service-description {
  @apply text-[14px] md:text-[18px] lg:text-[28px] xl:text-[36px] 2xl:text-[48px] leading-[1rem] md:leading-[1.5rem] lg:leading-[2rem] xl:leading-[2.5rem] 2xl:leading-[3.5rem];
}

.service-item {
  @apply text-[11px] md:text-[14px] lg:text-[24px] xl:text-[32px] 2xl:text-[42px];
}
</style>
