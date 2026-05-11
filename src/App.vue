<template>
  <el-config-provider :locale="elementLocale">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useElementPlusDesign, useDocumentTitle, useLocaleLoader } from './hooks';
import { elementLocale } from './locales';

useElementPlusDesign();
useDocumentTitle();
useLocaleLoader();
</script>
