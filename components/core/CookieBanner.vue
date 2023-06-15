<template>
  <div
    v-if="!accepted"
    class="fixed bottom-0 w-full bg-gray-900 px-4 py-2 flex flex-col md:flex-row  items-center justify-between  h-[12vh] md:h-[9vh] z-50"
  >
    <p class="text-white text-center md:text-left py-2 md:pa-3">
      {{ $t("cookie_message") }}
    </p>
    <div>
      <button
        @click="acceptCookies"
        class="text-black bg-white hover:bg-gray-100 hover:cursor-pointer px-4 py-2 rounded mr-2"
      >
        {{ $t("accept") }}
      </button>
      <button
        @click="rejectCookies"
        class="text-white bg-gray hover:bg-gray-100 hover:cursor-pointer px-4 py-2 rounded"
      >
        {{ $t("reject") }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accepted: false,
    };
  },
  mounted() {
    this.checkCookieAcceptance();
  },
  methods: {
    acceptCookies() {
      this.accepted = true;
      this.$cookies.set("cookiesAccepted", true, {
        path: "/",
        expires: new Date("9999-12-31"),
      });
    },
    rejectCookies() {
      this.$cookies.remove("cookiesAccepted");
      alert(
        "Has rechazado las cookies. Algunas funcionalidades del sitio pueden no estar disponibles."
      );
      this.accepted = true;
    },
    checkCookieAcceptance() {
      const cookiesAccepted = this.$cookies.get("cookiesAccepted");
      if (cookiesAccepted) {
        this.accepted = true;
      }
    },
  },
};
</script>

<style scoped></style>
