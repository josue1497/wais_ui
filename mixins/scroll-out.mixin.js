import ScrollOut from "scroll-out";

export default {
  mounted() {
    this.so = ScrollOut({
      scope: this.$el
    });
  },
  destroyed() {
    this.so.teardown();
  }
};
