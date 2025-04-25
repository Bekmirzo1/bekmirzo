<script setup lang="ts">
import gsap from "gsap";
import { mainPageStackDesc, useMainPageTransitionStore } from "../../model";
import { useAppTransitionStore } from "@/shared/store";
import { animationDefaults, productionMode } from "@/shared/config";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
const appTransition = useAppTransitionStore();
const mainPageAnimStore = useMainPageTransitionStore();
interface Work {
  name: string;
  date: string;
  link: string;
  alias: "kids" | "africa" | "iway";
  image?: string;
}
const main = ref();
const ctxStart = ref();
const ctx = ref();

const titleElem = useTemplateRef("title");
const columnTitleElem = useTemplateRef("column-title");
const columnTextElem = useTemplateRef("column-text");
function animationStatic() {
  ctxStart.value = gsap.context(() => {
    const timeline = gsap.timeline({
      defaults: { ...animationDefaults },
      onComplete() {
        appTransition.pageTransitionEnd();
      },
    });
    timeline.to(
      [titleElem.value, columnTitleElem.value, columnTextElem.value],
      {
        autoAlpha: 1,
        y: 0,
        filter: "blur(0px)",
      },
    );
  });
}
function setOnMounted() {
  gsap.set([titleElem.value, columnTitleElem.value, columnTextElem.value], {
    autoAlpha: 0,
    y: "1em",
    filter: "blur(4px)",
  });
  ctx.value = gsap.context((self) => {
    const boxes = self.selector(".projects-works-main__block");
    boxes.forEach((box) => {
      const item = box.querySelector(".projects-works-main__block-wrapper");
      gsap.set(item, {
        yPercent: 5,
        autoAlpha: 0,
        filter: "blur(10px)",
      });
      gsap.to(item, {
        y: 0,
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.6,
        filter: "blur(0px)",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: box,
          start: "10% 90%",
          // start: "bottom bottom",
          // end: "top 0%",
          // scrub: true,
          // markers: true,
        },
      });
    });
  }, main.value);
}
if (productionMode) {
  onMounted(() => {
    setOnMounted();
  });
  watch(
    () => mainPageAnimStore.descriptionTransition,
    (newVal) => {
      if (newVal == false) {
        animationStatic();
      }
    },
  );
} else {
  // onMounted(() => {
  //   animationStatic();
  //   setOnMounted();
  // });
}
onUnmounted(() => {
  if (ctxStart.value) {
    ctxStart.value.revert();
  }
  if (ctx.value) {
    ctx.value.revert();
  }
});
const projectsList: Work[] = [
  {
    name: "Africa Brut",
    date: "2024",
    link: "https://bekmirzo.com/sites/wine/",
    alias: "africa",
  },
  {
    name: "Best Kids Club",
    date: "2024",
    link: "https://bekmirzo.com/sites/kids/",
    alias: "kids",
  },
] as const;
</script>
<template>
  <div class="works-main">
    <div class="works-main__top">
      <h2 ref="title" class="works-main__top-title"
        >мой stack + работы которые реализовал</h2
      >
      <div class="works-main__top-columns">
        <div
          v-for="(content, index) in mainPageStackDesc"
          :key="index"
          class="works-main__top-column">
          <h3
            ref="column-title"
            class="works-main__top-column-title"
            v-html="content.title"></h3>
          <div ref="column-text" class="works-main__top-column-text">
            {{ content.text }}
          </div>
        </div>
        <!-- <div class="works-main__top-column">
          <h3 ref="column-title" class="works-main__top-column-title">
            технологии&nbsp;&nbsp;📝</h3
          >
          <div ref="column-text" class="works-main__top-column-text">
            то, что я умею, практикую, люблю.
          </div>
        </div>
        <div class="works-main__top-column">
          <h3 ref="column-title" class="works-main__top-column-title">
            [все]Работы 💻
          </h3>
          <div ref="column-text" class="works-main__top-column-text">
            мои креативные веб[сайты].
          </div>
        </div> -->
      </div>
    </div>
    <div ref="main" class="works-main__projects projects-works-main">
      <div
        v-for="(project, index) in projectsList"
        :key="index"
        class="projects-works-main__block">
        <div class="projects-works-main__block-wrapper">
          <a
            :href="project.link"
            class="projects-works-main__item"
            target="_blank">
            <div class="projects-works-main__image">
              <div class="projects-works-main__image-body">
                <template v-if="project.alias == 'africa'">
                  <img
                    src="@/shared/assets/images/projects/africa-brut/main.jpg"
                    :alt="project.name" />
                </template>
                <template v-if="project.alias == 'kids'">
                  <img
                    src="@/shared/assets/images/projects/best-kids-club/main.jpg"
                    :alt="project.name" />
                </template>
              </div>
              <div class="projects-works-main__image-info">
                <h3 class="projects-works-main__name">
                  {{ project.name }}
                </h3>
                <div class="projects-works-main__date">
                  {{ project.date }}
                </div>
              </div>
            </div>
            <div class="projects-works-main__button">
              <button type="button" class="projects-works-main__button-body">
                Смотреть работу
              </button>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@use "../styles/main-works.scss";
</style>
