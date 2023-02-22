<template>
  <div>
    <div class="header">Personal information:</div>
    <form @submit.prevent="handleSubmit(!v$.$invalid)" class="inputs">
      <div class="field">
        <div class="p-float-label">
          <InputText
            id="name"
            v-model="v$.name.$model"
            :class="{ 'p-invalid': v$.name.$invalid && submitted }"
          />
          <label
            for="name"
            :class="{ 'p-error': v$.name.$invalid && submitted }"
            >Name*</label
          >
        </div>
        <small
          v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response"
          class="p-error"
          >{{ v$.name.required.$message.replace("Value", "Name") }}</small
        >
      </div>
      <div class="field">
        <div class="p-float-label">
          <InputText
            id="email"
            v-model="v$.email.$model"
            :class="{ 'p-invalid': v$.email.$invalid && submitted }"
            aria-describedby="email-error"
          />
          <label
            for="email"
            :class="{ 'p-error': v$.email.$invalid && submitted }"
            >Email*</label
          >
        </div>
        <span v-if="v$.email.$error && submitted">
          <span
            id="email-error"
            v-for="(error, index) of v$.email.$errors"
            :key="index"
          >
            <small class="p-error">{{ error.$message }}</small>
          </span>
        </span>
        <small
          v-else-if="
            (v$.email.$invalid && submitted) || v$.email.$pending.$response
          "
          class="p-error"
          >{{ v$.email.required.$message.replace("Value", "Email") }}</small
        >
      </div>
      <div class="field">
        <div class="p-float-label">
          <Calendar id="date" v-model="v$.date.$model" />
          <label for="date">Birthday*</label>
        </div>
        <small
          v-if="(v$.date.$invalid && submitted) || v$.date.$pending.$response"
          class="p-error"
          >{{ v$.date.required.$message.replace("Value", "Birthday") }}</small
        >
      </div>
      <Button type="submit" label="Submit" class="mt-2" />
    </form>
  </div>
</template>

<script lang="ts">
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";
import Button from "primevue/button";

import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "PersonalInfo",
  emits: ["infoFilled"],
  components: {
    InputText,
    Calendar,
    Button,
  },
  setup(props, { emit }) {
    const data = ref({
      name: "",
      email: "",
      date: null,
    });

    const rules = {
      name: { required },
      email: { required, email },
      date: { required },
    };

    const submitted = ref(false);
    const date = ref();

    const v$ = useVuelidate(rules, data);

    const handleSubmit = (isFormValid: boolean) => {
      submitted.value = true;

      if (!isFormValid) {
        return;
      }

      emit("infoFilled", data.value);
    };

    return {
      v$,
      handleSubmit,
      submitted,
      date,
    };
  },
});
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

  .field {
    margin: 0 10px 10px;
  }
}
</style>
