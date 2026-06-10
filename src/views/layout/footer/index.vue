<template>
  <footer class="bg-bg-page z-1 h-(--footer-height) transition-all duration-300">
    <div v-if="enable" class="flex h-full items-center justify-center text-xs">
      <el-link
        v-if="icp"
        class="mx-1 text-xs!"
        :href="icpLink || 'javascript:void(0)'"
        target="_blank"
        type="primary"
        underline="never"
      >
        {{ icp }}
      </el-link>
      Copyright © {{ date }}
      <el-link
        v-if="companyName"
        class="mx-1 text-xs!"
        :href="companySiteLink || 'javascript:void(0)'"
        target="_blank"
        type="primary"
        underline="never"
      >
        {{ companyName }}
      </el-link>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

import { usePreferencesStore } from '@/store';

const { layout } = storeToRefs(usePreferencesStore());

const enable = computed(() => layout.value.copyright.enable);
const icp = computed(() => layout.value.copyright.icp);
const icpLink = computed(() => layout.value.copyright.icpLink);
const date = computed(() => layout.value.copyright.date);
const companyName = computed(() => layout.value.copyright.companyName);
const companySiteLink = computed(() => layout.value.copyright.companySiteLink);
</script>
