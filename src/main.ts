import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

// COMPONENTS LIB
import PrimeVue from "primevue/config";
const app = createApp(App);
app.use(PrimeVue);

// STORE
const pinia = createPinia();

// CSS
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

app.use(pinia);
app.mount("#app");
