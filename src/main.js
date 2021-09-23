import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponents from "./includes/globalComponentRegistration";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(GlobalComponents);

app.mount("#app");
