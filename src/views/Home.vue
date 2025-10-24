<template>
  <div class="home-container">
    <h1>首页</h1>
    <p>欢迎来到管理系统首页</p>
    <div class="features">
      <div class="feature-card">
        <h3>功能一</h3>
        <p>这是系统的核心功能之一</p>
      </div>
      <div class="feature-card">
        <h3>功能二</h3>
        <p>这是系统的另一个重要功能</p>
      </div>
      <div class="feature-card">
        <h3>功能三</h3>
        <p>更多功能等待您来探索</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home 页面逻辑
</script>

<style scoped lang="scss">
.home-container {
  padding: 20px;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
}

.feature-card {
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
}

.feature-card h3 {
  margin-bottom: 10px;
  color: #495057;
}
</style>
