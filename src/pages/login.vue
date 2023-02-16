<template>
  <div class="container flex items-center justify-center w-full h-full mx-auto">
    <div class="w-full mb-20 md:w-1/2 lg:w-1/4 p-spacer">
      <h1 class="mb-8 text-3xl font-bold text-center">Login</h1>
      <BaseInput v-model="form.email" type="string" label="Email" class="mb-2" />
      <BaseInput v-model="form.password" type="password" label="Password" class="mb-2" />
      <div class="flex flex-row items-center justify-between">
        <BaseCheckbox v-model="rememberMe" label="Remember me" />
        <NuxtLink class="block text-center link link-primary" :to="{ name: 'forgot-password' }">Forgot password?</NuxtLink>
      </div>
      <BaseButton class="w-full mt-4 mb-2 btn-primary" @click="login()">Submit</BaseButton>
      <NuxtLink class="block w-full mt-4 text-center link link-primary" :to="{ name: 'register' }">Don't have an account yet?</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';

definePageMeta({
  middleware: ['auth'],
});

const email = useLocalStorage('rememberEmail', '');
const rememberMe = ref(!!email.value);

const form = reactive({
  email: email.value,
  password: '',
});

// TODO: Form Validation
const { login: directusLogin } = useDirectusAuth();

async function login() {
  email.value = rememberMe.value ? form.email : '';

  try {
    await directusLogin({
      email: form.email,
      password: form.password,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const user = useDirectusUser() as Ref<Record<string, any>>;

    await navigateTo({ name: 'users-userId', params: { userId: user.value.id } });
  } catch (err) {
    console.error(err);
  }
}
</script>
