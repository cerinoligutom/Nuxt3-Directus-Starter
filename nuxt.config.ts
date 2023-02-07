import type { NuxtConfig } from 'nuxt/config';

const runtimeConfig: NuxtConfig['runtimeConfig'] = {
  directus: {
    url: process.env.NUXT_DIRECTUS_URL || 'http://localhost:8055',
  },
};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig,

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
    [
      'nuxt-directus',
      {
        url: runtimeConfig.directus.url,
      },
    ],
  ],
});
