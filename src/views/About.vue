<template>
  <div class="about-container">
    <h1>关于我们</h1>
    <p>这是一个基于 Vue 3 和 TypeScript 构建的管理系统核心模块。</p>

    <div class="team-section">
      <h2>我们的团队</h2>
      <div class="team-members">
        <div class="team-member">
          <h3>张三</h3>
          <p>前端工程师</p>
        </div>
        <div class="team-member">
          <h3>李四</h3>
          <p>后端工程师</p>
        </div>
        <div class="team-member">
          <h3>王五</h3>
          <p>UI/UX 设计师</p>
        </div>
      </div>
    </div>

    <div class="contact-info">
      <h2>联系我们</h2>
      <p>邮箱: contact@example.com</p>
      <p>电话: +86 123 4567 8900</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// About 页面逻辑
</script>

<style scoped lang="scss">
.about-container {
  padding: 20px;
}

.team-section {
  margin: 30px 0;
}

.team-members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.team-member {
  padding: 20px;
  text-align: center;
  background-color: #f8f9fa;
  border: 1px solid #e1e5e9;
  border-radius: 8px;
}

.contact-info {
  padding: 20px;
  background-color: #e9f7ef;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
}
</style>
