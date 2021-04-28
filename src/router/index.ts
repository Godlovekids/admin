// 创建router方法  history模式
import { createRouter, createWebHistory } from 'vue-router';
// 路由数据
import routes from './routes';
// 创建router
const router = createRouter({
	history: createWebHistory(),
	routes
});
export default router;
