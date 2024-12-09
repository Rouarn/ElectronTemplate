<template>
  <div class="about">
    <h1>This is an about page</h1>

    <!-- 引用外部链接 -->
    <RouterLink to="http://woyuxiaji.xyz">http://woyuxiaji.xyz/</RouterLink>
    <!-- 直接显示外部链接 -->
    <iframe
      src="http://woyuxiaji.xyz/"
      width="100%"
      height="600px"
      frameborder="0"
      style="border: none"
    >
    </iframe>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
