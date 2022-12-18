<template>
  <div class="is-dark px-3 md:px-14 py-16">
    <section class="w-full flex mt-20" id="careers-1">
      <div class="flex flex-col justify-center items-start m-auto w-full">
        <div
          class="flex flex-col justify-end items-end title-content md:ml-10 h-full w-full lg:w-3/4 xl:w-10/12"
        >
          <h1 class="contact-title font-normal mr-auto ml-0 md:mr-auto md:ml-0 flat-2">
            {{ $t("_contact.title") }}
          </h1>
          <div
            class="flex justify-center flex-col items-end w-10/12 md:w-3/4 lg:w-1/2 ml-auto py-3 md:py-6 lg:py-8 px-5 flat-2"
          >
            <p class="contact-text-1 ml-auto">
              {{ $t("_contact.subtitle") }}
            </p>
          </div>
          <div class="point four flat-1"></div>
          <div
            class="flex justify-center flex-col items-end w-full py-2 md:py-5 px-5 flat-3"
          >
            <div class="form-control">
              <input
                type="text"
                name="current-name"
                id="current-name"
                class="w-full"
                :placeholder="$t('_contact.name')"
                autofocus
                v-model="contact.name"
                :disabled="loading"
              />
            </div>
            <div class="form-control">
              <input
                type="text"
                name="current-email"
                id="current-email"
                class="w-full"
                :placeholder="$t('_contact.email')"
                v-model="contact.email"
                autofill="off"
                :disabled="loading"
              />
            </div>
            <div class="form-control area">
              <textarea
                type="text"
                name="message"
                id="message"
                class="w-full mt-2"
                cols="4"
                rows="4"
                :placeholder="$t('_contact.message')"
                v-model="contact.message"
                :disabled="loading"
              ></textarea>
            </div>
          </div>
        </div>
        <hr class="border border-t-black dark:border-t-white w-11/12 mt-2 mx-auto" />
        <div class="w-full p-5 md:px-14 py-2 md:py-5">
          <button class="send-button flex flex-row align-center justify-center" @click="sendMail()" :disabled="loading">
            <svg
              v-if="loading"
              class="animate-spin -ml-1 mr-3 h-[2.5vh] w-[2.5vh] md:h-[4vh] md:w-[4vh] lg:h-[5vh] lg:w-[5vh] my-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>

            <span v-if="loading">{{ $t("_contact.sending") }}</span>
            <span v-else>{{ $t("_contact.send") }}</span>
          </button>
        </div>
        <div class="flex w-full p-5 flex-col">
          <div class="flex flex-col w-full md:w-3/4 ml-auto">
            <p class="ml-auto wais-text-2">{{ $t("_contact.text_1") }}</p>
            <div class="flex flex-col ml-auto justify-evenly text-2xl py-2">
              <p class="ml-auto">
                <a href="tel:+58414-3417791"
                  ><span class="block wais-text-4">+58 414-3417791</span></a
                >
                <a href="tel:+58412-9507154"
                  ><span class="block wais-text-4">+58 412-9507154</span></a
                >
              </p>
              <div
                class="flex mr-auto flex-row justify-evenly text-xl wais-text-2 mt-5 contact"
              >
                <a href="tel:+58414-3417791"><i class="fa-solid fa-phone"></i></a>
                <a href="https://t.me/waisdigital" target="_blank"
                  ><i class="fa-solid fa-paper-plane mx-10"></i
                ></a>
                <a href="https://wa.me/584143417791" target="_blank"
                  ><i class="fa-brands fa-whatsapp"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CoreSection from "../components/core/CoreSection";
import HeadSection from "../components/core/HeadSection";
const defaultContact = {
  name: "",
  email: "",
  message: "",
};

export default {
  name: "contact",
  components: { HeadSection, CoreSection },
  data: () => ({
    loading: false,
    contact: { ...defaultContact },
  }),
  methods: {
    async sendMail() {
      if(!this.contact.name || !this.contact.email || !this.contact.message) 
        return this.$toast.error(this.$t("message.empty_fields"), {
        duration: 3000,
        theme: "bubble",
        fitToScreen: true,
        singleton: true,
      });
      
      try {
        this.loading = true;
        const response = await this.$axios.$post(
          `${process.env.WAIS_API_URL}contact/send-mail`,
          this.contact
        );
        console.log(response);
        this.$toast.success(this.$t("message.success"), {
          duration: 3000,
          theme: "bubble",
          fitToScreen: true,
          singleton: true,
        });
        this.contact = { ...defaultContact };
      } catch (error) {
        console.log(error);
        this.$toast.error(this.$t("message.email_send_fail"), {
          duration: 3000,
          theme: "bubble",
          fitToScreen: true,
          singleton: true,
        });
      } finally {
        this.loading = false;
      }
    },
  },
  head() {
    return {
      title: this.$t("contact"),
    };
  },
};
</script>

<style scoped>
.contact a {
  transition: all 0.4s ease-in-out;
}
.contact a:hover {
  transform: translateY(-10px);
}

.contact-title {
  @apply text-[62px] md:text-[128px] lg:text-[168px] xl:text-[208px] 2xl:text-[288px] leading-[5rem] md:leading-[10rem] lg:leading-[12rem] xl:leading-[12rem] 2xl:leading-[15rem];
}

.contact-text-1 {
  @apply text-[14px] md:text-[18px] lg:text-[20px] xl:text-[28px] 2xl:text-[36px]  leading-[1rem] md:leading-[2rem] lg:leading-[2rem] xl:leading-[3rem] 2xl:leading-[3rem];
}

.form-control {
  @apply z-10 flex flex-row w-full p-2;
}

.form-control.area {
  @apply z-10 flex flex-col w-full p-2;
}

.four {
  background: #f071dc;
  /* right: 75vh;
  top: 20vh;
  width: 75vh;
  height: 75vh; */
  filter: blur(10vh);
  @apply right-[10vh] top-[10vh] w-[40vh] h-[40vh] md:right-[35vh] md:top-[20vh] md:w-[60vh] md:h-[60vh] lg:right-[35vh] lg:top-[20vh] lg:w-[60vh] lg:h-[60vh];
}

.toasted.bubble {
  line-height: 1.1em;
  padding: 0 20px;
  font-size: 24px !important;
  font-weight: 400;
  color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
}
</style>
