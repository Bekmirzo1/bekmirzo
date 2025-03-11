<script setup lang="ts">
import { productionMode, SOCIAL_LINKS } from "@/shared/config";
import { useAppTransitionStore } from "@/shared/store";
import gsap from "gsap";
const appTransition = useAppTransitionStore();
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
      appTransition.pageTransitionEnd();
    },
  });
  
  timeline.to(elemsAnim.value, {
    autoAlpha: 1,
    duration: 0.4,
    ease: "sine.inOut",
    y: "0",
    stagger: 0.03,
    filter: "blur(0px)",
    // scrollTrigger: {
    //   trigger: elemsAnim.value,
    // },
  });
}
if (productionMode) {
  onMounted(() => {
    console.log(elemsAnim.value);

    setBeforeAnim();
  });
  watch(
    () => appTransition.pageTransitionStarted,
    (newVal) => {
      console.log(newVal);
      if (newVal == true) {
        descriptionAnimations();
      }
    },
  );
} else {
  // onMounted(() => {
  //   descriptionAnimations();
  // });
}
</script>
<template>
  <div class="desc-main">
    <div class="desc-main__top">
      <div class="desc-main__logo">
        <div class="desc-main__logo-image">
          <img src="@/shared/assets/images/connect.jpg" alt="" />
        </div>
      </div>
      <div class="desc-main__row">
        <h1 :ref="setRef" class="desc-main__row-title">
          открыт к сотрудничеству →
          <a :href="SOCIAL_LINKS.telegram" target="_blank"
            >написать в telegram 📲
          </a>
        </h1>
        <div :ref="setRef" class="desc-main__row-right">
          <a
            :href="SOCIAL_LINKS.telegram"
            target="_blank"
            class="desc-main__row-link">
            @bek_azim
          </a>
        </div>
      </div>
    </div>
    <div class="desc-main__body">
      <div class="desc-main__content">
        <p :ref="setRef">
          Привет, меня зовут Бекмирзо. <br />
          в настоящее время работаю
          <span class="desc-main__highlighted">front-end разработчиком</span>
          на фрилансе :)
        </p>
        <p :ref="setRef">
          ищу эффективные и привлекательные решения в области веб-разработки.
          <br />
          разрабатываю удобные пользовательские системы, проектирую их полный
          <span class="nowrap">жизненный цикл.</span>
        </p>
      </div>
      <div :ref="setRef" class="desc-main__bottom">
        <v-external-link />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/desc.scss";
</style>
