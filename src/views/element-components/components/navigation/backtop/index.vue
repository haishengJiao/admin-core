<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Backtop 回到顶部</span>
      </div>
    </template>
    Scroll down to see the bottom-right button.
    <el-backtop :bottom="100" :right="100" target=".main-scrollbar-wrap" />
  </el-card>
</template>
