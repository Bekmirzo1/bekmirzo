<script setup lang="ts">
import type { RadioProps } from "../model";
defineProps<RadioProps>();
const isSelected = defineModel<string>();
</script>
<template>
  <label class="option" :class="{ 'selected': isSelected == option.val }">
    <span class="option__icon">
      <i class="option__icon-inner"></i>
    </span>
    <input
      v-model="isSelected"
      type="radio"
      :name="option.name"
      :value="option.val"
      class="option__input" />
    <span class="option__content">{{ option.content }}</span>
  </label>
</template>
<style lang="scss" scoped>
.option {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  $optionWidth: 20;
  $selectedWidth: 7;
  &.selected {
    .option__icon-inner {
      &::after {
        transform: scale(1);
      }
    }
  }

  // .option__icon
  &__icon {
    position: relative;
    width: toRem($optionWidth + 1);
    height: toRem($optionWidth + 1);
    border-radius: 50%;
    font-size: 0;
    line-height: 0;
    margin: toRem(0) toRem(10) toRem(0) toRem(0);
    border: toRem(1) solid $divided2Color;
    // .option__icon-inner
    &-inner {
      display: block;
      position: absolute;
      width: percent($selectedWidth, $optionWidth);
      height: percent($selectedWidth, $optionWidth);
      // top: toRem($selectedWidth);
      // left: toRem($selectedWidth);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      // background-color: blue;
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 50%;
        background-color: red;
        transform: scale(0);
        transition: transform 0.1s ease 0s;
      }
    }
  }
  // .option__input
  &__input {
    position: absolute;
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
  }
  // .option__content
  &__content {
    @extend .text;
    line-height: 1;
    padding: toRem(0) toRem(0) toRem(2) toRem(0);
    height: 100%;
  }
}
</style>
