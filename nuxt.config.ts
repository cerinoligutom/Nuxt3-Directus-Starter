// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

  imports: {
    dirs: ['./store'],
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Inter: true,
        },
      },
    ],
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'storeToRefs'],
      },
    ],
    'nuxt-icon',
    '@nuxtjs/web-vitals',
  ],
});
