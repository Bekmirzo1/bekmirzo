<script setup lang="ts">
import { VBreadCrumbs } from "@/shared/UI/BreadCrumbs";
defineOptions({
  name: "VTopPage",
});
</script>
<template>
  <div class="top">
    <VBreadCrumbs class="top__breadcrumbs" />
    <div class="top__header">
      <h1 class="top__title">
        <slot> архив <span class="gray2">/ с чего я начинал путь</span> </slot>
      </h1>
      <div class="top__text">
        <slot name="text">первичные сайты + экспериментальные</slot>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.top {
  // .top__breadcrumbs
  &__breadcrumbs {
    margin: toRem(0) toRem(0) toRem(40) toRem(0);
  }
  // .top__header
  &__header {
  }
  // .top__title
  &__title {
    @extend .headline;
    margin: toRem(0) toRem(0) toRem(6) toRem(0);
  }
  // .top__text
  &__text {
    @extend .text3;
    @extend .gray2;
  }
}
</style>
