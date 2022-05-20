<template>
  <div class="px-2 md:px-5 py-0 md:py-5 flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex flex-col justify-center items-center px-0 md:px-14 py-0 md:py-8 mb-auto">
      <img :src="serviceData.icon" loading="lazy" alt="icon" class="mx-auto w-24 md:w-56"/>
      <p class="text-[32px] md:text-[53px] lg:text-[72px] text-center py-3 md:py-5 px-3 md:px-10 font-normal leading-[40px] md:leading-[50px] lg:leading-[80px]">
        {{serviceData.title}}</p>
    </div>
    <div class="w-full md:w-1/2 flex flex-col p-0 md:p-10">
      <p class="text-[18px] md:text-[24px] md:text-[36px] leading-7 md:leading-9" v-html="serviceData.description"></p>
      <ul class="mt-4 md:mt-12 grid grid-cols-12 gap-2">
        <li v-for="(item, index) of serviceData.items" :key="index"
            class="font-light text-[18px] md:text-[20px] lg:text-[24px] col-span-6 md:col-span-12">{{item}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ServiceContent",
        props: {
            serviceData: {type: Object, default: () => ({})}
        },
        mounted() {
            if ("loading" in HTMLImageElement.prototype) {
                console.log("El navegador soporta `lazy-loading`...");
            } else {
                console.log("`lazy-loading` no soportado...");
            }
        }
    }
</script>

<style scoped>

</style>
