import { defineStore } from "pinia";

export const useAppTransitionStore = defineStore("app-transition", () => {
  const pageTransitionStarted = ref(false);
  const asideTransitionEnded = ref(false);
  const preloadTransitionEnded = ref(false);
  const coverTransitionStarted = ref(false);
  function pageTransitionStart() {
    pageTransitionStarted.value = true;
  }
  function pageTransitionEnd() {
    pageTransitionStarted.value = false;
  }
  function asideTransitionEnd() {
    asideTransitionEnded.value = true;
  }
  function preloadTransitionEnd() {
    preloadTransitionEnded.value = true;
  }
  function coverTransitionStart() {
    coverTransitionStarted.value = true;
    pageTransitionEnd()
  }
  function coverTransitionEnd() {
    coverTransitionStarted.value = false;
    pageTransitionStart()
  }
  return {
    pageTransitionStarted,
    pageTransitionStart,
    pageTransitionEnd,
    asideTransitionEnded,
    asideTransitionEnd,
    preloadTransitionEnded,
    preloadTransitionEnd,
    coverTransitionStarted,
    coverTransitionStart,
    coverTransitionEnd,
  };
});
