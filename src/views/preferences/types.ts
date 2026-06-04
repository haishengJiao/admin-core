import type { ThemeMode, ColorPrimaryType } from '@/store/preferences/types';

export type DrawerHeaderEmits = {
  close: [];
};

export type BlockProps = {
  title: string;
};

export type SwitchItemProps = {
  tip?: string;
  disabled?: boolean;
};

export type SelectOptions = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectItemProps = {
  tip?: string;
  disabled?: boolean;
  placeholder?: string;
  items?: SelectOptions[];
};

export type InputNumberItemProps = {
  tip?: string;
  disabled?: boolean;
  placeholder?: string;
};

export type ColorPickerItemProps = {
  tip?: string;
  disabled?: boolean;
  predefine?: string[];
};

export type ThemeListItem = {
  label: string;
  value: ThemeMode;
  icon: string;
};

export type ThemeToggleProps = {
  isDark: boolean;
};

export type colorPrimaryItem = {
  color: string;
  type: ColorPrimaryType;
  name: string;
};
