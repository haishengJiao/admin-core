<template>
  <el-descriptions border :column="2" label-width="180px">
    <template #title>
      <el-checkbox v-model="checked" :label="$t('demos.features.watermark.image')" />
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.image')" :span="2">
      <slot name="image"></slot>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.imageWidth')">
      <el-input-number v-model="image.imageWidth" :disabled="disabled" :min="0" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.imageHeight')">
      <el-input-number v-model="image.imageHeight" :disabled="disabled" :min="0" />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { Image, Content } from '../types';

interface Props {
  content: Content;
}

const props = defineProps<Props>();
const image = defineModel<Image>('image', { required: true });
const checked = defineModel<boolean>('checked');

const disabled = computed(() => {
  return !checked.value || props.content.contentType !== 'image';
});
</script>
