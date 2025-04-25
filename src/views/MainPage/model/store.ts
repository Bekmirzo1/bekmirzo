import { defineStore } from "pinia";

export const useMainPageTransitionStore = defineStore(
  "main-page-animation",
  () => {
    const descriptionTransition: Ref<boolean> = ref(null);
    function descriptionTransitionStart() {
      descriptionTransition.value = true;
    }
    function descriptionTransitionEnd() {
      descriptionTransition.value = false;
    }
    return {
      descriptionTransition,
      descriptionTransitionStart,
      descriptionTransitionEnd,
    };
  },
);
