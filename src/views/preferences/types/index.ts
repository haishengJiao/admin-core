import type { ThemeMode } from '@/store/modules/preferences/types';

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

export type ThemeListItem = {
  label: string;
  value: ThemeMode;
  icon: string;
};

export type ThemeToggleProps = {
  isDark: boolean;
};
