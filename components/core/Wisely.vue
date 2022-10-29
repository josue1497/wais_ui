<template>
  <div>
    <div class="flex flex-col">
      <span id="wisely-text"></span>
      <span class="wais-sub" v-if="showWais">Wais Digital</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Wisely",
  data: () => ({
    showWais: false,
    wisely: ["W", "i", "s", "e", "l", "y", ""],
    letters: [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ],
  }),
  mounted() {
    this.presentWisely();
  },
  methods: {
    timeout(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    async presentWisely() {
      let wisely = "";
      for (const item of this.wisely) {
        if (item) {
          for (const _letter of [0, 1, 2, 3, 5]) {
            const letter =
              this.letters[Math.floor(Math.random() * this.letters.length)];
            const index = this.wisely.indexOf(item);
            await this.timeout(50);
            document.getElementById("wisely-text").innerHTML = `${wisely}${
              index === 0 ? letter : letter.toLowerCase()
            }`;
          }
          document.getElementById("wisely-text").innerHTML = `${wisely}${item}`;
        } else {
          document.getElementById("wisely-text").innerHTML = wisely;
        }

        wisely += item;
      }
      this.showWais = true;
    },
  },
};
</script>
<style>
.letter-animated {
  background: rgb(0, 0, 0, 0.3);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-fill-color: transparent;
  background-size: 150% auto;
  line-height: 5rem;
}

.wais-sub {
    font-size: 2rem;
    color: #fff;
    margin-top: -4rem;
    /* @apply text-[] */
    text-align: center;
}
</style>
