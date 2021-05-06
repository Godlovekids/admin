// progress
import NProgress from 'nprogress';
// progress样式
import 'nprogress/nprogress.css';
// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// 获取token
import { getToken } from '@utils/auth';
// 路由,错误路由
import router, { errorRouter } from './router/index';
// 商店
import store from './store/index';
// 设置
import setting from './setting';
// NProgress配置
NProgress.configure({ showSpinner: false });
// router开始
router.beforeEach(async (to, _from, next) => {
	// token处理
	if (getToken() && !store().token) {
		store().setToken(getToken()!);
	}
	// progress开始
	NProgress.start();
	// 设置title
	document.title = `${setting.title}-${to.meta.title}`;
	// 获取token
	const hasToken = store().token;
	if (hasToken) {
		if (to.path === '/login') {
			next('/');
		} else {
			const { limitRoutes } = store();
			if (limitRoutes && limitRoutes.length > 0) {
				next();
			} else {
				const accessRoutes = await store().setRoutes(hasToken);
				accessRoutes.concat(errorRouter);
				// eslint-disable-next-line no-plusplus
				for (let i = 0; i < accessRoutes.length; i++) {
					router.addRoute(accessRoutes[i] as RouteRecordRaw);
				}
				next({ ...to, replace: true });
			}
		}
	} else if (to.path === '/login') {
		next();
	} else {
		next(`/login?redirect=${to.fullPath}`);
	}
});
// router结束
router.afterEach(() => {
	// progress结束
	NProgress.done();
});
