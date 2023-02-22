<template>
  <div>
    <div class="header">Personal information:</div>
    <div class="field">
      <div>
        <!-- placeholder="Phone" -->
        <InputMask
          id="phoneext"
          mask="(999) 999-9999"
          v-model="v$.phone.$model"
          :class="{ 'p-invalid': v$.phone.$invalid && v$.phone.$dirty }"
          placeholder="(999) 999-9999"
        />
      </div>
      <small
        v-if="
          (v$.phone.$dirty && v$.phone.$invalid) || v$.phone.$pending.$response
        "
        class="p-error"
        >{{ v$.phone.required.$message.replace("Value", "Phone") }}</small
      >
    </div>
    <div class="field">
      <div>
        <InputText
          id="email"
          v-model="v$.email.$model"
          :class="{ 'p-invalid': v$.email.$invalid && v$.email.$dirty }"
          aria-describedby="email-error"
          placeholder="example@gmail.com"
        />
      </div>
      <span v-if="v$.email.$error && v$.email.$dirty">
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
          (v$.email.$invalid && v$.email.$dirty) || v$.email.$pending.$response
        "
        class="p-error"
        >{{ v$.email.required.$message.replace("Value", "Email") }}</small
      >
    </div>
  </div>
</template>

<script lang="ts">
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";

import { required, email } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "ContactInfo",
  emits: ["formValid", "formInvalid"],
  props: ["userData"],
  components: {
    InputText,
    InputMask,
  },
  setup(props, { emit }) {
    const data = ref({
      phone: props.userData.phone,
      email: props.userData.email,
    });
    const rules = {
      phone: { required },
      email: { required, email },
    };
    const v$ = useVuelidate(rules, data);

    watch(v$, async (newValue, oldValue) => {
      if (newValue.$invalid) {
        emit("formInvalid");
      } else {
        emit("formValid", data.value);
      }
    });

    return {
      v$,
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
}
.field {
  margin: 20px 0;
}
</style>
