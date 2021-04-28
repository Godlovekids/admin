// progress
import NProgress from 'nprogress';
// progress样式
import 'nprogress/nprogress.css';
import router from './router/index';
import store from './store/index';
// 设置
import setting from './setting';
// store
// import store from './store/index';
// NProgress配置
NProgress.configure({ showSpinner: false });
// router开始
router.beforeEach((to, from, next) => {
	// progress开始
	NProgress.start();
	// set page title
	document.title = `${setting.title}-${to.meta.title}`;
	// 获取token
	const hasToken = store.getters.token;
	if (hasToken) {
		if (to.path === '/login') {
			// if is logged in, redirect to the home page
			router.push({ path: '/' });
			NProgress.done();
		} else {
			next();
		}
	} else if (to.path === '/login') {
		next();
	} else {
		next({ path: `/login?redirect=${to.path}` });
	}
});
// router结束
router.afterEach(() => {
	// progress结束
	NProgress.done();
});
