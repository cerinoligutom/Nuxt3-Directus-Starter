<template>
  <div class="container flex items-center justify-center w-full h-full mx-auto">
    <div class="w-full mb-20 md:w-1/2 lg:w-1/4 p-spacer">
      <h1 class="mb-8 text-3xl font-bold text-center">Sign Up</h1>
      <BaseInput v-model="form.email" type="string" label="Email" class="mb-2" />
      <BaseInput v-model="form.password" type="password" label="Password" class="mb-2" />
      <BaseInput v-model="form.confirmPassword" type="password" label="Confirm Password" class="mb-2" />
      <BaseButton class="w-full mt-4 mb-2 btn-primary" @click="signUp()">Submit</BaseButton>
      <NuxtLink class="block w-full mt-4 text-center link link-primary" :to="{ name: 'login' }">Already have an account? Login.</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
});

const { register: directusRegister } = useDirectusAuth();

async function signUp() {
  // TODO: Add other user details. Maybe use createUser() instead? https://nuxt-directus.netlify.app/usage/useDirectusAuth#createuser
  await directusRegister({
    email: form.email,
    password: form.password,
  });
}
</script>
