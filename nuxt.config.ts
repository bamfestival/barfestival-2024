// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  runtimeConfig: {
        
    public: {
        apiBase: process.env.API_BASE_URL || "https://api.bamfestival.nl",
        sponsorenApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/sponsors?filter[status][value]=1&sort=-field_weight,title&include=field_image&jsonapi_include=1&fields[node--sponsors]=title,field_link,sticky,promote,field_image',
    }
},
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: '~/tailwind.config.js',
    viewer: true,
  },
  pinia: {
    
    
  },
  imports: {
    
  },

  webVitals: {
    provider: 'log',
    debug: true, // debug enable metrics reporting on dev environments
    disabled: false
  },
 
  image: {
    
    domains: ['api.bamfestival.nl','cms.bamfestival.nl','yellow-beach-0eae5a003.4.azurestaticapps.net'],
    presets: {
        cover: {
        modifiers: {
            fit: "cover",
            format: "webp",
            width: 300,
            height: 300,
                  },
               },
              },
        },
  plugins: [
          
        ],
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
    "@pinia/nuxt",
    "@morev/vue-transitions/nuxt"
  ]
})