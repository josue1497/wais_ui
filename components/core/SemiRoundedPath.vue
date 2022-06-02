<template>
    <div :style="{width, height, background, color}">
      <slot/>
    </div>
</template>

<script>
    export default {
        name: "SemiRoundedPath",
        props: {
            heightSize: {type: [Number, String], default: 50},
            heightUnit: {type: String, default: 'vh'},
            widthSize: {type: [Number, String], default: 25},
            widthUnit: {type: String, default: 'vw'},
            color: {type: String, default: '#1A1A1A'},
            background: {type: String, default: '#B3EB00'},
            reverse: {type: Boolean, default: false},
        },
        computed: {
            width() {
                return `${this.widthSize}${this.widthUnit}`
            },
            height() {
                return `${this.heightSize}${this.heightUnit}`
            }
        }
    }
</script>

<style>
  .path {
    border-radius: 0 10vh 0 10vh;
  }

  .path-reverse {
    border-radius: 10vh 0 10vh 0;
  }
</style>
