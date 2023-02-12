<template>
  <div class="flex items-center justify-center w-full h-full">
    <div class="w-full mb-20 p-spacer">
      <BaseInput v-model="form.email" type="string" label="Email" class="mb-2" />
      <BaseInput v-model="form.password" type="password" label="Password" class="mb-2" />
      <BaseButton class="w-full mt-4 mb-2 btn-primary" @click="login()">Login</BaseButton>
      <NuxtLink class="block w-full mt-4 text-center link link-primary" :to="{ name: 'register' }">Don't have an account yet?</NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from 'vue';

definePageMeta({
  middleware: ['auth'],
});

const form = reactive({
  email: '',
  password: '',
});

// TODO: Form Validation

const { login: directusLogin } = useDirectusAuth();

async function login() {
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
