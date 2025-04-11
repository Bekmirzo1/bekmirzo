<script setup lang="ts">
import { PriceForm } from "@/feauters/PriceForm";
</script>
<template>
  <div class="price-calculator">
    <h2 class="price-calculator__title"></h2>
    <PriceForm class="price-calculator__form" />
  </div>
</template>
<style lang="scss" scoped>
@use "./style/_index";
</style>
