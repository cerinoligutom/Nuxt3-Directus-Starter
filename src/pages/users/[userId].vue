<template>
  <div>
    <pre>{{ user }}</pre>
    <BaseButton class="btn-primary" @click="logout()">Logout</BaseButton>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['auth'],
});

const user = useDirectusUser();

const { logout: directusLogout } = useDirectusAuth();

async function logout() {
  await directusLogout();
  await navigateTo('/');
}
</script>
