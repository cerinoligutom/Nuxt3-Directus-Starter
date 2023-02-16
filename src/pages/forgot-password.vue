<template>
  <div class="container flex items-center justify-center w-full h-full mx-auto">
    <div class="w-full mb-20 md:w-1/2 lg:w-1/4 p-spacer">
      <h1 class="mb-8 text-3xl font-bold text-center">Forgot Password</h1>
      <BaseInput v-model="form.email" type="string" label="Email" class="mb-2" />
      <BaseButton class="w-full mt-4 mb-2 btn-primary" @click="requestPasswordReset()">Submit</BaseButton>
      <NuxtLink class="block w-full mt-4 text-center link link-primary" :to="{ name: 'login' }">Already have an account? Login.</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const form = reactive({
  email: '',
});

const { requestPasswordReset: directusRequestPasswordReset } = useDirectusAuth();

async function requestPasswordReset() {
  await directusRequestPasswordReset({
    email: form.email,
  });
}
</script>
