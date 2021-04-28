// 挂载方法
import { createApp } from 'vue';
// elementPlus
import ElementPlus from 'element-plus';
// app
import App from './App.vue';
// router
import router from './router';
// store
import store from './store';
// elementPlus样式
import 'element-plus/lib/theme-chalk/index.css';
// 全局样式
import '@style/index.scss';
// svg注入
import 'vite-plugin-svg-icons/register';
import SvgIcon from './components/svg/svg.vue';
// 权限控制
import './permission';
// 挂载
createApp(App).component('svg-icon', SvgIcon).use(router).use(store).use(ElementPlus).mount('#app');
