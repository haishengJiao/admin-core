<template>
  <div class="flex px-3 text-lg" style="height: 50px">
    <div class="flex cursor-pointer items-center gap-2 overflow-hidden" @click="handleGoHome">
      <div class="shrink-0">
        <img src="@/assets/images/layout/logo.png" width="32" />
      </div>
      <h1 class="truncate font-semibold" :title="appTitle">{{ appTitle }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const appTitle = import.meta.env.VITE_APP_TITLE;

const handleGoHome = () => {
  router.push('/');
};
</script>
