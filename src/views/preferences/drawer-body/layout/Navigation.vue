<template>
  <SwitchItem v-model="accordion" :disabled="disabled">
    {{ $t('preferences.layout.navigationMenu.accordion') }}
  </SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

interface Props {
  disabled?: boolean;
}

defineProps<Props>();

const accordion = defineModel<boolean>('accordion');
</script>
