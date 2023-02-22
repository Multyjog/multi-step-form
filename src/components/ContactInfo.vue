<template>
  <div>
    <div class="header">Contact info:</div>
    <div class="inputs">
      <InputText v-model="firstName" placeholder="Name" />
      <!-- <InputText v-model="lastName" placeholder="Lastname" />
      <Calendar v-model="dob" placeholder="DOB" /> -->
    </div>
  </div>
</template>

<script lang="ts">
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";

import { ref } from "vue";

export default {
  name: "ContactInfo",
  components: {
    InputText,
    // Calendar,
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const dob = ref(null);
    return {
      firstName,
      lastName,
      dob,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-weight: 600;
  font-size: 28px;
  margin: 0 0 30px;
}
.inputs {
  display: flex;
  flex-direction: column;

  input,
  span {
    margin: 0 10px 10px;
  }
}
</style>
