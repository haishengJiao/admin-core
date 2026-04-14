<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Upload 上传</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-upload
        v-model:file-list="fileList"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        :before-remove="beforeRemove"
        class="upload-demo"
        :limit="3"
        multiple
        :on-exceed="handleExceed"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
      >
        <el-button type="primary">Click to upload</el-button>
        <template #tip>
          <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
        </template>
      </el-upload>
    </div>

    <div class="mt-1 flex flex-wrap gap-2">
      <el-upload
        v-model:file-list="fileList1"
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i-ep-plus />
      </el-upload>

      <el-dialog v-model="dialogVisible">
        <img alt="Preview Image" class="w-full" :src="dialogImageUrl" />
      </el-dialog>
    </div>

    <div class="mt-1 flex flex-wrap gap-2">
      <el-upload
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        class="upload-demo"
        drag
        multiple
      >
        <div class="flex flex-col items-center">
          <i-ep-upload-filled />
          <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
        </div>
        <template #tip>
          <div class="el-upload__tip">jpg/png files with a size less than 500kb</div>
        </template>
      </el-upload>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { ElMessage, ElMessageBox } from 'element-plus';
import { ref } from 'vue';

import type { UploadProps, UploadUserFile } from 'element-plus';

const fileList = ref<UploadUserFile[]>([
  {
    name: 'element-plus-logo.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
  {
    name: 'element-plus-logo2.svg',
    url: 'https://element-plus.org/images/element-plus-logo.svg',
  },
]);

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  // eslint-disable-next-line no-console
  console.log(file, uploadFiles);
};

const handlePreview: UploadProps['onPreview'] = uploadFile => {
  // eslint-disable-next-line no-console
  console.log(uploadFile);
};

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`,
  );
};

const beforeRemove: UploadProps['beforeRemove'] = uploadFile => {
  return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
    () => true,
    () => false,
  );
};

const fileList1 = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'plant-1.jpeg',
    url: 'https://picsum.photos/360/360?random=1',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'plant-2.jpeg',
    url: 'https://picsum.photos/360/360?random=2',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'figure-1.jpeg',
    url: 'https://picsum.photos/360/360?random=3',
  },
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
  },
  {
    name: 'figure-2.jpeg',
    url: 'https://picsum.photos/360/360?random=4',
  },
]);

const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePictureCardPreview: UploadProps['onPreview'] = uploadFile => {
  dialogImageUrl.value = uploadFile.url!;
  dialogVisible.value = true;
};
</script>
