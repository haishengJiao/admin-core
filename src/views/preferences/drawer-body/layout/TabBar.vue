<template>
  <SwitchItem v-model="enable" :disabled="disabled">{{ $t('preferences.layout.tabbar.enable') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

interface Props {
  disabled?: boolean;
}

defineProps<Props>();

const enable = defineModel<boolean>('enable');
</script>
