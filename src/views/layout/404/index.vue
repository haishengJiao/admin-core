<template>
  <div class="flex h-full w-full items-center justify-center">
    <div class="flex flex-col items-center justify-center">
      <CoreSvg name="layout-404" size="360" />
      <div class="mb-10 text-center">
        <h1 class="mb-4 text-3xl font-semibold tracking-wide">{{ $t('ui.fallback.pageNotFound') }}</h1>
        <p class="text-text-regular text-base leading-relaxed">{{ $t('ui.fallback.pageNotFoundDesc') }}</p>
      </div>
      <el-button type="primary" @click="goHome">
        <template #icon><i-ep-back /></template>
        {{ $t('common.backToHome') }}
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const goHome = () => {
  router.push('/');
};
</script>
