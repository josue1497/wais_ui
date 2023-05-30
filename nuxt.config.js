import { en } from "./locale/en";
import { es } from "./locale/es";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  dev: process.env.NODE_ENV !== "production",
  // Global page headers: https://go.nuxtjs.dev/config-head
  loading: {
    color: "#99FCCE",
    height: "5px",
  },
  head: {
    titleTemplate: "%s | Wais Digital",
    title: "Home",
    htmlAttrs: {
      lang: process.env.I18N_LOCALE,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Agencia digital" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@/assets/css/main.css",
    "@/assets/css/scroll-effect.css",
    "@/assets/css/scroll-effect.scss",
    "@/assets/css/background-effect.css",
    "@/assets/css/background-effect.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "animate.css/animate.min.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/fontawesome.js",
    { src: "~/plugins/vuex-persist.js", mode: "client" },
    { src: "~/plugins/animated.js", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxt/postcss8", "@nuxtjs/i18n"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', "@neneos/nuxt-animate.css", '@nuxtjs/toast', 'cookie-universal-nuxt'],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  serverMiddleware: {
    "/api": "~/api",
  },
  i18n: {
    locales: ["en", "es"],
    strategy: "no_prefix",
    defaultLocale: process.env.I18N_LOCALE,
    vueI18n: {
      fallbackLocale: process.env.I18N_FALLBACK_LOCALE,
      messages: {
        en,
        es,
      },
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      onlyOnRoot: true, // recommended
    },
    seo: true,
  },
  env: {
    I18N_LOCALE: process.env.I18N_LOCALE,
    I18N_FALLBACK_LOCALE: process.env.I18N_FALLBACK_LOCALE,
    WAIS_API_URL: process.env.WAIS_API_URL,
    WAIS_CDN: process.env.WAIS_CDN,
  },
  axios: {
    baseURL: process.env.WAIS_API_URL,
    // proxy: true
  },
  toast: {
    position: 'top-right',
    duration: 3000,
    keepOnHover: true
  }
};
