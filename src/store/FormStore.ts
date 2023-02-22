import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useFormStore = defineStore("form", () => {
  const userInfo = ref({
    name: "",
    email: "",
    dob: null,
  });
  const progress = ref(33);
  const currentStep = ref({
    id: "PersonalInfo",
    step: 1,
  });

  const getProgress = computed(() => {
    return progress;
  });
  const getCurrentStep = computed(() => {
    return currentStep;
  });
  // function increment() {
  //   count.value++;
  // }

  return { progress, currentStep, getProgress, getCurrentStep };
});
