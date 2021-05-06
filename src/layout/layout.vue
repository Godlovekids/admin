<template>
	<el-row class="app-layout-box">
		<side-bar></side-bar>
		<div class="app-layout-con">
			<div class="app-layout-nav">
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
			<div class="app-layout-main">
				<el-scrollbar>
					<router-view v-slot="{ Component }">
						<transition name="el-fade-in">
							<keep-alive>
								<component :is="Component" />
							</keep-alive>
						</transition>
					</router-view>
				</el-scrollbar>
			</div>
		</div>
	</el-row>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import store from '@store/index';
// 侧边栏
// eslint-disable-next-line no-unused-vars
import SideBar from './components/sidebar/sidebar.vue';
// 面包屑导航
// eslint-disable-next-line no-unused-vars
import BreadCrumb from './components/breadcrumb.vue';
// 消息提示
// eslint-disable-next-line no-unused-vars
import Notice from './components/notice.vue';
//  用户信息
// eslint-disable-next-line no-unused-vars
import User from './components/user.vue';
// 展开状态标识
// eslint-disable-next-line no-unused-vars
const collapse = computed(() => {
	return store().collapse;
});
// 切换展开状态
// eslint-disable-next-line no-unused-vars
const changeCollapsed = (): void => {
	store().changeCollapsed();
};
</script>

<style lang="scss">
.app-layout-box {
	width: 100vw;
	height: 100vh;
	.app-layout-con {
		flex: 1;
		background-color: #f5f5f6;
		.app-layout-nav {
			justify-content: space-between;
			display: flex;
			background-color: #fff;
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
				min-width: 120px;
			}
		}
		.app-layout-main {
			height: calc(100vh - 40px);
			width: 100%;
			background-color: #fff;
			overflow: hidden;
		}
	}
}
</style>
