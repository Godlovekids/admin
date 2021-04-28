// 储存位置
const saveStorage = localStorage;
// token对应的key
const tokenKey = 'token';
// 获取token
export function getToken(): string | null {
	return saveStorage.getItem(tokenKey);
}
// 设置token
export function setToken(token: string): void {
	saveStorage.setItem(tokenKey, token);
}
// 删除token
export function removeToken(): void {
	saveStorage.removeItem(tokenKey);
}
