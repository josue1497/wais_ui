<template>
  <div class="px-5 border-t border-black m-3 md:m-6 cursor-default">
    <div class="w-full">
      <ul class="w-48 divide-y-2 divide-gray-200">
        <li class="flex flex-col md:flex-row justify-between items-start md:items-center space-x-6  px-4 h-auto md:h-28 text-justify">
          <div class="text-[2rem] md:text-[6rem] leading-[10vh] text-justify whitespace-nowrap" @click="show">
            {{name}}
          </div>
          <div v-if="visible" class="hidden md:block">
            <div :class=" ` w-[200px]  ${marginElement(index)}`" v-for="(tag, index) in tags" :key="index"
                 :style="{transform:`rotate(${rotateElement(index)}deg)`}">
              <a href="#" class="text-[1.5rem] bg-[#232531] text-[#FBFBFB] mr-2 px-2.5 rounded-xl">{{tag}}</a>
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
            tags: {type: Array, default: () => ([])},
            visible: false
        },
        data: () => ({
            showElement: false
        }),
        methods: {
            show() {
                this.showElement = !this.showElement;
                this.$emit('selection', this.name)
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
</style>
