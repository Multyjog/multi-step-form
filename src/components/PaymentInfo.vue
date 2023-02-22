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
  </div>
</template>

<script lang="ts">
import InputMask from "primevue/inputmask";

import { required, alphaNum, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "PaymentInfo",
  emits: ["formValid", "formInvalid"],
  components: {
    InputMask,
  },
  setup(props, { emit }) {
    const data = ref({
      card: "",
    });
    const rules = {
      card: { required },
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

  .field {
    margin: 0 10px 10px;
  }
}
</style>
