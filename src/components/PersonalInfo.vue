<template>
  <div>
    <div class="header">Personal information:</div>
    <div class="field">
      <div>
        <InputText
          id="name"
          placeholder="Name"
          v-model="v$.name.$model"
          :class="{ 'p-invalid': v$.name.$invalid && v$.name.$dirty }"
        />
      </div>
      <small
        v-if="
          (v$.name.$dirty && v$.name.$invalid) || v$.name.$pending.$response
        "
        class="p-error"
        >{{ v$.name.required.$message.replace("Value", "Name") }}</small
      >
    </div>
    <div class="field">
      <div>
        <Calendar
          dateFormat="dd.mm.yy"
          placeholder="DOB"
          id="date"
          v-model="v$.date.$model"
        />
      </div>
      <small
        v-if="
          (v$.date.$dirty && v$.date.$invalid) || v$.date.$pending.$response
        "
        class="p-error"
        >{{ v$.date.required.$message.replace("Value", "Birthday") }}</small
      >
    </div>
  </div>
</template>

<script lang="ts">
import InputText from "primevue/inputtext";
import Calendar from "primevue/calendar";

import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "PersonalInfo",
  emits: ["formValid", "formInvalid"],
  props: ["userData"],
  components: {
    InputText,
    Calendar,
  },
  setup(props, { emit }) {
    const data = ref({
      name: props.userData.name,
      date: props.userData.date,
    });

    const rules = {
      name: { required },
      date: { required },
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
