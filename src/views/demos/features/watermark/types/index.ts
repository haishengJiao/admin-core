import type {
  ContentTypeType,
  TranslatePlacementType,
  CreateWatermarkModeType,
  TextType,
  TextAlignType,
  TextBaselineType,
  CanvasShadowStyles,
  AdvancedStyleType,
  AdvancedStyleParamsType,
} from 'watermark-js-plus';

export interface Base {
  width: number;
  height: number;
  rotate: number;
}

export interface Content {
  contentType: ContentTypeType;
  content: string;
}

export interface Position {
  translatePlacement: TranslatePlacementType;
  translateX: undefined | number;
  translateY: undefined | number;
  backgroundPosition: string;
  backgroundRepeat: string;
  parent: string;
  zIndex: number;
}

export interface RichText {
  richTextWidth: undefined | number;
  richTextHeight: undefined | number;
}

export interface Image {
  image: string | undefined;
  imageWidth: undefined | number;
  imageHeight: undefined | number;
}

export interface Style {
  globalAlpha: number;
  mode: CreateWatermarkModeType;
  textType: TextType;
  lineHeight: number;
  fontSize: string;
  fontFamily: string;
  fontStyle: string;
  fontVariant: string;
  fontColor: string;
  fontWeight: string;
  textAlign: undefined | TextAlignType;
  textBaseline: undefined | TextBaselineType;
  filter: string;
  textRowMaxWidth: undefined;
  letterSpacing: string;
  wordSpacing: string;
}

export type Shadow = CanvasShadowStyles;

export interface Advanced {
  type: AdvancedStyleType['type'];
  params: {
    linear: {
      x0: undefined | number;
      y0: undefined | number;
      y1: undefined | number;
      x1: undefined | number;
    };
    radial: {
      x0: undefined | number;
      y0: undefined | number;
      x1: undefined | number;
      r1: undefined | number;
      r0: undefined | number;
      y1: undefined | number;
    };
    conic: {
      x: undefined | number;
      y: undefined | number;
      startAngle: undefined | number;
    };
    pattern: {
      image: AdvancedStyleParamsType['pattern']['image'];
      repetition: string;
    };
  };
  colorStops: {
    offset: number;
    color: string;
  }[];
}

export interface Extra {
  mutationObserve: boolean;
  monitorProtection: boolean;
  auxiliaryLine: boolean;
  movable: boolean;
}
