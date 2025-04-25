<script setup lang="ts">
import {
  useLockStatusStore,
  useAppTransitionStore,
  useLoadStore,
} from "@/shared/store";
import { ThemeChoose } from "@/entities/ThemeChoose/";
import { AppCover } from "./app/AppCover";
import { AppAside } from "./widgets/AppAside";
import { AppFooter } from "./widgets/AppFooter";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
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
const appLoaded = ref(false);
onMounted(() => {
  // ScrollTrigger.defaults({ scroller: ".app" });
  if (isDark.value === null) {
    const getCurrentTheme = (): boolean =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (getCurrentTheme()) {
      isDark.value = true;
    } else {
      isDark.value = false;
    }
  }
  appLoaded.value = true;

  // navigator.geolocation.getCurrentPosition( (pos) =>{
  //   console.log(pos, 'dsada');
  // })
});
</script>
<template>
  <div
    class="app"
    :class="{
      'lock': pageLockStatus.locked === true,
      'dark': isDark,
      'light': isDark == false,
      'loaded': appLoaded === true,
    }">
    <!-- <AppPreload /> -->
    <AppCover />
    <AppAside class="app__aside" />
    <ThemeChoose class="app__theme-choose" @change-theme="changeColorTheme" />
    <div class="app__wrapper">
      <div class="app__content">
        <div class="app__container">
          <NuxtPage class="page" />
          <AppFooter />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@use "./shared/assets/scss/style";
#__nuxt {
  // min-height: 100%;
  // display: flex;
  // flex-direction: column;
  // height: 100%;
}
html {
  color-scheme: light;
  &:has(.dark) {
    color-scheme: light dark;
  }
  @supports not selector(:has(a, b)) {
    &.dark {
      color-scheme: light dark;
    }
  }
}
body {
  &:has(.lock) {
    @include overflow-clip;
  }
  @supports not selector(:has(a, b)) {
    .lock & {
      @include overflow-clip;
    }
  }
}
.app {
  flex: 1 1 auto;
  // opacity: 0;
  // visibility: hidden;
  // overflow-y: auto;

  &.loaded {
    opacity: 1;
    visibility: visible;
  }
  // .app__wrapper
  &__wrapper {
    min-height: 100%;
    // display: flex;
    // justify-content: center;
  }
  // .app__content
  &__content {
    display: flex;
    justify-content: center;
    padding: toRem(104) toRem(0) toRem(80) toRem(0);
  }
  // .app__container
  &__container {
    width: 100%;
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
  width: 100%;
}
</style>
