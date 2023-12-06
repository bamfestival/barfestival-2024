// https://nuxt.com/docs/api/configuration/nuxt-config


export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  routeRules: {
    '/': { prerender: true },
    },
  runtimeConfig: {
        
    public: {
        apiBase: process.env.API_BASE_URL || "https://api.bamfestival.nl",
        sponsorenApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/sponsors?filter[status][value]=1&sort=-field_weight,title&include=field_image&jsonapi_include=1&fields[node--sponsors]=title,field_link,sticky,promote,field_image',
        articlesApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/article?jsonapi_include=1&filter[status][value]=1&sort=sticky,-field_weight,changed,created,title&include=field_image,field_tags&fields[node--article]=title,created,changed,body,field_video,field_image,field_tags',
        editionsApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/edition?filter[status][value]=1&jsonapi_include=1&sort=title&include=field_images,field_poster,field_year',
        galleriesApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/galleries?jsonapi_include=1&sort=-field_year.name,field_weight,-title&include=field_year,field_image,field_photographer&fields[node--galleries]=title,field_year,field_image,field_photographer',
        pagesApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/page?json_include=1&include=field_image,field_images,field_files,field_tags,field_images&sort=-field_weight,title',
        photographersApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/photographer?filter[status][value]=1&jsonapi_include=1&sort=-field_weight,title&fields[node--photographer]=title,field_email,field_url_facebook,field_url_instagram,field_url_twitter,field_url_website',
        aftermoviesApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/edition?filter[a-label][condition][path]=field_url_youtube&filter[a-label][condition][operator]=IS NOT NULL&sort=-field_year.name&include_json=1&fields[node--edition]=title,field_year,field_credits,field_url_youtube,field_subtitle,created,changed',
        artistsApi: (process.env.API_BASE_URL || "https://api.bamfestival.nl") + '/jsonapi/node/artists?filter[status][value]=1&sort=-field_weight,title&jsonapi_include=1&include=field_image,field_image_square,field_genre&fields[node--artists]=title,body,created,updated,body,field_datumeinde,field_datumstart,field_eindetijd,field_starttijd,field_subtitle,field_url_anders,field_url_facebook,field_url_instagram,field_url_tiktok,field_url_twitter,field_url_website,field_url_youtube,field_video,field_weight, field_image,field_image_square,field_genre',

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