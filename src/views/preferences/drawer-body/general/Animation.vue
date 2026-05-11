<template>
  <SwitchItem v-model="animation">{{ $t('preferences.general.animation.progress') }}</SwitchItem>
</template>

<script lang="ts" setup>
import SwitchItem from '../SwitchItem.vue';

const animation = defineModel<boolean>('animation');
</script>
