<template>
  <div class="flex px-3 text-lg" style="height: 50px">
    <div class="flex cursor-pointer items-center gap-2 overflow-hidden" @click="handleGoHome">
      <div class="shrink-0">
        <img src="@/assets/images/layout/logo.png" width="32" />
      </div>
      <h1 class="truncate font-semibold" :title="appName">{{ appName }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { usePreferencesStore } from '@/store';

const router = useRouter();
const preferences = usePreferencesStore();

const appName = computed(() => preferences.general.name);

const handleGoHome = () => {
  router.push('/');
};
</script>
