<script setup lang="ts">
import type { InputTypeHTMLAttribute } from "vue";

defineOptions({
  name: "VInput",
});
const model = defineModel<string | number>();
interface Props {
  error?: null | boolean;
  type?: InputTypeHTMLAttribute | "textarea";
  placeholder?: string;
}

const { error = null } = defineProps<Props>();
// withDefaults(defineProps<Props>(), {
//   error: null,
//   type: false,
//   placeholder: "",
// });
</script>
<template>
  <textarea
    v-if="type == 'textarea'"
    v-model="model"
    v-bind="$attrs"
    autocomplete="off"
    class="input"
    :placeholder="placeholder"></textarea>
  <input
    v-else
    v-model="model"
    v-bind="$attrs"
    autocomplete="off"
    :type="type"
    class="input"
    :class="{
      _formerror: error,
    }"
    :placeholder="placeholder" />
</template>
<style lang="scss" scoped>
.input {
  @extend .text;
  width: 100%;
  height: 100%;
  display: block;
  // padding: toRem(12) toRem(8);
  background-color: transparent;
  // border: toRem(1) solid $mainColor;
  &:focus {
    &::placeholder {
      visibility: hidden;
      opacity: 0;
    }
  }
  // &::placeholder {
  //   opacity: 0.5;
  // }
}
textarea.input {
  resize: none;
  min-height: toRem(150);
}
</style>
