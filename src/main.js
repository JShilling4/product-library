import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponents from "./includes/globalComponentRegistration";
import FontAwesome from "./includes/fontAwesome";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(GlobalComponents);
app.use(FontAwesome);

app.mount("#app");
