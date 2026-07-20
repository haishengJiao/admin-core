<template>
  <el-descriptions border :column="2" label-width="180px">
    <template #title>
      <el-checkbox v-model="checked" :label="$t('demos.features.watermark.advancedStyle')" />
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.type')" :span="2">
      <el-select v-model="advanced.type" :disabled="!checked">
        <el-option v-for="item in advancedStyleTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <template v-if="advanced.type === 'linear'">
      <el-descriptions-item :label="$t('demos.features.watermark.linearX0')">
        <el-input-number v-model="advanced.params.linear.x0" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.linearY0')">
        <el-input-number v-model="advanced.params.linear.y0" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.linearX1')">
        <el-input-number v-model="advanced.params.linear.x1" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.linearY1')">
        <el-input-number v-model="advanced.params.linear.y1" :disabled="!checked" />
      </el-descriptions-item>
    </template>
    <template v-if="advanced.type === 'radial'">
      <el-descriptions-item :label="$t('demos.features.watermark.radialX0')">
        <el-input-number v-model="advanced.params.radial.x0" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.radialY0')">
        <el-input-number v-model="advanced.params.radial.y0" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.radialR0')">
        <el-input-number v-model="advanced.params.radial.r0" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.radialX1')">
        <el-input-number v-model="advanced.params.radial.x1" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.radialY1')">
        <el-input-number v-model="advanced.params.radial.y1" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.radialR1')">
        <el-input-number v-model="advanced.params.radial.r1" :disabled="!checked" />
      </el-descriptions-item>
    </template>
    <template v-if="advanced.type === 'conic'">
      <el-descriptions-item :label="$t('demos.features.watermark.conicX')">
        <el-input-number v-model="advanced.params.conic.x" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.conicY')">
        <el-input-number v-model="advanced.params.conic.y" :disabled="!checked" />
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.conicStartAngle')">
        <el-input-number v-model="advanced.params.conic.startAngle" :disabled="!checked" />
      </el-descriptions-item>
    </template>
    <template v-if="advanced.type === 'pattern'">
      <el-descriptions-item :label="$t('demos.features.watermark.image')">
        <slot name="image"></slot>
      </el-descriptions-item>
      <el-descriptions-item :label="$t('demos.features.watermark.repetition')">
        <el-select v-model="advanced.params.pattern.repetition" :disabled="!checked">
          <el-option v-for="item in repetitionOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-descriptions-item>
    </template>
  </el-descriptions>
</template>

<script setup lang="ts">
import { advancedStyleTypeOptions, repetitionOptions } from '../constants';

import type { Advanced } from '../types';

const advanced = defineModel<Advanced>('advanced', { required: true });
const checked = defineModel<boolean>('checked');
</script>
