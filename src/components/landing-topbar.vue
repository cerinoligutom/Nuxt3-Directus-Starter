<template>
  <header class="sticky top-0 z-50 text-primary-content navbar bg-primary">
    <div class="flex-1">
      <NuxtLink to="/" class="text-xl normal-case btn btn-ghost">Acme Corp</NuxtLink>
    </div>
    <nav class="flex-none">
      <ul class="px-1 menu menu-horizontal">
        <li><NuxtLink to="#about">About</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'login' }">Login</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>
