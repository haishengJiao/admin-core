<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Popover 气泡卡片</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-popover
        content="this is content, this is content, this is content"
        placement="top-start"
        title="Title"
        trigger="hover"
        :width="200"
      >
        <template #reference>
          <el-button>Hover to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        content="this is content, this is content, this is content"
        placement="bottom"
        title="Title"
        trigger="click"
        :width="200"
      >
        <template #reference>
          <el-button>Click to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        content="this is content, this is content, this is content"
        placement="right"
        title="Title"
        trigger="focus"
        :width="200"
      >
        <template #reference>
          <el-button>Focus to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        content="this is content, this is content, this is content"
        title="Title"
        trigger="contextmenu"
        :width="200"
      >
        <template #reference>
          <el-button>contextmenu to activate</el-button>
        </template>
      </el-popover>

      <el-popover
        content="this is content, this is content, this is content"
        placement="bottom"
        title="Title"
        :visible="visible"
        :width="200"
      >
        <template #reference>
          <el-button @click="visible = !visible">Manual to activate</el-button>
        </template>
      </el-popover>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const visible = ref(false);
</script>

<style scoped>
@reference "tailwindcss";

.el-button + .el-button {
  @apply m-0;
}
</style>
