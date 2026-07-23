import { ref, readonly, onUnmounted, nextTick } from 'vue';

import type { Watermark as WatermarkType, WatermarkOptions } from 'watermark-js-plus';

export type PartialWatermarkOptions = Partial<WatermarkOptions>;

const WATERMARK_DEFAULT: PartialWatermarkOptions = {
  content: 'Hello World!',
  width: 200,
  height: 160,
  rotate: 33,
  fontColor: 'gray',
  contentType: 'multi-line-text',
  globalAlpha: 0.5,
};

export function useWatermark() {
  const watermark = ref<WatermarkType>();

  async function initWatermark(options?: PartialWatermarkOptions) {
    const { Watermark } = await import('watermark-js-plus');

    watermark.value = new Watermark({ ...WATERMARK_DEFAULT, ...options });
    await watermark.value.create();
  }

  async function updateWatermark(options?: PartialWatermarkOptions) {
    if (watermark.value) {
      await nextTick();
      await watermark.value.changeOptions({ ...WATERMARK_DEFAULT, ...options });
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
