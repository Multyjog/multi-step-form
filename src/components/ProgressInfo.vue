<template>
  <div class="button">
    <Button
      icon="pi pi-arrow-left"
      @click="$emit('goBack')"
      class="p-button-sm"
      :disabled="progress <= 0"
    />
  </div>
  <ProgressBar :value="progress" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ProgressBar from "primevue/progressbar";
import Button from "primevue/button";

export default defineComponent({
  name: "ProgressInfo",
  props: ["value"],
  emits: ["goBack"],
  components: {
    ProgressBar,
    Button,
  },
  setup(props) {
    const progress = computed(() => {
      return props.value;
    });
    return {
      progress,
    };
  },
});
</script>

<style lang="scss" scoped>
.button {
  margin: 20px 0;
}
</style>
