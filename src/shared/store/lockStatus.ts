import { defineStore } from "pinia";

export const useLockStatusStore = defineStore("lock-status", () => {
  const locked = ref(false);
  function unLockPage() {
    locked.value = false;
  }
  function lockPage() {
    locked.value = true;
  }
  return { locked, lockPage, unLockPage };
});