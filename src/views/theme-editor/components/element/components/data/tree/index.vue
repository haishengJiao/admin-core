<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Tree 树形控件</span>
      </div>
    </template>
    <el-tree
      :allow-drag="allowDrag"
      :allow-drop="allowDrop"
      class="max-w-150"
      :data="data"
      default-expand-all
      draggable
      node-key="id"
    />
  </el-card>
</template>

<script lang="ts" setup>
import type { AllowDropType, RenderContentContext } from 'element-plus';

type Node = RenderContentContext['node'];

const allowDrop = (_draggingNode: Node, dropNode: Node, type: AllowDropType) => {
  if (dropNode.data.label === 'Level two 3-1') {
    return type !== 'inner';
  } else {
    return true;
  }
};

const allowDrag = (draggingNode: Node) => {
  return !draggingNode.data.label.includes('Level three 3-1-1');
};

const data = [
  {
    label: 'Level one 1',
    children: [
      {
        label: 'Level two 1-1',
        children: [
          {
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 2',
    children: [
      {
        label: 'Level two 2-1',
        children: [
          {
            label: 'Level three 2-1-1',
          },
        ],
      },
      {
        label: 'Level two 2-2',
        children: [
          {
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    label: 'Level one 3',
    children: [
      {
        label: 'Level two 3-1',
        children: [
          {
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        label: 'Level two 3-2',
        children: [
          {
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
];
</script>
