<template>
  <ProgressInfo @goBack="goBack" :value="currentStep.progress" />
  <div class="form">
    <form id="form" @submit.prevent="handleSubmit" class="current-step">
      <component
        @formValid="storeData"
        @formInvalid="disabled = true"
        :is="currentStep.id"
      />
    </form>
    <Button
      type="submit"
      :disabled="disabled"
      form="form"
      label="Submit"
      class="mt-2"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useFormStore } from "@/store/FormStore";

import Button from "primevue/button";

import ProgressInfo from "@/components/ProgressInfo.vue";
import PersonalInfo from "@/components/PersonalInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import PaymentInfo from "@/components/PaymentInfo.vue";
import Results from "@/components/Results.vue";

export default {
  name: "Form-View",
  components: {
    Button,

    ProgressInfo,
    PersonalInfo,
    ContactInfo,
    PaymentInfo,
    Results,
  },
  setup() {
    const store = useFormStore();
    const currentStep = store.getCurrentStep;
    const disabled = ref(true);

    const dataFromCurrentForm = ref({});

    // Fetch Data if it exists
    const storeData = (data: object) => {
      disabled.value = false;
      dataFromCurrentForm.value = data;
    };

    const handleSubmit = () => {
      const keys = Object.keys(dataFromCurrentForm.value);
      keys.forEach((element) => {
        store.addInfo(
          element as keyof object,
          dataFromCurrentForm.value[element as keyof object]
        );
      });
      console.log("data is saved", dataFromCurrentForm.value);
      goNext();
    };
    const goNext = () => {
      const nextStep = store.getNextStep;
      store.switchStep(nextStep);
    };
    const goBack = () => {
      const prevStep = store.getPreviousStep;
      console.log(prevStep);
      store.switchStep(prevStep);
    };

    return {
      goBack,
      disabled,
      storeData,
      currentStep,
      handleSubmit,
      dataFromCurrentForm,
    };
  },
};
</script>

<style lang="scss" scoped>
.current-step {
  max-width: 600px;
}
</style>
