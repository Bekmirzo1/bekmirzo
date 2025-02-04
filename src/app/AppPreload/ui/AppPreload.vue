<script setup lang="ts">
import { useLoadStore, useAppTransitionStore } from "@/shared/store";
import { productionMode } from "@/shared/config";
import gsap from "gsap";
const loadStore = useLoadStore();
const appTransitionStore = useAppTransitionStore();
const preloadElem = useTemplateRef("preload");
const item1Elem = useTemplateRef("item1");
const item2Elem = useTemplateRef("item2");
const item3Elem = useTemplateRef("item3");
if (productionMode) {
  onMounted(() => {
    loadStore.mainLoad();
    const itemsToAnim = [item1Elem.value, item2Elem.value, item3Elem.value];
    gsap
      .timeline({
        defaults: { duration: 0.9, ease: "circ.inOut" },
        // repeat: -1,
        // repeatDelay: 2,
        onComplete() {
          appTransitionStore.preloadTransitionEnd();
        },
      })
      // .set(itemsToAnim, {
      //   transformOrigin: 0,
      // })
      .to(itemsToAnim, {
        scaleY: 1,
        ease: "power1.out",
      })
      .to(item1Elem.value, {
        x: -15,
        // scaleX: 1,
        // // rotateZ: 30,
        // // rotateX: 30,
        // rotateY: 180,
        // repeat: -1,
        // repeatDelay: 1,
        // yoyo: true,
      })
      .to(
        item3Elem.value,
        {
          x: 15,
        },
        "<",
      )
      .to(
        preloadElem.value,
        {
          y: "-100%",
          duration: 1.2,
        },
        ">=0.3",
      );
  });
} else {
  loadStore.mainLoad();
  appTransitionStore.preloadTransitionEnd();
}
</script>
<template>
  <div v-if="productionMode" ref="preload" class="preload">
    <div class="preload__wrapper">
      <div class="preload__body">
        <div class="preload__items">
          <div ref="item1" class="preload__item"></div>
          <div ref="item2" class="preload__item"></div>
          <div ref="item3" class="preload__item"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "sass:math";
.preload {
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: $gray3Color;
  display: flex;
  flex-direction: column;
  // .preload__wrapper
  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1 1 auto;
    width: 100%;
  }
  // .preload__body
  &__body {
  }
  // .preload__items
  &__items {
    position: relative;
    width: toRem(3);
    height: toRem(33);
  }
  // .preload__item
  &__item {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: scaleY(0);
    // transform-origin: center bottom;
    background: $bgColor;
    // &::after {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: toRem(3);
    //   border-radius: toRem(1);
    //   height: 100%;

    //   background: $mainColor;
    // // box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);
    // }
    // &:nth-child(2) {
    //   &::after {
    //     left: toRem(math.div(33, 2) - math.div(3, 2));
    //     // left: 50%;
    //     // transform: translate3d(-50%, 0, 0);
    //   }
    // }
    // &:last-child {
    //   &::after {
    //     left: auto;
    //     right: 0;
    //   }
    // }
  }
}
</style>
