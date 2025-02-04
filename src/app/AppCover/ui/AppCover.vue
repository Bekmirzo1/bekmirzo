<script setup lang="ts">
import gsap from "gsap";
import { useAppTransitionStore, useLoadStore } from "@/shared/store";
import { productionMode } from "@/shared/config";
const appTransitionStore = useAppTransitionStore();
const loadStore = useLoadStore();
const appCoverElem = useTemplateRef("app-cover");
const preloadCoverDuration = 0.4;
if (productionMode) {
  const router = useRouter();
  router.beforeEach((to, form, next) => {
    if (appTransitionStore.coverTransitionStarted === true) {
      next();
    }
    if (appTransitionStore.coverTransitionStarted === false) {
      scrollTo({ top: 0 });
      appTransitionStore.coverTransitionStart();
      setTimeout(() => {
        next();
      }, preloadCoverDuration * 1000);
    }
  });
  watch(
    () => appTransitionStore.coverTransitionStarted,
    (newVal) => {
      if (newVal && loadStore.fullLoaded) {
        gsap
          .timeline({
            defaults: { duration: preloadCoverDuration, ease: "sine.inOut" },
            onComplete() {
              appTransitionStore.coverTransitionEnd();
            },
          })
          .set(appCoverElem.value, {
            transformOrigin: "bottom",
            yPercent: 0,
            scaleY: 0,
          })
          .to(appCoverElem.value, {
            scaleY: 1,
          })
          .to(appCoverElem.value, {
            yPercent: -100,
            ease: "power3.inOut",
          });
        // .set(appCoverElem.value, {
        //   transformOrigin: "bottom",
        // })
        // .to(appCoverElem.value, {
        //   scaleY: 0,
        //   ease: 'power3.inOut'
        // });
      }
    },
  );
}
</script>
<template>
  <div
    class="app-cover"
    :class="{ 'anim': appTransitionStore.coverTransitionStarted }">
    <div ref="app-cover" class="app-cover__wrapper"></div>
  </div>
</template>
<style lang="scss" scoped>
.app-cover {
  position: fixed;
  z-index: 998;
  width: 100%;
  height: 100%;
  pointer-events: none;
  &.anim {
    pointer-events: auto;
  }
  // .app-cover__wrapper
  &__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: $bgQuaternaryColor;
    transform: scale(1, 0);
  }
}
</style>
