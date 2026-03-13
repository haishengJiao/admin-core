<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Descriptions 描述列表</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-descriptions class="w-full" title="User Info">
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
      <el-radio-group v-model="size">
        <el-radio value="large">Large</el-radio>
        <el-radio value="default">Default</el-radio>
        <el-radio value="small">Small</el-radio>
      </el-radio-group>
      <el-descriptions border class="mr-5 w-full" :column="3" :size="size" title="With border">
        <template #extra>
          <el-button type="primary">Operation</el-button>
        </template>
        <el-descriptions-item>
          <template #label>
            <div class="flex text-center">
              <i-ep-user :style="iconStyle" />
              Username
            </div>
          </template>
          kooriookami
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="text-cente flex">
              <i-ep-iphone :style="iconStyle" />

              Telephone
            </div>
          </template>
          18100000000
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="text-cente flex">
              <i-ep-location :style="iconStyle" />

              Place
            </div>
          </template>
          Suzhou
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="text-cente flex">
              <i-ep-tickets :style="iconStyle" />

              Remarks
            </div>
          </template>
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item>
          <template #label>
            <div class="text-cente flex">
              <i-ep-office-building :style="iconStyle" />

              Address
            </div>
          </template>
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions class="mr-5 w-full" :column="3" :size="size" :style="blockMargin" title="Without border">
        <template #extra>
          <el-button type="primary">Operation</el-button>
        </template>
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions
        border
        class="w-full"
        :column="4"
        direction="vertical"
        :size="size"
        title="Vertical list with border"
      >
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>

      <el-descriptions
        class="w-full"
        :column="4"
        direction="vertical"
        :size="size"
        :style="blockMargin"
        title="Vertical list without border"
      >
        <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
        <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
        <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
        <el-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </el-descriptions-item>
      </el-descriptions>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import type { ComponentSize } from 'element-plus';

const size = ref<ComponentSize>('default');
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  };
  return {
    marginRight: marginMap[size.value as keyof typeof marginMap] || marginMap.default,
  };
});
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  };
  return {
    marginTop: marginMap[size.value as keyof typeof marginMap] || marginMap.default,
  };
});
</script>
