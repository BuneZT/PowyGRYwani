/*!

=========================================================
* Vue Argon Dashboard - v2.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-argon-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/vue-argon-dashboard/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ArgonDashboard from "./plugins/argon-dashboard";
import "element-plus/lib/theme-chalk/index.css";
import VueAxios from "vue-axios";
import { createPinia } from "pinia";
import axios from "@/utils/axios";

const appInstance = createApp(App);
const pinia = createPinia();
appInstance.config.devtools = true;
appInstance.use(pinia);
appInstance.use(router);
appInstance.use(ArgonDashboard);

appInstance.use(VueAxios, axios);
appInstance.mount("#app");
