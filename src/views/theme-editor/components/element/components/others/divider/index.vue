<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Divider 分割线</span>
      </div>
    </template>
    <span>
      I sit at my window this morning where the world like a passer-by stops for a moment, nods to me and goes.
    </span>
    <el-divider />
    <span>There little thoughts are the rustle of leaves; they have their whisper of joy in my mind.</span>
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <el-divider>
      <i-ep-star-filled />
    </el-divider>
    <el-divider content-position="right">Rabindranath Tagore</el-divider>
    <el-divider border-style="dashed" />
    <span>Rain</span>
    <el-divider direction="vertical" />
    <span>Home</span>
    <el-divider border-style="dashed" direction="vertical" />
    <span>Grass</span>
  </el-card>
</template>

<script lang="ts" setup></script>
