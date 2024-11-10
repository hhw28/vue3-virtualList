import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@surely-vue/table/dist/index.less';
import STable from '@surely-vue/table';

const app = createApp(App)

app.use(router)

app.use(ElementPlus);
app.use(Antd);
app.use(STable);

app.mount('#app')
