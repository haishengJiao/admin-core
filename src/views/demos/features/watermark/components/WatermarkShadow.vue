<template>
  <el-descriptions border :column="2" label-width="180px">
    <template #title>
      <el-checkbox v-model="checked" :label="$t('demos.features.watermark.shadow')" />
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.shadowBlur')">
      <el-input-number v-model="shadow.shadowBlur" :disabled="!checked" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.shadowColor')">
      <el-input
        v-model="shadow.shadowColor"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.shadowOffsetX')">
      <el-input-number v-model="shadow.shadowOffsetX" :disabled="!checked" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.shadowOffsetY')">
      <el-input-number v-model="shadow.shadowOffsetY" :disabled="!checked" />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import type { Shadow } from '../types';

const shadow = defineModel<Shadow>('shadow', { required: true });
const checked = defineModel<boolean>('checked');
</script>
