<template>
  <div>
    <div class="header">Payment information:</div>
    <div class="field">
      <div class="p-float-label">
        <InputMask
          id="card"
          mask="9999-9999-9999-9999"
          placeholder="4444-4444-4444-4444"
          v-model="v$.card.$model"
          :class="{
            'p-invalid': v$.card.$invalid && v$.card.$dirty,
          }"
        />
      </div>
      <span v-if="v$.card.$error && v$.card.$dirty">
        <span
          id="card-error"
          v-for="(error, index) of v$.card.$errors"
          :key="index"
        >
          <small class="p-error">{{ error.$message }}</small>
        </span>
      </span>
      <small
        v-else-if="
          (v$.card.$invalid && v$.card.$dirty) || v$.card.$pending.$response
        "
        class="p-error"
        >{{ v$.card.required.$message.replace("Value", "Card") }}</small
      >
    </div>
    <div class="field">
      <div>
        <InputText
          id="billing-name"
          placeholder="Billing name"
          v-model="v$.billingName.$model"
          :class="{
            'p-invalid': v$.billingName.$invalid && v$.billingName.$dirty,
          }"
        />
      </div>
      <small
        v-if="
          (v$.billingName.$dirty && v$.billingName.$invalid) ||
          v$.billingName.$pending.$response
        "
        class="p-error"
        >{{ v$.billingName.required.$message.replace("Value", "Name") }}</small
      >
    </div>
  </div>
</template>

<script lang="ts">
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";

import { required, alphaNum, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "PaymentInfo",
  emits: ["formValid", "formInvalid"],
  components: {
    InputMask,
    InputText,
  },
  setup(props, { emit }) {
    const data = ref({
      card: "",
      billingName: "",
    });
    const rules = {
      card: { required },
      billingName: { required },
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
