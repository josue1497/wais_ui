<template>
  <div class="px-5 py-2 border-t border-black m-6">
    <div class="w-full">
      <p class="text-[20vh] leading-[10vh]">{{name}}</p>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProjectBar",
        props: {
            name: {type: String, default: 'Unnamed'}
        }
    }
</script>

<style scoped>

</style>
