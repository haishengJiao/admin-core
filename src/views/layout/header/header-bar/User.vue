<template>
  <el-popover
    :offset="4"
    placement="bottom-end"
    popper-class="p-0! pb-1! rounded-lg! w-auto! min-w-60! border! border-solid! border-border!"
    :show-arrow="false"
  >
    <template #reference>
      <div class="hover:bg-fill flex cursor-pointer rounded-full p-1.5">
        <el-avatar class="avatar-container size-8!" :src="user.avatar" />
      </div>
    </template>
    <div>
      <div class="flex p-3 text-sm">
        <el-avatar class="avatar-container size-12!" :src="user.avatar" />
        <div class="ml-2 flex-1">
          <div class="text-text-body mb-1 leading-5.5 font-medium">{{ user.username }}</div>
          <div class="text-text-regular text-xs leading-4">{{ user.email }}</div>
        </div>
      </div>
      <div class="bg-border my-1 h-px"></div>
      <div>
        <div
          class="hover:bg-fill hover:text-text-heading text-text-body mx-1 flex h-10 cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-sm select-none"
        >
          <CoreSvg class="mr-2 size-4!" name="login-user" />
          <div>个人中心</div>
        </div>
        <div
          class="hover:bg-fill hover:text-text-heading text-text-body mx-1 flex h-10 cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-sm select-none"
        >
          <CoreSvg class="mr-2 size-4!" name="login-document" />
          <div>文档</div>
        </div>
        <div
          class="hover:bg-fill hover:text-text-heading text-text-body mx-1 flex h-10 cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-sm select-none"
        >
          <CoreSvg class="mr-2 size-4!" name="login-github" />
          <div>GitHub</div>
        </div>
        <div
          class="hover:bg-fill hover:text-text-heading text-text-body mx-1 flex h-10 cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-sm select-none"
        >
          <CoreSvg class="mr-2 size-4!" name="preferences-question" />
          <div>问题 & 帮助</div>
        </div>
      </div>
    </div>
  </el-popover>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia';

import { useUserStore } from '@/store';

const { user } = storeToRefs(useUserStore());
</script>
