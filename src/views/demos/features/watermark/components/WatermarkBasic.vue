<template>
  <el-descriptions border :column="2" label-width="180px" :title="$t('demos.features.watermark.basic')">
    <template #extra>
      <slot name="extra"></slot>
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.width')">
      <el-input-number v-model="base.width" :min="1" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.height')">
      <el-input-number v-model="base.height" :min="1" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.rotate')" :span="2">
      <el-input-number v-model="base.rotate" :max="360" :min="0" />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script lang="ts" setup>
import type { Base } from '../types';

const base = defineModel<Base>('base', { required: true });
</script>
