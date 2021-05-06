<template>
	<el-dropdown class="app-user">
		<div class="app-info">
			<el-avatar
				:size="30"
				src="https://img1.baidu.com/it/u=2680422136,3870612526&fm=26&fmt=auto&gp=0.jpg"
			/>
			<span class="app-name">{{ name || '匿名' }}</span>
			<i class="el-icon-arrow-down el-icon--right"></i>
		</div>
		<template #dropdown>
			<el-dropdown-menu>
				<el-dropdown-item>
					<el-button type="text">修改密码</el-button>
				</el-dropdown-item>
				<el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup>
import store from '@store/index';
import { computed } from '@vue/runtime-core';
// eslint-disable-next-line no-unused-vars
const name = computed(() => {
	return store().name;
});

// 退出登录
// eslint-disable-next-line no-unused-vars
const logout = (): void => {
	store().reset();
	window.location.reload();
};
</script>

<style lang="scss">
.app-user {
	padding: 0 20px 0 10px;
	.app-info {
		padding: 4px;
		vertical-align: top;
		cursor: pointer;
		.app-name {
			display: inline-block;
			line-height: 30px;
			margin: 0 6px;
			vertical-align: top;
		}
		i {
			position: relative;
			top: -10px;
		}
	}
}
</style>
