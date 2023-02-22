<template>
  <ProgressInfo @goBack="goBack" :value="currentStep.progress" />
  <div v-motion-roll-left>
    <form id="form" @submit.prevent="handleSubmit" class="current-step">
      <component
        v-motion-roll-left
        @formValid="storeData"
        @formInvalid="disabled = true"
        :is="currentStep.id"
      />
      <Button
        v-if="currentStep.id === 'Results'"
        label="Start over"
        @click="restart"
        class="start-over-button"
      />
      <Button
        v-else
        type="submit"
        :disabled="disabled"
        form="form"
        label="Submit"
        class="submit-button"
      />
    </form>
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
    const restart = () => {
      store.restart();
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
      disabled.value = true;
      store.switchStep(nextStep);
    };
    const goBack = () => {
      const prevStep = store.getPreviousStep;
      console.log(prevStep);
      store.switchStep(prevStep);
    };

    return {
      restart,
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
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.submit-button {
  margin-top: 10px;
}
.start-over-button {
  margin-top: 10px;
  background: chocolate;
  border-color: chocolate;
  color: white;
}
.start-over-button:hover,
.start-over-button:active {
  margin-top: 10px;
  background: rgb(185, 92, 26);
  border-color: rgb(185, 92, 26);
  color: white;
}
</style>
