<script setup lang="ts">
import { PageLockStore } from "@/shared/store";
import { ThemeChoose } from "@/entities/ThemeChoose/";
import { AppAside } from "./widgets/AppAside";
useHead({ htmlAttrs: { lang: "ru" } });

const pageLockStatus = PageLockStore();
const themeDefault: Ref<undefined | "dark" | "light"> = useCookie("theme");
const isDark: Ref<boolean | null> = ref(null);
if (themeDefault.value == "dark") {
  isDark.value = true;
} else if (themeDefault.value == "light") {
  isDark.value = false;
}
function changeColorTheme(): void {
  if (isDark.value !== null) {
    isDark.value = !isDark.value;
    if (themeDefault.value) {
      themeDefault.value = themeDefault.value == "light" ? "dark" : "light";
    } else if (themeDefault.value === undefined) {
      themeDefault.value = isDark.value ? "dark" : "light";
    }
  }
}
onMounted(() => {
  if (isDark.value === null) {
    const getCurrentTheme = (): boolean =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (getCurrentTheme()) {
      isDark.value = true;
    } else {
      isDark.value = false;
    }
  }
});
</script>
<template>
  <div
    class="app"
    :class="{
      'locked': pageLockStatus.locked === true,
      'dark': isDark,
      'light': isDark == false,
    }">
    <div class="app__wrapper">
      <!-- <ThemeChoose @change-theme="changeColorTheme" /> -->
      <AppAside></AppAside>
      <NuxtPage class="page" />
    </div>
  </div>
</template>
<style lang="scss">
@use "./shared/assets/scss/style";
#__nuxt {
  // min-height: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.app {
  flex: 1 1 auto;
  overflow-y: auto;
  &.locked {
    overflow: hidden;
  }
  // .app__wrapper
  &__wrapper {
    min-height: 100%;
  }
}
</style>
