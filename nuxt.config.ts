// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  webVitals: {
    provider: 'log',
    debug: true, // debug enable metrics reporting on dev environments
    disabled: false
  },
  modules: [
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "@dargmuesli/nuxt-cookie-control",
    "dayjs-nuxt",
    "@nuxt/ui",
    "nuxt-jsonapi",
    "@nuxtjs/web-vitals",
    "nuxt3-leaflet",
    "@morev/vue-transitions/nuxt"
  ]
})