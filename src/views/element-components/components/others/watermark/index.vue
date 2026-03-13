<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Watermark 水印</span>
      </div>
    </template>
    <div class="flex">
      <el-watermark
        class="flex flex-1"
        :content="config.content"
        :font="config.font"
        :gap="config.gap"
        :offset="config.offset"
        :rotate="config.rotate"
        :z-index="config.zIndex"
      >
        <div class="flex-1">
          <h1>Element Plus</h1>
          <h2>A Vue 3 based component library for designers and developers</h2>
        </div>
      </el-watermark>
      <el-form
        class="ml-5 w-94 border-l border-solid border-[#eee] pl-5"
        label-position="top"
        label-width="50px"
        :model="config"
      >
        <el-form-item label="Content">
          <el-input v-model="config.content" />
        </el-form-item>
        <el-form-item label="Color">
          <el-color-picker v-model="config.font.color" show-alpha />
        </el-form-item>
        <el-form-item label="FontSize">
          <el-slider v-model="config.font.fontSize" />
        </el-form-item>
        <el-form-item label="zIndex">
          <el-slider v-model="config.zIndex" />
        </el-form-item>
        <el-form-item label="Rotate">
          <el-slider v-model="config.rotate" :max="180" :min="-180" />
        </el-form-item>
        <el-form-item label="Gap">
          <el-space>
            <el-input-number v-model="config.gap[0]" controls-position="right" />
            <el-input-number v-model="config.gap[1]" controls-position="right" />
          </el-space>
        </el-form-item>
        <el-form-item label="Offset">
          <el-space>
            <el-input-number v-model="config.offset[0]" controls-position="right" placeholder="offsetLeft" />
            <el-input-number v-model="config.offset[1]" controls-position="right" placeholder="offsetTop" />
          </el-space>
        </el-form-item>
      </el-form>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const config = reactive({
  content: 'AI-F10',
  font: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.15)',
  },
  zIndex: -1,
  rotate: -22,
  gap: [100, 100] as [number, number],
  offset: [] as unknown as [number, number],
});
</script>
