<template>
  <SwitchItem v-model="accordion">{{ $t('preferences.layout.navigationMenu.accordion') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const accordion = defineModel<boolean>('accordion');
</script>
