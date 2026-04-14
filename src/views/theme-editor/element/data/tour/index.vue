<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Tour 漫游式引导</span>
      </div>
    </template>
    <el-button type="primary" @click="open = true">Begin Tour</el-button>

    <el-divider />

    <el-space>
      <el-button ref="ref1">Upload</el-button>
      <el-button ref="ref2" type="primary">Save</el-button>
      <el-button ref="ref3">
        <template #icon><i-ep-more-filled /></template>
      </el-button>
    </el-space>

    <el-tour v-model="open">
      <el-tour-step :target="ref1?.$el" title="Upload File">
        <img alt="tour.png" class="w-60" src="https://element-plus.org/images/element-plus-logo.svg" />
        <div>Put you files here.</div>
      </el-tour-step>
      <el-tour-step description="Save your changes" :target="ref2?.$el" title="Save" />
      <el-tour-step description="Click to see other" :target="ref3?.$el" title="Other Actions" />
    </el-tour>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { ButtonInstance } from 'element-plus';

const ref1 = ref<ButtonInstance>();
const ref2 = ref<ButtonInstance>();
const ref3 = ref<ButtonInstance>();

const open = ref(false);
</script>
