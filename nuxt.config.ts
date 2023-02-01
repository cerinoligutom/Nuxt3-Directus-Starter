// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',

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
  ],
});
