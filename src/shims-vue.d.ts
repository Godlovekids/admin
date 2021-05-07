declare module '*.vue' {
	import { DefineComponent } from 'vue';
	// 定义vue组件
	const component: DefineComponent<{}, {}, any>;
	export default component;
}
