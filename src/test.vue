<template>
  <div>{{ count }}</div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ count: number }>(), {
  count: 0,
});
</script>

<style lang="scss" scoped>
.a {
  width: 100px;
}
</style>
