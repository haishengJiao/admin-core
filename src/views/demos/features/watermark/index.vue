<template>
  <div id="watermark-demo" class="relative w-full">
    <div class="border-border bg-bg relative border-b px-6 py-5">
      <div class="text-lg font-semibold">{{ $t('demos.features.watermark.title') }}</div>
      <div class="text-text-body/80 mt-4 text-sm">
        {{ $t('demos.features.watermark.description') }}
        <el-link href="https://zhensherlock.github.io/watermark-js-plus/" target="_blank" type="primary">
          watermark-js-plus
        </el-link>
        {{ $t('demos.features.watermark.descriptionSuffix') }}
      </div>
    </div>

    <div class="p-4">
      <div class="mb-4">
        <el-alert :closable="false" :title="$t('demos.features.watermark.alert')" type="warning" />
      </div>
      <el-card class="w-full" :header="$t('demos.features.watermark.config')">
        <div>
          <WatermarkBasic v-model:base="base">
            <template #extra>
              <el-button :disabled="!!watermark" type="primary" @click="handleCreate">
                {{ $t('demos.features.watermark.create') }}
              </el-button>
              <el-button :disabled="!watermark" type="primary" @click="handleUpdate">
                {{ $t('demos.features.watermark.update') }}
              </el-button>
              <el-button :disabled="!watermark" plain type="danger" @click="destroyWatermark">
                {{ $t('demos.features.watermark.remove') }}
              </el-button>
            </template>
          </WatermarkBasic>

          <WatermarkContent v-model:content="content" />

          <WatermarkPosition v-model:checked="checkedPosition" v-model:position="position" />

          <WatermarkRichText v-model:checked="checkedRichText" v-model:rich-text="richText" :content="content" />

          <WatermarkImage v-model:checked="checkedImage" v-model:image="image" :content="content">
            <template #image>
              <WatermarkImageUpload
                v-model:file-list="fileList"
                :disabled="!checkedImage || content.contentType !== 'image'"
                @change="handleFileChange"
                @remove="handleRemove"
              />
            </template>
          </WatermarkImage>

          <WatermarkStyle v-model:checked="checkedStyle" v-model:filter="filter" v-model:styles="style" />

          <WatermarkShadow v-model:checked="checkedShadow" v-model:shadow="shadow" />

          <WatermarkAdvanced v-model:advanced="advanced" v-model:checked="checkedAdvanced">
            <template #image>
              <WatermarkImageUpload
                v-model:file-list="patternFileList"
                :disabled="!checkedAdvanced"
                @change="handlePatternFileChange"
                @remove="handlePatternRemove"
              />
            </template>
          </WatermarkAdvanced>

          <WatermarkExtra v-model:checked="checkedExtra" v-model:extra="extra" />
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { pickBy, isNil } from 'lodash-es';
import { computed, ref } from 'vue';

import {
  WatermarkImageUpload,
  WatermarkBasic,
  WatermarkContent,
  WatermarkPosition,
  WatermarkRichText,
  WatermarkImage,
  WatermarkStyle,
  WatermarkShadow,
  WatermarkAdvanced,
  WatermarkExtra,
} from './components';
import { useWatermarkConfig, useImageUpload, usePatternImageUpload } from './composables';

import type { AdvancedStyleType } from 'watermark-js-plus';

import { useWatermark } from '@/hooks';

const { watermark, updateWatermark, destroyWatermark } = useWatermark();
const { base, content, position, richText, image, style, filter, filterComputed, shadow, advanced, extra } =
  useWatermarkConfig();

const checkedPosition = ref(false);
const checkedRichText = ref(false);
const checkedImage = ref(false);
const checkedStyle = ref(false);
const checkedShadow = ref(false);
const checkedAdvanced = ref(false);
const checkedExtra = ref(false);

const { fileList, handleFileChange, handleRemove } = useImageUpload(image);
const { patternFileList, handlePatternFileChange, handlePatternRemove } = usePatternImageUpload(advanced);

const deepPickBy = (obj: AdvancedStyleType) => {
  if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
    return obj;
  }

  const result: Record<string, unknown> = {};
  const specialTypes = [
    HTMLImageElement,
    SVGImageElement,
    HTMLVideoElement,
    HTMLCanvasElement,
    ImageBitmap,
    OffscreenCanvas,
  ];

  for (const [key, value] of Object.entries(obj)) {
    if (isNil(value)) continue;

    const isSpecial = specialTypes.some(Type => value instanceof Type);

    if (typeof value === 'object' && !Array.isArray(value) && !isSpecial) {
      const nested = deepPickBy(value);
      result[key] = nested;
    } else {
      result[key] = value;
    }
  }
  return result;
};

const options = computed(() => {
  let config = { ...base, ...content };

  if (checkedPosition.value) {
    config = { ...config, ...position };
  }

  if (checkedRichText.value) {
    config = { ...config, ...richText };
  }

  if (checkedImage.value) {
    config = { ...config, ...image };
  }

  if (checkedStyle.value) {
    config = { ...config, ...style, ...{ filter: filterComputed.value } };
  }

  if (checkedShadow.value) {
    config = { ...config, ...{ shadowStyle: shadow } };
  }

  if (checkedAdvanced.value) {
    const filteredAdvanced = deepPickBy(advanced);
    config = { ...config, ...{ advancedStyle: filteredAdvanced } };
  }

  if (checkedExtra.value) {
    config = { ...config, ...extra };
  }

  return pickBy(config, value => value !== undefined && value !== null);
});

const handleCreate = async () => {
  destroyWatermark();
  await updateWatermark({ ...options.value });
};

const handleUpdate = async () => {
  await updateWatermark({ ...options.value });
};
</script>

<style scoped>
@reference "tailwindcss";

#watermark-demo {
  :deep(.el-descriptions) {
    .el-descriptions__header {
      @apply my-2.5;
    }

    .el-descriptions__body tr {
      @apply flex;

      td {
        @apply flex items-center;
      }

      .el-descriptions__content {
        @apply flex-1;
      }
    }
  }

  :deep(.el-upload-list) {
    --el-upload-picture-card-size: calc(var(--spacing) * 15);

    .el-upload-list__item-actions span {
      @apply text-sm;
    }

    .el-upload-list__item-actions span + span {
      @apply ml-2;
    }

    .el-upload {
      --el-upload-picture-card-size: calc(var(--spacing) * 15);
    }
  }
}
</style>
