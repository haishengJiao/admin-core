<template>
  <el-upload
    accept="image/*"
    action="#"
    :auto-upload="false"
    :disabled="disabled"
    :file-list="fileList"
    list-type="picture-card"
    @change="handleChange"
    @preview="handlePreview"
    @remove="handleRemove"
  >
    <i-ep-plus />
  </el-upload>

  <el-dialog v-model="dialogVisible">
    <img class="w-full" :src="dialogImageUrl" />
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import type { UploadProps, UploadUserFile } from 'element-plus';

interface Props {
  disabled?: boolean;
}

const { disabled = false } = defineProps<Props>();
const emits = defineEmits<{
  change: Parameters<NonNullable<UploadProps['onChange']>>;
  remove: Parameters<NonNullable<UploadProps['onRemove']>>;
}>();
const fileList = defineModel<UploadUserFile[]>('fileList');

const handleChange: UploadProps['onChange'] = (...args) => {
  emits('change', ...args);
};

const handleRemove: UploadProps['onRemove'] = (...args) => {
  emits('remove', ...args);
};

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePreview: UploadProps['onPreview'] = uploadFile => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
</script>
