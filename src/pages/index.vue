<template>
  <div class="container block w-full h-full mx-auto">
    <section id="hero" class="flex flex-col items-center justify-center px-spacer">
      <div class="mt-20 text-center">
        <h1 class="text-3xl font-bold">Slogan of some sort here</h1>
        <p class="pt-2">Description of what this is all about.</p>
      </div>

      <div class="my-16 mockup-code">
        <pre data-prefix="$"><code>npm i acme-corp</code></pre>
        <pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
        <pre data-prefix=">" class="text-success"><code>Done!</code></pre>
      </div>
    </section>

    <section id="about" class="w-full h-full px-spacer scroll-mt-24">
      <template v-for="key of [...Array(4)]" :key="key">
        <div class="mb-8">
          <h2 class="text-xl font-bold mb-spacer">What is Lorem Ipsum?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        <div class="mb-8">
          <h2 class="text-xl font-bold mb-spacer">Why do we use it?</h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
            have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </template>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing',
});
</script>
