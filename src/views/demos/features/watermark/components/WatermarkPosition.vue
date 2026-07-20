<template>
  <el-descriptions border :column="2" label-width="180px">
    <template #title>
      <el-checkbox v-model="checked" :label="$t('demos.features.watermark.position')" />
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.translatePlacement')" :span="2">
      <el-select v-model="position.translatePlacement" :disabled="!checked">
        <el-option
          v-for="item in translatePlacementOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.translateX')">
      <el-input-number v-model="position.translateX" :disabled="!checked" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.translateY')">
      <el-input-number v-model="position.translateY" :disabled="!checked" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.backgroundPosition')">
      <el-input
        v-model="position.backgroundPosition"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.backgroundRepeat')">
      <el-select v-model="position.backgroundRepeat" :disabled="!checked">
        <el-option v-for="item in backgroundRepeatOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.parent')">
      <el-input
        v-model="position.parent"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.zIndex')">
      <el-input-number v-model="position.zIndex" :disabled="!checked" :precision="0" />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { translatePlacementOptions, backgroundRepeatOptions } from '../constants';

import type { Position } from '../types';

const position = defineModel<Position>('position', { required: true });
const checked = defineModel<boolean>('checked');
</script>
