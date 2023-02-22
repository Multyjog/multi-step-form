<template>
  <div>TI PIDORAS</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFormStore } from "@/store/FormStore";

export default defineComponent({
  name: "ResultsInfo",
  setup() {
    const store = useFormStore();

    return {
      store,
    };
  },
});
</script>
