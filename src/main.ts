import { createApp } from "vue";
import { createPinia } from "pinia";

import "vue-easy-dnd/dist/dnd.css";
import "grapesjs/dist/css/grapes.min.css";

import App from "./App.vue";
import "./style.css";

const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.mount("#app");
