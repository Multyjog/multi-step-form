<template>
  <div>
    <h3>Your Summary:</h3>
    <div><strong>Name:</strong> {{ data.name }}</div>
    <div><strong>DOB:</strong> {{ formattedDate }}</div>
    <div><strong>Email:</strong> {{ data.email }}</div>
    <div><strong>Phone:</strong> {{ data.phone }}</div>
    <div><strong>Card number:</strong> {{ data.card }}</div>
    <div><strong>Billing name:</strong> {{ data.billingName }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFormStore } from "@/store/FormStore";
import dayjs from "dayjs";

export default defineComponent({
  name: "ResultsInfo",
  emits: ["startOver", "formValid", "formInvalid"],
  setup() {
    const store = useFormStore();
    const data = store.getFilledData;
    const formattedDate = dayjs(data.date).format("DD-MM-YYYY");
    return {
      data,
      formattedDate,
    };
  },
});
</script>
