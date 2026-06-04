<template>
  <div class="flex h-12.25 px-3 text-lg">
    <div class="flex cursor-pointer items-center gap-2 overflow-hidden" @click="handleGoHome">
      <div class="shrink-0">
        <img class="w-8" src="@/assets/images/layout/logo.png" />
      </div>
      <h1 v-if="!collapsed" class="truncate font-semibold" :title="appName">{{ appName }}</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { usePreferencesStore } from '@/store';

const router = useRouter();
const preferences = usePreferencesStore();

const appName = computed(() => preferences.app.name);
const collapsed = computed(() => preferences.layout.sidebar.collapsed);

const handleGoHome = () => {
  router.push('/');
};
</script>
