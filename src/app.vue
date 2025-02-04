<script setup lang="ts">
import {
  useLockStatusStore,
  useAppTransitionStore,
  useLoadStore,
} from "@/shared/store";
import { ThemeChoose } from "@/entities/ThemeChoose/";
import { AppAside } from "./widgets/AppAside";
import { AppPreload } from "./app/AppPreload";
import { AppCover } from "./app/AppCover";
// useHead({ htmlAttrs: { lang: "ru" } });
const appTransitionStore = useAppTransitionStore();
const loadStore = useLoadStore();
const pageLockStatus = useLockStatusStore();

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
watch(
  () => appTransitionStore.asideTransitionEnded,
  (newVal) => {
    console.log(newVal);
    if (newVal == true) {
      loadStore.fullLoad();
      appTransitionStore.pageTransitionStart();
    }
  },
  { once: true },
);
loadStore.mainLoad();
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
    <!-- <AppPreload /> -->
    <AppCover />
    <AppAside class="app__aside" />
    <ThemeChoose class="app__theme-choose" @change-theme="changeColorTheme" />
    <div class="app__wrapper">
      <div class="app__content">
        <div class="app__container">
          <NuxtPage class="page" />
        </div>
      </div>
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
    @include overflow-clip;
  }
  // .app__wrapper
  &__wrapper {
    min-height: 100%;
    // display: flex;
    // justify-content: center;
  }
  // .app__content
  &__content {
    padding: toRem(120) toRem(0) toRem(0) toRem(0);
  }
  // .app__container
  &__container {
    display: flex;
    justify-content: center;
  }

  // .app__aside
  &__aside {
  }
  // .app__theme-choose
  &__theme-choose {
    position: fixed;
    top: toRem(40);
    right: toRem(40);
  }
}
.page {
  max-width: toRem(600);
  width: 100%;
}
</style>
