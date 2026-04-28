<template>
  <router-view />
</template>

<script setup lang="ts">
import { useElementPlusDesign, useDocumentTitle } from '@/hooks';

useElementPlusDesign();
useDocumentTitle();
</script>
