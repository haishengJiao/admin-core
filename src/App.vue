<template>
  <el-config-provider :locale="elementLocale">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
import {
  useElementPlusDesign,
  useDocumentTitle,
  useLocaleLoader,
  useAppearanceEffects,
  useAppWatermark,
} from './hooks';
import { elementLocale } from './locales';

useAppearanceEffects();
useElementPlusDesign();
useDocumentTitle();
useLocaleLoader();
useAppWatermark();
</script>
