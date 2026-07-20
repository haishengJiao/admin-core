<template>
  <el-descriptions border :column="2" label-width="180px" :title="$t('demos.features.watermark.content')">
    <el-descriptions-item :label="$t('demos.features.watermark.contentType')">
      <el-select v-model="content.contentType">
        <el-option v-for="item in contentTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.content')">
      <el-input
        v-model="content.content"
        :disabled="content.contentType !== 'text' && content.contentType !== 'multi-line-text'"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
        resize="none"
        :rows="3"
        type="textarea"
      />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { contentTypeOptions } from '../constants';

import type { Content } from '../types';

const content = defineModel<Content>('content', { required: true });
</script>
