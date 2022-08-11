<template>
  <section
    :class="`flex ${justifyContent} ${itemsContent} is-dark w-full px-${smPx} md:px-${px} relative`"
  >
    <slot></slot>
  </section>
</template>

<script>
    const SPOTLIGHT_SIZE = '100px, rgba(0, 0, 0, 0) 150px)';
    export default {
        name: "CoreSection",
        props: {
            justify: {type: String, default: 'center'},
            items: {type: String, default: 'center'},
            color: {type: String, default: '#ADF1D6'},
            px: {type: [String, Number], default: 16},
            smPx: {type: [String, Number], default: 8},
            smSize: {type: [String, Number], default: 56},
        },
        data: () => ({
            showPointer: true
        }),
        computed: {
            justifyContent() {
                return `justify-${this.justify}`
            },
            itemsContent() {
                return `items-${this.items}`
            }
        },
        methods: {
            enter(e) {
                this.showPointer = true;
            },
            leave(e) {
                this.showPointer = false;
            },
        }
    }
</script>

<style scoped>
  .follower {
    position: absolute;
    height: 100%;
    width: 100%;
    filter: blur(100px);
  }
</style>
