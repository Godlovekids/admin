// 路由定义
import type { RouteRecordRaw } from 'vue-router';
// Excel导出
import XLSX from 'xlsx';

// token——————

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

// 菜单——————

// 判断是否存在菜单
export function hasPermission(idList: Array<string>, route: RouteRecordRaw): boolean {
	return !!idList.includes((route as any).meta?.id);
}
// 递归处理权限路由
export function filterAsyncRoutes(routes: RouteRecordRaw[], idList: string[]): RouteRecordRaw[] {
	const res: RouteRecordRaw[] = [];
	routes.forEach((route: RouteRecordRaw) => {
		const tmp = { ...route };
		if (hasPermission(idList, tmp)) {
			if (tmp.children) {
				tmp.children = filterAsyncRoutes(tmp.children, idList);
			}
			res.push(tmp);
		}
	});
	return res;
}
// 过滤隐藏的菜单，并提取单条的子菜单
export function filterMenu(list: any[]): RouteRecordRaw[] {
	const f = (menuList: any[]) => {
		const arr: any[] = [];
		menuList
			.filter((v: { meta: { hidden: any } }) => !v.meta?.hidden)
			.forEach((v: { children: any[]; meta: { alwaysShow: any } }) => {
				const child =
					// eslint-disable-next-line no-shadow
					v.children && v.children.filter((v: { meta: { hidden: any } }) => !v.meta.hidden);
				let currentItem = v;
				if (!v.meta?.alwaysShow && child && child.length === 1) {
					[currentItem] = child;
				}
				arr.push(currentItem);
				if (currentItem.children && currentItem.children.length > 0) {
					arr[arr.length - 1].children = f(currentItem.children);
				}
			});
		return arr;
	};
	return f(list);
}

// 导出Excel
export function exportExcel(
	head: { label: string }[],
	data: object[],
	title: string = '表格',
	name: string = '数据导出'
): void {
	// 表格数据
	const tableData: any = [];
	// 表头
	const headData = ['序号', ...head.map((item: { label: string }) => item?.label)];
	tableData.push(headData);
	// 内容
	data.forEach((item, index) => {
		const rowData = [];
		rowData.push(index + 1, ...Object.values(item));
		tableData.push(rowData);
	});
	const ws = XLSX.utils.aoa_to_sheet(tableData);
	const wb = XLSX.utils.book_new();
	// 工作簿名称
	XLSX.utils.book_append_sheet(wb, ws, title);
	// 保存的文件名
	XLSX.writeFile(wb, `${name}.xlsx`);
}
