<script setup lang="ts">
import type { LinkProps } from "../models";
interface Props extends LinkProps {
  text?: string;
}
const { text = "Перейти по ссылке" } = defineProps<Props>();
</script>
<template>
  <nuxt-link :to="href" class="show-elem">
    <slot></slot>
    <span class="show-elem__text">
      <span class="show-elem__text-inner">{{ text }}</span>
    </span>
  </nuxt-link>
</template>
<style lang="scss" scoped>
.show-elem {
  position: relative;
  z-index: 1;
  @media (any-hover: hover) {
    transition: all 0.3s ease 0s;
    &:hover {
      .show-elem__text-inner {
        opacity: 1;
        visibility: visible;
        transform: translate(0, 0);
      }
    }
  }
  // .show-elem__text
  &__text {
    @extend .text-consolas2;
    transform: translate(-50%, 0);
    position: absolute;
    bottom: calc(100% + toRem(8));
    left: 50%;
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    display: inline-block;
    // .show-elem__text-inner
    &-inner {
      display: inline-block;
      color: $gray2Color;
      padding: toRem(6) toRem(10);
      border: toRem(1) solid $dividedColor;
      border-radius: toRem(6);
      background-color: $whiteColor;
      box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.122);
      opacity: 0;
      visibility: hidden;
      transform: translate(0, 20%);
      @include transMultiple($optionsAnim, $trsDur, ease, 0s);
    }
  }
}
</style>
