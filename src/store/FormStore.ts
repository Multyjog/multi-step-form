import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { IStep, IUser } from "@/interfaces";
import type { Ref } from "vue";

export const useFormStore = defineStore("form", () => {
  const userInfo: Ref<IUser> = ref({
    name: "",
    date: null,
    email: "",
    phone: "",
    card: "",
  });
  // const progress = ref(0);
  const steps = ref([
    { id: "PersonalInfo", progress: 0 },
    { id: "ContactInfo", progress: 35 },
    { id: "PaymentInfo", progress: 65 },
    { id: "Results", progress: 100 },
  ]);
  const currentStep = ref({
    id: "PersonalInfo",
    progress: 0,
  });

  const getCurrentStep = computed(() => {
    return currentStep;
  });
  const getNextStep = computed(() => {
    const indexOfCurrentStep = steps.value.findIndex(
      (el) => el.id === currentStep.value.id
    );
    const nextStep = steps.value[indexOfCurrentStep + 1];
    return nextStep;
  });
  const getPreviousStep = computed(() => {
    const indexOfCurrentStep = steps.value.findIndex(
      (el) => el.id === currentStep.value.id
    );
    const prevStep = steps.value[indexOfCurrentStep - 1];
    return prevStep;
  });
  function addInfo(key: keyof IUser, value: any) {
    userInfo.value[key] = value;
  }

  function switchStep(data: IStep) {
    currentStep.value = data;
  }

  return {
    userInfo,
    currentStep,
    getNextStep,
    getCurrentStep,
    addInfo,
    switchStep,
    getPreviousStep,
  };
});
