<template>
  <div class="workplace-container">
    workplace-container 插件\排序\提示
    <textarea id="" v-disabled-clipboard class="flex items-center bg-amber-400 align-middle text-[red]" name=""></textarea>

    <h1>Hello world!</h1>
    <div class="animate-bounce bg-amber-400 text-2xl">🏀 弹跳</div>
    <button class="button">
      <span class="icon">🎯</span>
      带图标的按钮
    </button>

    <article class="prose">
      <h1>文章标题</h1>
      <p>这是一个段落...</p>
      <ul>
        <li>列表项1</li>
        <li>列表项2</li>
      </ul>
    </article>

    <article class="md:prose-base lg:prose-lg prose prose-sm">
      <h1>响应式排版</h1>
      <p>在不同屏幕尺寸下有不同的字体大小。</p>
    </article>
  </div>
</template>

<script setup lang="ts"></script>
