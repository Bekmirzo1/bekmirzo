import { defineStore } from "pinia";

export const useLockStatusStore = defineStore("lock-status", () => {
  const locked = ref(false);
  function unLockPage() {
    locked.value = false;
    document.documentElement.classList.remove('lock')
  }
  function lockPage() {
    locked.value = true;
    document.documentElement.classList.add('lock')
  }
  return { locked, lockPage, unLockPage };
});