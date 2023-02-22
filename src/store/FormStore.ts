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
    billingName: "",
  });
  const initialState = { ...userInfo.value };

  const steps = ref([
    { id: "PersonalInfo", progress: 5 },
    { id: "ContactInfo", progress: 35 },
    { id: "PaymentInfo", progress: 65 },
    { id: "Results", progress: 100 },
  ]);
  const currentStep = ref({
    id: "PersonalInfo",
    progress: 5,
  });

  // GETTERS
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
  const getFilledData = computed(() => {
    return userInfo.value;
  });

  // MUTATIONS
  function addInfo(key: keyof IUser, data: string) {
    userInfo.value[key] = data;
  }
  function switchStep(data: IStep) {
    currentStep.value = data;
  }
  function restart() {
    userInfo.value = initialState;
    switchStep({
      id: "PersonalInfo",
      progress: 5,
    });
  }

  return {
    userInfo,
    currentStep,

    getFilledData,
    getNextStep,
    getCurrentStep,
    getPreviousStep,

    addInfo,
    switchStep,
    restart,
  };
});
