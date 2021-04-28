import request from '@utils/request';

export function info(params: unknown) {
	return request({
		url: '/user/info',
		method: 'get',
		params
	});
}

export function login(data: unknown) {
	return request({
		url: '/user/login',
		method: 'post',
		data
	});
}
