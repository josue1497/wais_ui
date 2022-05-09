<template>
  <div class="px-2 md:px-5 py-0 md:py-5 flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 flex flex-col justify-center items-center p-0 md:p-14">
      <img :src="serviceData.icon" loading="lazy" alt="icon" class="mx-auto w-24 md:w-56"/>
      <p class="text-[32px] md:text-[60px] text-center py-3 md:py-5 px-3 md:px-10 font-normal leading-[40px] md:leading-[60px]">
        {{serviceData.title}}</p>
    </div>
    <div class="w-full md:w-1/2 flex flex-col p-0 md:p-10">
      <p class="text-[20px] md:text-[28px] leading-7 md:leading-9" v-html="serviceData.description"></p>
      <ul class="mt-4 md:mt-12 grid grid-cols-12 gap-2">
        <li v-for="(item, index) of serviceData.items" :key="index"
            class="font-light text-[18px] md:text-[22px] col-span-6 md:col-span-12">{{item}}
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
