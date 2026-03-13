<template>
  <el-card class="mt-2 w-full">
    <template #header>
      <div>
        <span>Carousel 走马灯</span>
      </div>
    </template>
    <div class="flex flex-wrap gap-2">
      <el-carousel class="w-full" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-carousel class="w-full" height="200px" :interval="4000" type="card">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 justify="center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="mt-1 flex flex-wrap gap-2">
      <el-carousel :autoplay="false" class="w-full" direction="vertical" height="400px" type="card">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 justify="center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </el-card>
</template>

<style scoped>
@reference "tailwindcss";

.el-carousel__item h3 {
  @apply m-0 text-center leading-50 text-[#475669] opacity-75;
}

.el-carousel__item:nth-child(2n) {
  @apply bg-[#99a9bf];
}

.el-carousel__item:nth-child(2n + 1) {
  @apply bg-[#d3dce6];
}
</style>
