import { createApp } from "vue";
import { createPinia } from "pinia";
import { MotionPlugin } from "@vueuse/motion";

import App from "./App.vue";
const app = createApp(App);

// COMPONENTS LIB
import PrimeVue from "primevue/config";
app.use(PrimeVue);

// STORE
const pinia = createPinia();

// CSS
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

app.use(MotionPlugin);
app.use(pinia);
app.mount("#app");
