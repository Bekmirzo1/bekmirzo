<script setup lang="ts">
import Slider from "@vueform/slider";
import type { VSliderProps } from "../model";
// import type { VSliderProps } from "../model";
const model = defineModel<number>();
defineProps<VSliderProps>();
</script>
<template>
  <div class="slider-parent">
    <Slider
      v-model="model"
      v-bind="$attrs"
      :tooltips="tooltips"
      :min="min"
      :max="max"
      :lazy="lazy" />
  </div>
</template>
<style lang="scss">
@use "./style.scss";
</style>
