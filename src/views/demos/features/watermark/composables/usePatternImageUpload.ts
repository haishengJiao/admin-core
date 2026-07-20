import { ref, onUnmounted } from 'vue';

import type { Advanced } from '../types';
import type { UploadProps, UploadUserFile } from 'element-plus';

export function usePatternImageUpload(advanced: Advanced) {
  const patternFileList = ref<UploadUserFile[]>([]);
  const handlePatternFileChange: UploadProps['onChange'] = async file => {
    patternFileList.value = [file];
    if (!file.raw) {
      return;
    }

    try {
      const imageBitmap = await createImageBitmap(file.raw);
      advanced.params.pattern.image = imageBitmap;
    } catch (error) {
      console.error('图片加载失败:', error);
      handlePatternRemove();
    }
  };
  const handlePatternRemove = () => {
    if (advanced.params.pattern.image instanceof ImageBitmap) {
      advanced.params.pattern.image.close();
    }

    advanced.params.pattern.image = undefined;

    patternFileList.value = [];
  };

  onUnmounted(() => {
    handlePatternRemove();
  });

  return {
    patternFileList,
    handlePatternFileChange,
    handlePatternRemove,
  };
}
