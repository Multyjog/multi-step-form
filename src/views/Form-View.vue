<template>
  <ProgressBar :value="progress" />

  <div class="form">
    <div class="current-step">
      <component @infoFilled="saveData" :is="currentStep.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useFormStore } from "@/store/FormStore";

import ProgressBar from "primevue/progressbar";

import PersonalInfo from "@/components/PersonalInfo.vue";
import ContactInfo from "@/components/ContactInfo.vue";

export default {
  name: "Form-View",
  components: {
    PersonalInfo,
    ProgressBar,
    ContactInfo,
  },
  setup() {
    const store = useFormStore();
    const progress = store.getProgress;
    const currentStep = store.getCurrentStep;
    const saveData = (data: any) => {
      console.log(data);
    };

    return {
      progress,
      currentStep,
      saveData,
    };
  },
};
</script>
q

<style lang="scss" scoped>
// .form {
//   display: flex;
//   justify-content: center;
// }
.current-step {
  max-width: 600px;
}
</style>
