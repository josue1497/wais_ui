<template>
  <div class="p-5 border-t border-black m-3 md:m-6 cursor-default">
    <div class="w-full">
      <ul class="group w-full divide-y-2 divide-gray-200 hover:cursor-pointer	">
        <li class="flex flex-col md:flex-row items-start md:items-center space-x-6 w-auto px-4 h-auto md:h-28 text-justify">
          <div class="wais-text text-justify whitespace-nowrap" @click="show">
            <NuxtLink :to="link">{{name}}</NuxtLink>
          </div>
          <div class="hidden md:grid opacity-0 group-hover:opacity-100 transition-all relative grid-cols-12 gap-4 w-1/2 mr-auto">
            <div :class=" `w-auto col-span-${index === 2 ? '12': '6'} badge-${index+1} flex justify-center items-center`" v-for="(tag, index) in tags" :key="index">
              <a href="#" class="wais-text-3 bg-[#232531] text-[#FBFBFB] mr-2 px-6 rounded-full">{{tag}}</a>
            </div>
          </div>
          <div v-if="visible" class="block md:hidden">
            <div :class=" `w-full my-3`" v-for="(tag, index) in tags" :key="index">
              <a href="#" class="text-xl  bg-[#232531] text-[#FBFBFB] px-2.5 rounded-xl">{{tag}}</a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>


</template>

<script>
    export default {
        name: "ProjectBar",
        props: {
            name: {type: String, default: 'Unnamed'},
            link: {type: String, default: '404'},
            tags: {type: Array, default: () => ([])},
            visible: false
        },
        data: () => ({
            showElement: false
        }),
        methods: {
            show() {
                this.showElement = !this.showElement;
                // this.$emit('selection', this.name)
            },
            validateIndex(arr = [], index) {
                console.log(arr.at(index));
                return arr.at(index)
            },
            rotateElement(index) {
                if (this.tags.length > 0) {
                    return ((index * 20) - 20)
                } else {
                    return (0)
                }
            },
            marginElement(index) {
                if (index === 1) {
                    return ('m-[35px]')
                } else {
                    return ('m-0')
                }
            }
        }
    }
</script>

<style scoped>
  .point.two {
    right: 0;
    top: 20vh;
    width: 30vh;
    height: 30vh;
    background: #2A00FF;
    filter: blur(20vh);
  }

  .badge-1 {
    transform: rotate(345deg);
  }
  .badge-2 {
    transform: rotate(15deg);
  }
  .badge-3 {
    transform: rotate(-3deg);
  }
  .badge-4 {
    transform: rotate(5deg);
  }
  .badge-5 {
    transform: rotate(345deg);
  }
</style>
