import "./assets/scss/common.scss";

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'; // Axios를 임포트

const app = createApp(App);
app.use(router);

// Axios 설정: API 엔드포인트 기본 URL을 설정할 수 있습니다.
//axios.defaults.baseURL = 'https://api.example.com'; // 원하는 API 주소로 변경

app.config.globalProperties.$axios = axios; // Vue 인스턴스에 Axios를 추가

app.mount('#app');