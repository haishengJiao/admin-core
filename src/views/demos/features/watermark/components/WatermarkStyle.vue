<template>
  <el-descriptions border :column="2" label-width="180px">
    <template #title>
      <el-checkbox v-model="checked" :label="$t('demos.features.watermark.style')" />
    </template>
    <el-descriptions-item :label="$t('demos.features.watermark.globalAlpha')">
      <el-input-number v-model="styles.globalAlpha" :disabled="!checked" :max="1" :min="0" :precision="2" :step="0.1" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.mode')">
      <el-select v-model="styles.mode" :disabled="!checked">
        <el-option v-for="item in modeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.textType')">
      <el-select v-model="styles.textType" :disabled="!checked">
        <el-option v-for="item in textTypeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.lineHeight')">
      <el-input-number v-model="styles.lineHeight" :disabled="!checked" :min="0" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.fontSize')">
      <el-input
        v-model="styles.fontSize"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.fontFamily')">
      <el-input
        v-model="styles.fontFamily"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.fontStyle')">
      <el-input
        v-model="styles.fontStyle"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.fontVariant')">
      <el-input
        v-model="styles.fontVariant"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.fontColor')">
      <el-input
        v-model="styles.fontColor"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.fontWeight')">
      <el-input
        v-model="styles.fontWeight"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.textAlign')">
      <el-select
        v-model="styles.textAlign"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseSelect')"
      >
        <el-option v-for="item in textAlignOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.textBaseline')">
      <el-select
        v-model="styles.textBaseline"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseSelect')"
      >
        <el-option v-for="item in textBaselineOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.filter')">
      <el-select
        v-model="filter"
        collapse-tags
        collapse-tags-tooltip
        :disabled="!checked"
        filterable
        multiple
        :placeholder="$t('demos.features.watermark.pleaseSelect')"
      >
        <el-option v-for="item in filterOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.textRowMaxWidth')">
      <el-input-number v-model="styles.textRowMaxWidth" :disabled="!checked" :min="0" />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.letterSpacing')">
      <el-input
        v-model="styles.letterSpacing"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
    <el-descriptions-item :label="$t('demos.features.watermark.wordSpacing')">
      <el-input
        v-model="styles.wordSpacing"
        :disabled="!checked"
        :placeholder="$t('demos.features.watermark.pleaseInput')"
      />
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup lang="ts">
import { modeOptions, textTypeOptions, textAlignOptions, textBaselineOptions, filterOptions } from '../constants';

import type { Style } from '../types';

const styles = defineModel<Style>('styles', { required: true });
const filter = defineModel<string[]>('filter');
const checked = defineModel<boolean>('checked');
</script>
