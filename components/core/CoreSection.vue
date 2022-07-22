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
            id: {type: String, required: true},
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
            updateSpotlight(e) {
                const spotlight = document.querySelector(`#pointer-${this.id}`)
                if (spotlight) {
                    spotlight.style.backgroundImage = `radial-gradient(circle at ${e.layerX}px ${e.layerY}px, ${this.color} ${SPOTLIGHT_SIZE}`;
                }
            }
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
