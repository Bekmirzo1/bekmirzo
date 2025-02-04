<script setup lang="ts">
import { SOCIAL_LINKS } from "../config";
import type { LinkProps } from "@/shared/models";

const { href = SOCIAL_LINKS.github } = defineProps<LinkProps>();
</script>
<template>
  <a :href="href" target="_blank" class="external-link">
    <slot>Смотреть github ↗</slot>
  </a>
</template>
<style lang="scss" scoped>
.external-link {
  display: inline-flex;
  align-items: center;
  font-size: toRem(13);
  letter-spacing: $letterSpacing;
  line-height: percent(17.5, 13);
  &::before {
    content: "";
    display: block;
    transform: translate(0, 10%);
    width: toRem(6);
    height: toRem(6);
    background: $greenColor;
    border-radius: 50%;
    margin: toRem(0) toRem(4) toRem(0) toRem(0);
  }
}
</style>
