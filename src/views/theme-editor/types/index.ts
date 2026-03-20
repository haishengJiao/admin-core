export interface CssVarItem {
  name: string;
  depended: string[];
  value: string | number;
  originValue: string | number;
  darkOriginValue: string | number;
  id: string;
  cssVar: string;
  desc: string;
  type: string;
  unit: string;
}

export interface ElCssVarItem {
  type: string;
  name: string;
  data: CssVarItem[];
}

export enum DataItemType {
  COLORS = 'colors',
  SIZE = 'size',
  STYLES = 'styles',
  OTHER = 'other',
}

export interface DataItem {
  label: string;
  type: `${DataItemType}`;
  data: ElCssVarItem[];
}
