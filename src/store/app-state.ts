export const useAppStateStore = defineStore('appState', () => {
  const isInitializing = ref(false);

  return {
    isInitializing,
  };
});
