import "./assets/scss/common.scss";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 라우터 설정을 불러옴

createApp(App).use(router).mount('#app');