<script setup lang="ts">
import { PAGE_ROUTES, productionMode } from "@/shared/config";
import { asideLinks, asideMainRoutes, asideRoutesMore } from "../model";
import { useAppTransitionStore } from "@/shared/store";
import gsap from "gsap";

const appTransitionStore = useAppTransitionStore();

interface AnimationProperty extends GSAPTweenVars {
  visibility?: "visible" | "hidden";
}

const animationList: Ref<AnimationProperty[]> = ref([]);
const countNum = ref(0);
if (productionMode) {
  for (let index = 0; index < 15; index++) {
    // const element = animationList[index];
    animationList.value.push({ opacity: "0", visibility: "hidden" });
  }
} else {
  for (let index = 0; index < 15; index++) {
    animationList.value.push({ opacity: "1", visibility: "visible" });
  }
}

function addCount(num: number = 1): number {
  const newVal = countNum.value + num;
  countNum.value = newVal;
  return newVal;
}
const elemsToAnim = {
  title: 0,
  subtitle: addCount(),
  text: addCount(),
  list: addCount(),
  list2: addCount(asideMainRoutes.length),
  list3: addCount(asideLinks.length),
};
if (productionMode) {
  onMounted(
    () => {
      // watch(
      //   () => appTransitionStore.preloadTransitionEnded,
      //   (newVal) => {
      //     if (newVal) {
      gsap
        .timeline({
          defaults: { duration: 0.3, ease: "power1.inOut" },
          onComplete() {
            appTransitionStore.asideTransitionEnd();
          },
        })
        .to(animationList.value, {
          opacity: 1,
          stagger: {
            each: 0.03,
          },
          onStart() {
            gsap.set(animationList.value, {
              visibility: "visible",
            });
          },
        });
    },
    // },
    // { once: true },
  );
  // });
  // } else {
  // appTransitionStore.asideTransitionEnd();
}
</script>
<template>
  <div class="aside">
    <div class="aside__body">
      <div class="aside__top">
        <div class="aside__logo">
          <nuxt-link :to="PAGE_ROUTES.home.link" class="aside__logo-image">
            <img src="@/shared/assets/images/avatar.jpg" alt="Аватар" />
          </nuxt-link>
        </div>
        <div
          class="aside__name"
          :style="{
            opacity: animationList[elemsToAnim.title].opacity,
            visibility: animationList[elemsToAnim.title].visibility,
          }">
          Азимов Бекмирзо
        </div>
        <div
          class="aside__activity"
          :style="{
            opacity: animationList[elemsToAnim.subtitle].opacity,
            visibility: animationList[elemsToAnim.subtitle].visibility,
          }">
          Front-end разработчик, фриланс
        </div>
        <div
          class="aside__text"
          :style="{
            opacity: animationList[elemsToAnim.text].opacity,
            visibility: animationList[elemsToAnim.text].visibility,
          }">
          22 года, родился в Самарканде, Узбекистан.
        </div>
      </div>
      <div class="aside__links links-aside">
        <div class="links-aside__blocks">
          <!-- links-aside__block 1 -->
          <div class="links-aside__block">
            <ul class="links-aside__list links-aside__pages">
              <li
                v-for="(asideRoute, index) in asideMainRoutes"
                :key="index"
                :style="{
                  opacity: animationList[elemsToAnim.list + index].opacity,
                  visibility:
                    animationList[elemsToAnim.list + index].visibility,
                }"
                class="links-aside__item">
                <nuxt-link :to="asideRoute.route" class="links-aside__link">
                  <span class="links-aside__link-text">
                    {{ asideRoute.name }}
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </div>
          <!-- links-aside__block 2 -->
          <div class="links-aside__block">
            <ul class="links-aside__list links-aside__pages">
              <li
                v-for="(asideLink, index) in asideLinks"
                :key="index"
                :style="{
                  opacity: animationList[elemsToAnim.list2 + index].opacity,
                  visibility:
                    animationList[elemsToAnim.list2 + index].visibility,
                }"
                class="links-aside__item">
                <a
                  :href="asideLink.link"
                  class="links-aside__link"
                  target="_blank">
                  <span class="links-aside__link-text">
                    {{ asideLink.name }}
                  </span>
                  <span class="links-aside__link-icon"> ↗️ </span>
                </a>
              </li>
            </ul>
          </div>
          <!-- links-aside__block 3 -->
          <div class="links-aside__block">
            <ul class="links-aside__list links-aside__pages">
              <li
                v-for="(asideRoute2, index) in asideRoutesMore"
                :key="index"
                :style="{
                  opacity: animationList[elemsToAnim.list3 + index].opacity,
                  visibility:
                    animationList[elemsToAnim.list3 + index].visibility,
                }"
                class="links-aside__item">
                <nuxt-link :to="asideRoute2.route" class="links-aside__link">
                  <span class="links-aside__link-text">
                    {{ asideRoute2.name }}
                  </span>
                  <span class="links-aside__link-icon">
                    <template
                      v-if="asideRoute2.route === PAGE_ROUTES.about.link">
                      📋
                    </template>
                    <template
                      v-if="asideRoute2.route === PAGE_ROUTES.calculator.link">
                      🧮
                    </template>
                  </span>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "./style.scss";
</style>
