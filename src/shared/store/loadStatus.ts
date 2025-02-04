import { defineStore } from "pinia";

export const useLoadStore = defineStore("load-status", () => {
  const loaded = ref(false);
  const fullLoaded = ref(false);
  function mainLoad() {
    loaded.value = true;
  }
  function fullLoad() {
    fullLoaded.value = true;
  }
  return { loaded, mainLoad, fullLoaded, fullLoad };
});
