<script setup lang="ts">
import { SOCIAL_LINKS } from "../config";
import type { LinkProps } from "@/shared/models";
interface Props extends LinkProps {
  target?: "_blank" | "_self";
}
const { href = SOCIAL_LINKS.github } = defineProps<Props>();
</script>
<template>
  <a :href="href" :target="target" class="external-link">
    <slot>Смотреть github ↗</slot>
  </a>
</template>
<style lang="scss" scoped>
.external-link {
  display: inline-flex;
  align-items: center;
  &::before {
    content: "";
    display: block;
    // transform: translate(0, 10%);
    width: em(7, 12.5);
    height: em(7, 12.5);
    background: $greenColor;
    border-radius: 50%;
    margin: toRem(0) em(3, 12.5) toRem(0) toRem(0);
  }
}
</style>
