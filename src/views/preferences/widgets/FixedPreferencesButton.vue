<template>
  <Preferences>
    <template #trigger="{ open }">
      <div
        ref="preferencesTriggerRef"
        class="bg-success fixed right-0 h-10 rounded-l-(--el-border-radius-base)"
        :class="{ 'will-change-transform': isDragging }"
        :style="{ transform: `translateY(${y}px)` }"
      >
        <el-button class="h-full! rounded-r-none! p-2.25!" type="primary" @click="() => !isDragging && open()">
          <CoreSvg class="size-5!" name="preferences-set" />
        </el-button>
      </div>
    </template>
  </Preferences>
</template>

<script setup lang="ts">
import { useTemplateRef } from 'vue';

import { useDraggableTrigger } from '../composables';
import Preferences from '../index.vue';

const preferencesTriggerRef = useTemplateRef('preferencesTriggerRef');

const { y, isDragging } = useDraggableTrigger(preferencesTriggerRef);
</script>
