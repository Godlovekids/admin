<template>
	<el-row class="app-layout-box">
		<side-bar></side-bar>
		<div class="app-layout-con">
			<el-row>面包屑</el-row>
			<el-row>
				<router-view></router-view>
			</el-row>
		</div>
	</el-row>
</template>

<script lang="ts" setup>
// 侧边栏
// eslint-disable-next-line no-unused-vars
import SideBar from './components/sidebar/sidebar.vue';
</script>

<style lang="scss">
.app-layout-box {
	width: 100%;
	height: 100%;
	.app-layout-con {
		flex: 1;
	}
}
</style>
