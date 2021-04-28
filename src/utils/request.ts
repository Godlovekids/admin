// axios
import axios from 'axios';
// 弹窗组件
import { ElMessageBox, ElMessage } from 'element-plus';
// store
import store from '@store/index';
// 基础路径
const baseURL = import.meta.env.VITE_BASEURL as string;
//  封装请求
const service = axios.create({
	// 基础路径
	baseURL,
	// 跨域携带cookies
	// withCredentials: true,
	//  请求超时时间
	timeout: 5000
});

// request拦截器
service.interceptors.request.use(
	(config) => {
		// 处理token
		if (store.getters.token) {
			config.headers.token = store.getters.token;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// response拦截器
service.interceptors.response.use(
	(response) => {
		const res = response.data;
		if (res.code !== 20000) {
			ElMessage({
				message: res.message || 'Error',
				type: 'error',
				duration: 3000
			});
			if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
				// 重新登陆
				ElMessageBox.confirm('你已退出,去登陆?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					window.location.reload();
				});
			}
			return Promise.reject(res.message);
		}
		return res;
	},
	(error) => {
		ElMessage({
			message: error.message,
			type: 'error',
			duration: 3000
		});
		return Promise.reject(error);
	}
);

export default service;
