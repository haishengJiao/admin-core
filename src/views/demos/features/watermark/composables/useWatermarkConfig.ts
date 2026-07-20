import { reactive, ref, computed } from 'vue';

import type { Advanced, Base, Content, Extra, Image, Position, RichText, Shadow, Style } from '../types';

export function useWatermarkConfig() {
  const base: Base = reactive({
    width: 300,
    height: 300,
    rotate: 45,
  });

  const content: Content = reactive({
    contentType: 'text',
    content: '水印内容',
  });

  const position: Position = reactive({
    translatePlacement: 'middle',
    translateX: undefined,
    translateY: undefined,
    backgroundPosition: '0px 0px',
    backgroundRepeat: 'repeat',
    parent: '#watermark-demo',
    zIndex: 10000,
  });

  const richText: RichText = reactive({
    richTextWidth: undefined,
    richTextHeight: undefined,
  });

  const image: Image = reactive({
    image: '',
    imageWidth: undefined,
    imageHeight: undefined,
  });

  const style: Style = reactive({
    globalAlpha: 0.5,
    mode: 'default',
    textType: 'fill',
    lineHeight: 30,
    fontSize: '20px',
    fontFamily: 'sans-serif',
    fontStyle: '',
    fontVariant: '',
    fontColor: '#000',
    fontWeight: 'normal',
    textAlign: undefined,
    textBaseline: undefined,
    filter: '',
    textRowMaxWidth: undefined,
    letterSpacing: '0px',
    wordSpacing: '',
  });

  const filter = ref<string[]>([]);
  const filterComputed = computed(() => {
    if (filter.value.length === 0) return 'none';
    return filter.value.join(' ');
  });

  const shadow: Shadow = reactive({
    shadowBlur: 10,
    shadowColor: '#000000FF',
    shadowOffsetX: 0,
    shadowOffsetY: 0,
  });

  const advanced: Advanced = reactive({
    type: 'linear',
    params: {
      linear: {
        x0: undefined,
        y0: undefined,
        y1: undefined,
        x1: undefined,
      },
      radial: {
        x0: undefined,
        y0: undefined,
        x1: undefined,
        r1: undefined,
        r0: undefined,
        y1: undefined,
      },
      conic: {
        x: undefined,
        y: undefined,
        startAngle: undefined,
      },
      pattern: {
        image: undefined,
        repetition: '',
      },
    },
    colorStops: [
      {
        offset: 0,
        color: 'red',
      },
      {
        offset: 0.5,
        color: 'green',
      },
      {
        offset: 1,
        color: 'blue',
      },
    ],
  });

  const extra: Extra = reactive({
    mutationObserve: true,
    monitorProtection: true,
    auxiliaryLine: false,
    movable: false,
  });

  return { base, content, position, richText, image, style, filter, filterComputed, shadow, advanced, extra };
}
