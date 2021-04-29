// progress
import NProgress from 'nprogress';
// progress样式
import 'nprogress/nprogress.css';
import type { RouteRecordRaw } from 'vue-router';
import router from './router/index';
import store from './store/index';
// 设置
import setting from './setting';
// NProgress配置
NProgress.configure({ showSpinner: false });
// router开始
router.beforeEach(async (to, _from, next) => {
	// progress开始
	NProgress.start();
	// set page title
	document.title = `${setting.title}-${to.meta.title}`;
	// 获取token
	const hasToken = store.getters.token;
	if (hasToken) {
		if (to.path === '/login') {
			next('/');
		} else {
			const { limitRoutes } = store.getters;
			if (limitRoutes && limitRoutes.length > 0) {
				next();
			} else {
				const accessRoutes = await store.dispatch('user/route', hasToken);
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
