import { ref, onUnmounted } from 'vue';

import type { Image } from '../types';
import type { UploadProps, UploadUserFile } from 'element-plus';

export function useImageUpload(image: Image) {
  const fileList = ref<UploadUserFile[]>([]);
  const handleFileChange: UploadProps['onChange'] = file => {
    handleRemove();

    fileList.value = [file];
    if (file.url) {
      image.image = file.url;
    } else if (file.raw) {
      const url = URL.createObjectURL(file.raw);
      image.image = url;
    }
  };
  const handleRemove = () => {
    if (image.image) URL.revokeObjectURL(image.image);
    image.image = '';
    fileList.value = [];
  };

  onUnmounted(() => {
    handleRemove();
  });

  return {
    fileList,
    handleFileChange,
    handleRemove,
  };
}
