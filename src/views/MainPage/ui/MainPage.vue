<script setup lang="ts">
import MainPageDescription from "./components/MainPageDescription.vue";
import MainPageWorks from "./components/MainPageWorks.vue";
useHead({
  title: "Главная",
});
// useSeoMeta({
//   title: 'My Amazing Site',
//   ogTitle: 'Фронтенд разработка сайта',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// });


</script>
<template>
  <div class="main">
    <div class="main__content">
      <MainPageDescription class="main__desc"/>
      <MainPageWorks class="main__works"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use './styles/index';
</style>
