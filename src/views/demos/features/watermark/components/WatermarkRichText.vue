<template>
  <el-descriptions border :column="2" label-width="180px">
    <template #title>
      <el-checkbox v-model="checked" :label="$t('demos.features.watermark.richText')" />
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.richTextWidth')">
      <el-input-number v-model="richText.richTextWidth" :disabled="disabled" :min="0" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.richTextHeight')">
      <el-input-number v-model="richText.richTextHeight" :disabled="disabled" :min="0" />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import type { RichText, Content } from '../types';

interface Props {
  content: Content;
}

const props = defineProps<Props>();
const richText = defineModel<RichText>('richText', { required: true });
const checked = defineModel<boolean>('checked');

const disabled = computed(() => {
  return !checked.value || props.content.contentType !== 'rich-text';
});
</script>
