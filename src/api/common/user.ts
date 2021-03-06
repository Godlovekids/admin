//  导入request
import request from '@utils/request';

// 用户信息
export function info(params: unknown): Promise<object> {
	return request({
		url: '/user/info',
		method: 'get',
		params
	});
}
// 登录
export function login(data: unknown): Promise<object> {
	return request({
		url: '/user/login',
		method: 'post',
		data
	});
}
