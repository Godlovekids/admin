<template>
	<div class="app-nav">
		<div class="app-load">
			<i
				class="app-fold"
				:class="{ 'el-icon-s-fold': !collapse, 'el-icon-s-unfold': collapse }"
				@click="changeCollapsed"
			></i>
			<bread-crumb></bread-crumb>
		</div>
		<div class="app-message">
			<notice></notice>
			<user></user>
		</div>
	</div>
</template>

<script lang="ts" setup>
import store from '@store/index';
// 展开状态标识
// eslint-disable-next-line no-unused-vars
import collapse from '@utils/data';
// 面包屑导航
// eslint-disable-next-line no-unused-vars
import BreadCrumb from './breadcrumb.vue';
// 消息提示
// eslint-disable-next-line no-unused-vars
import Notice from './notice.vue';
//  用户信息
// eslint-disable-next-line no-unused-vars
import User from './user.vue';
// 切换展开状态
// eslint-disable-next-line no-unused-vars
const changeCollapsed = (): void => {
	store().changeCollapsed();
};
</script>

<style lang="scss">
.app-nav {
	justify-content: space-between;
	display: flex;
	.app-load {
		display: flex;
		align-items: center;
		.app-fold {
			cursor: pointer;
			margin: 0 10px;
			font-size: 20px;
		}
	}
	.app-message {
		display: flex;
		height: 40px;
		min-width: 120px;
	}
}
</style>
