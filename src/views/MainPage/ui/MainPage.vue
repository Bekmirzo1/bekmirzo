<script setup lang="ts">
import MainPageDescription from "./components/MainPageDescription.vue";
import MainPageWorks from "./components/MainPageWorks.vue";

useHead({
  title: "Главная",
});


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
