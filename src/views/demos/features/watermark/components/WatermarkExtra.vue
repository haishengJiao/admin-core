<template>
  <el-descriptions border :column="2" label-width="180px">
    <template #title>
      <el-checkbox v-model="checked" :label="$t('demos.features.watermark.extra')" />
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.mutationObserve')">
      <el-switch v-model="extra.mutationObserve" :disabled="!checked" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.monitorProtection')">
      <el-switch v-model="extra.monitorProtection" :disabled="!checked" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.auxiliaryLine')">
      <el-switch v-model="extra.auxiliaryLine" :disabled="!checked" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.movable')">
      <el-switch v-model="extra.movable" :disabled="!checked" />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import type { Extra } from '../types';

const extra = defineModel<Extra>('extra', { required: true });
const checked = defineModel<boolean>('checked');
</script>
