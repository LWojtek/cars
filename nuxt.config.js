export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'lehmann-cars',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700;900&display=swap" },
      { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/getcar.server.js",
    { src: '~/plugins/vuex-persist', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    command: 'npm run build',
    commandOrigin: 'ui',
    publish: '/opt/build/repo/dist'
  },
  router: {
    extendRoutes( routes ) {
      routes.push(
        {
          name: 'index',
          path: '/',
          component: '@/components/pages/index.vue'
        },
        {
          name: 'about',
          path: '/about',
          component: '@/components/pages/about.vue'
        },
        {
          name: 'contact',
          path: '/contact',
          component: '@/components/pages/contact.vue'
        },
        {
          name: 'cars',
          path: '/cars',
          component: '@/components/pages/cars.vue',
          middleware: 'pages.js'
        },
        {
          name: 'car',
          path: '/cars/:carId',
          component: '@/components/pages/car.vue'
        },
        {
          name: '404',
          path: '/404',
          component: '@/components/pages/index.vue'
        },
      )
    }
  }
}
