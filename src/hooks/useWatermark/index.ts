import { ref, readonly, onUnmounted, nextTick } from 'vue';

import type { Watermark as WatermarkType, WatermarkOptions } from 'watermark-js-plus';

export type PartialWatermarkOptions = Partial<WatermarkOptions>;

export function useWatermark() {
  const watermark = ref<WatermarkType>();
  const cachedOptions = ref<PartialWatermarkOptions>({
    content: 'Hello World!',
    width: 200,
    height: 160,
    rotate: 33,
    fontColor: 'gray',
    contentType: 'multi-line-text',
    globalAlpha: 0.5,
  });

  async function initWatermark(options?: PartialWatermarkOptions) {
    const { Watermark } = await import('watermark-js-plus');

    cachedOptions.value = {
      ...cachedOptions.value,
      ...options,
    };

    watermark.value = new Watermark(cachedOptions.value);
    await watermark.value.create();
  }

  async function updateWatermark(options?: PartialWatermarkOptions) {
    if (watermark.value) {
      await nextTick();
      await watermark.value.changeOptions({
        ...cachedOptions.value,
        ...options,
      });
    } else {
      await initWatermark(options);
    }
  }

  function destroyWatermark() {
    if (watermark.value) {
      watermark.value.destroy();
      watermark.value = undefined;
    }
  }

  onUnmounted(() => {
    destroyWatermark();
  });

  return {
    watermark: readonly(watermark),
    updateWatermark,
    destroyWatermark,
  };
}
