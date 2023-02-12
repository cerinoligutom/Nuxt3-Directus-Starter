<template>
  <div class="flex items-center justify-center w-full h-full">
    <div class="w-full mb-20 p-spacer">
      <BaseInput v-model="form.email" type="string" label="Email" class="mb-2" />
      <BaseInput v-model="form.password" type="password" label="Password" class="mb-2" />
      <BaseInput v-model="form.confirmPassword" type="password" label="Confirm Password" class="mb-2" />
      <BaseButton class="w-full mt-4 mb-2 btn-primary" @click="signUp()">Sign Up</BaseButton>
      <NuxtLink class="block w-full mt-4 text-center link link-primary" to="/login">Already have an account? Login.</NuxtLink>
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

// TODO: Form Validation

const { register: directusRegister } = useDirectusAuth();

async function signUp() {
  // TODO: Add other user details. Maybe use createUser() instead? https://nuxt-directus.netlify.app/usage/useDirectusAuth#createuser
  await directusRegister({
    email: form.email,
    password: form.password,
  });
}
</script>
