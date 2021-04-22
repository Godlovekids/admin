import axios from 'axios';
import { ElMessageBox, ElMessage } from 'element-plus';
import store from '@/store';
import { getToken } from '@/utils/auth';

const baseURL = import.meta.env.VITE_BASEURL;

const service = axios.create({
  baseURL,
  // withCredentials: true, // 跨域携带cookies
  timeout: 5000 //  请求超时时间
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    if (store.getters.token) {
      config.headers.token = getToken();
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
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
        // to re-login
        ElMessageBox.confirm('你已退出,去登陆?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            window.location.reload();
          });
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
      duration: 3 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
