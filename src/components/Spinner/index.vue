<template>
  <div
    class="absolute top-0 left-0 z-2 flex size-full items-center justify-center backdrop-blur-xs transition-all duration-500"
    :class="{ 'invisible opacity-0': !showSpinner }"
    @transitionend="handleTransitionEnd"
  >
    <div
      v-if="renderSpinner"
      class="loader after:bg-primary before:border-primary relative box-content before:absolute before:top-0 before:left-[50%] before:box-content before:w-0 before:border-r-24 before:border-l-24 before:content-[''] after:absolute after:bottom-0 after:left-0 after:box-content after:content-['']"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

interface Props {
  /**
   * 是否显示 loading
   */
  spinning?: boolean;
  /**
   * 最小加载时间
   */
  minLoadingTime?: number;
}

const { spinning = false, minLoadingTime = 100 } = defineProps<Props>();

const showSpinner = ref(false);
const renderSpinner = ref(false);
const timer = ref<ReturnType<typeof setTimeout>>();

watch(
  () => spinning,
  newVal => {
    if (!newVal) {
      showSpinner.value = false;
      clearTimeout(timer.value);
      return;
    }

    timer.value = setTimeout(() => {
      showSpinner.value = true;
      renderSpinner.value = true;
    }, minLoadingTime);
  },
  { immediate: true },
);

const handleTransitionEnd = () => {
  if (!showSpinner.value) {
    renderSpinner.value = false;
  }
};
</script>

<style scoped>
.loader {
  width: 48px;
  height: 48px;
}

.loader::before {
  height: 24px;
  transform: translateX(-50%);
  animation: loader-split-x 1s linear infinite alternate;
}

.loader::after {
  width: 48px;
  height: 24px;
  animation: loader-move-y 1s linear infinite alternate;
}

@keyframes loader-split-x {
  0% {
    width: 0;
    transform: translate(-50%, 0);
  }

  33% {
    width: 100%;
    transform: translate(-50%, 0);
  }

  66% {
    width: 100%;
    transform: translate(-50%, 24px);
  }

  100% {
    width: 0;
    transform: translate(-50%, 24px);
  }
}

@keyframes loader-move-y {
  0%,
  33% {
    transform: translateY(0);
  }

  66%,
  100% {
    transform: translateY(-24px);
  }
}
</style>
