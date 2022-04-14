<template>
  <div class="px-5 -py-1 border-t border-black m-6 cursor-default">
    <div class="w-full" >
        <ul class="w-48 divide-y-2 divide-gray-200">
          <li class="flex justify-between items-center space-x-6  px-4 h-28">
                <div class="text-[6rem] leading-[10vh] whitespace-nowrap"  v-on:click="showElement = !showElement">
                  {{name}}  
                </div>
                <div  v-if="showElement" >
                     <div :class=" ` w-[200px]  ${marginElement(index)}`" v-for="(tag, index) in tags" :key="index" :style="{transform:`rotate(${rotateElement(index)}deg)`}">
                        <a href="#" class="text-[1.5rem] bg-[#232531] text-[#FBFBFB] mr-2 px-2.5 rounded-xl" >{{tag}}</a>
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
            tags: {type: Array, default: () =>([])},
            showElement : false
        },
        methods: {
          rotateElement (index) {
            if(this.tags.length > 0){
              return ((index * 20)-20)
            }else {
              return (0)
            }
          },
          marginElement (index) {
             if(index === 1){
               return ('m-[35px]')
          }else{
            return('m-0')
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
