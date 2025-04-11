<script setup lang="ts">
import type { CheckBoxProps } from "../model";
defineProps<CheckBoxProps>();
const isSelected = defineModel<boolean>();
</script>
<template>
  <label class="checkbox" :class="{ 'selected': isSelected }">
    <span class="checkbox__icon">
      <i class="checkbox__icon-inner"></i>
    </span>
    <input
      v-model="isSelected"
      type="checkbox"
      :name="checkBox.name"
      :value="checkBox.val"
      class="checkbox__input" />
    <span class="checkbox__content">{{ checkBox.content }}</span>
  </label>
</template>
<style lang="scss" scoped>
.checkbox {
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  $checkboxWidth: 20;
  $selectedWidth: 7;
  &.selected {
    .checkbox__icon {
      &::after {
        // border-color: transparent;
        border-color: $yellowColor;
      }
    }

    .checkbox__icon-inner {
      opacity: 1;
      visibility: visible;
    }
  }

  // .checkbox__icon
  &__icon {
    position: relative;
    width: toRem($checkboxWidth);
    height: toRem($checkboxWidth);
    font-size: 0;
    line-height: 0;
    margin: toRem(0) toRem(10) toRem(0) toRem(0);
    border-radius: toRem(5);
    @include overflow-hidden-strict;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border: toRem(1) solid $divided2Color;
      transition: border-color 0.3s ease 0s;
      border-radius: toRem(5);
    }
    // .checkbox__icon-inner
    &-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      visibility: hidden;
      @include transMultiple(opacity visibility, $trsDur, ease, 0s);
      background: $yellowColor
        url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.90033 10C3.56446 10 3.28458 9.86142 3.06067 9.58427L0.265439 6.07303C0.167931 5.95693 0.0993138 5.84457 0.0595883 5.73595C0.0198628 5.62734 0 5.51498 0 5.39888C0 5.13296 0.0848682 4.91386 0.254605 4.74157C0.427952 4.56554 0.644637 4.47753 0.904659 4.47753C1.19357 4.47753 1.43373 4.59925 1.62514 4.8427L3.87866 7.73595L8.30444 0.483146C8.4164 0.307116 8.53196 0.183521 8.65114 0.11236C8.77393 0.0374532 8.9238 0 9.10076 0C9.36078 0 9.57566 0.0861423 9.7454 0.258427C9.91513 0.430712 10 0.64794 10 0.910112C10 1.00749 9.98375 1.10861 9.95125 1.21348C9.91874 1.31835 9.86818 1.42697 9.79957 1.53933L4.75623 9.54494C4.5576 9.84831 4.2723 10 3.90033 10Z' fill='%23FCFCFC'/%3E%3C/svg%3E%0A")
        center/60% no-repeat;
    }
  }
  // .checkbox__input
  &__input {
    position: absolute;
    width: 0%;
    height: 0%;
    top: 0;
    left: 0;
  }
  // .checkbox__content
  &__content {
    @extend .text;
    line-height: 1;
    padding: toRem(0) toRem(0) toRem(2) toRem(0);
    height: 100%;
    user-select: none;
  }
}
</style>
