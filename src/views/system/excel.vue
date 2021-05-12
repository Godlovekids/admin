<template>
	<div class="excel">
		<el-row>
			<el-button @click="exportExcel(headData, tableData)">导出Excel</el-button>
		</el-row>
		<el-table :data="tableData" stripe>
			<el-table-column
				align-center
				:prop="item.prop"
				:label="item.label"
				v-for="item in headData"
				:key="item.label"
			>
			</el-table-column>
		</el-table>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// 导出Excel
// eslint-disable-next-line no-unused-vars
import { exportExcel } from '@utils/auth';
// table数据格式限制
interface Table {
	date: string;
	name: string;
	address: string;
}
// 表头字段
// eslint-disable-next-line no-unused-vars
const headData = [
	{
		label: '日期',
		prop: 'date'
	},
	{
		label: '姓名',
		prop: 'name'
	},
	{
		label: '地址',
		prop: 'address'
	}
];
// 表格数据
// eslint-disable-next-line no-unused-vars
const tableData = ref<Table[]>([
	{
		date: '2016-05-02',
		name: '王小虎',
		address: '上海市普陀区金沙江路 1518'
	},
	{
		date: '2016-05-04',
		name: '王小虎',
		address: '上海市普陀区金沙江路 1517'
	},
	{
		date: '2016-05-01',
		name: '王小虎',
		address: '上海市普陀区金沙江路 1519'
	},
	{
		date: '2016-05-03',
		name: '王小虎',
		address: '上海市普陀区金沙江路 1516'
	}
]);
</script>

<style lang="scss">
.excel {
	padding: 10px;
}
</style>
