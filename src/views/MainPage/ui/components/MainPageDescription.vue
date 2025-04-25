<script setup lang="ts">
import { animationDefaults, PAGE_ROUTES, productionMode } from "@/shared/config";
import { useAppTransitionStore } from "@/shared/store";
import gsap from "gsap";
import {
  descriptionLinks,
  descriptionSocialLinks,
  useMainPageTransitionStore,
} from "../../model";
const appTransition = useAppTransitionStore();
const mainPageAnimStore = useMainPageTransitionStore();
const elemsAnim = ref([]);
function setRef(el: HTMLElement) {
  elemsAnim.value.push(el);
}
// if (import.meta.client) {
//   gsap.registerPlugin(ScrollTrigger);
// }

function setBeforeAnim() {
  gsap.set(elemsAnim.value, {
    autoAlpha: 0,
    y: "1em",
    filter: "blur(4px)",
  });
}
function descriptionAnimations(): void {
  const timeline = gsap.timeline({
    onComplete() {
      // appTransition.pageTransitionEnd();
    },
  });

  timeline.to(elemsAnim.value, {
    autoAlpha: 1,
    duration: animationDefaults.duration,
    ease: animationDefaults.ease,
    y: "0",
    stagger: function (index, target, list) {
      setTimeout(
        () => {
          mainPageAnimStore.descriptionTransitionEnd();
        },
        list.length * animationDefaults.stagger * 1000,
      );
      return index * animationDefaults.stagger;
    },
    filter: "blur(0px)",
    // scrollTrigger: {
    //   trigger: elemsAnim.value,
    // },
  });
}
if (productionMode) {
  onMounted(() => {

    setBeforeAnim();
  });
  watch(
    () => appTransition.pageTransitionStarted,
    (newVal) => {
      mainPageAnimStore.descriptionTransitionStart();
      console.log(newVal);
      if (newVal == true) {
        descriptionAnimations();
      }
    },
  );
} else {
  onMounted(() => {
    // setBeforeAnim();
    // descriptionAnimations();
  });
}
</script>
<template>
  <div class="desc-main">
    <div class="desc-main__top">
      <h1 :ref="setRef" class="desc-main__title">
        ✅&nbsp;&nbsp;открыт к новым проектам
      </h1>
      <div :ref="setRef" class="desc-main__subtitle">
        обновлено 22 апреля, 2025
      </div>
    </div>
    <div class="desc-main__body">
      <div class="desc-main__content">
        <p :ref="setRef">
          привет, меня зовут Бекмирзо. в настоящее время работаю
          <span class="desc-main__highlighted">front-end разработчиком</span>
          <span class="nowrap">на фрилансе,</span>
          разрабатываю удобные пользовательские системы, проектирую их полный
          <span class="nowrap">жизненный цикл :)</span>
        </p>
      </div>
      <ul class="desc-main__links">
        <li
          v-for="(descriptionLink, index) in descriptionLinks"
          :ref="setRef"
          :key="index">
          <nuxt-link :to="descriptionLink.link">{{
            descriptionLink.name
          }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div class="desc-main__contact contact-desc-main">
      <h3 :ref="setRef" class="contact-desc-main__title">
        быстрый способ связи, а так же git:
      </h3>
      <ul class="contact-desc-main__list">
        <li
          v-for="(descriptionLink, index) in descriptionSocialLinks"
          :ref="setRef"
          :key="index"
          class="contact-desc-main__item">
          <a
            :href="descriptionLink.link"
            class="contact-desc-main__link"
            target="_blank">
            <span
              class="contact-desc-main__link-left"
              v-html="descriptionLink.name"></span>
            <span class="contact-desc-main__link-right">
              {{ descriptionLink.alias }}
            </span>
          </a>
        </li>
      </ul>
      <div :ref="setRef" class="contact-desc-main__bottom">
        <v-external-link
          :href="PAGE_ROUTES.contact.link"
          class="contact-desc-main__bottom-link">
          Перейти к контактам ↗
        </v-external-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/desc.scss";
</style>
