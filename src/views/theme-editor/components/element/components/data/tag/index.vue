<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Tag 标签</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-tag type="primary">Tag 1</el-tag>
      <el-tag type="success">Tag 2</el-tag>
      <el-tag type="info">Tag 3</el-tag>
      <el-tag type="warning">Tag 4</el-tag>
      <el-tag type="danger">Tag 5</el-tag>
      <el-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
        {{ tag.name }}
      </el-tag>
      <el-tag v-for="item in items" :key="item.label" effect="dark" round :type="item.type">
        {{ item.label }}
      </el-tag>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import type { TagProps } from 'element-plus';

type Item = { type: TagProps['type']; label: string };
type Tag = { name: string; type: TagProps['type'] };

const items = ref<Array<Item>>([
  { type: 'primary', label: 'Tag 1' },
  { type: 'success', label: 'Tag 2' },
  { type: 'info', label: 'Tag 3' },
  { type: 'warning', label: 'Tag 4' },
  { type: 'danger', label: 'Tag 5' },
]);
const tags = ref<Array<Tag>>([
  { name: 'Tag 1', type: 'primary' },
  { name: 'Tag 2', type: 'success' },
  { name: 'Tag 3', type: 'info' },
  { name: 'Tag 4', type: 'warning' },
  { name: 'Tag 5', type: 'danger' },
]);
</script>
