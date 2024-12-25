<script setup lang="ts">
import type { ButtonHTMLAttributes, HTMLAttributes } from "vue";

defineOptions({
  name: "VButton",
});




interface ButtonAttr {
  type?: ButtonHTMLAttributes["type"];
}
withDefaults(defineProps<ButtonAttr>(), {
  type: "button",
});
</script>
<template>
  <button class="button" :type="type">
    <slot>Отправить</slot>
  </button>
</template>
<style lang="scss" scoped>
.button {
  @extend .text;
  display: block;
  width: 100%;
  text-transform: uppercase;
  padding: toRem(16);
  border: toRem(1) solid $mainColor;
}
</style>
