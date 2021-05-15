<template>
	<div class="app-user">
		<el-avatar
			:size="30"
			src="https://img1.baidu.com/it/u=2680422136,3870612526&fm=26&fmt=auto&gp=0.jpg"
		/>
		<el-dropdown>
			<div>
				<span class="app-name">{{ name || '未知' }}</span>
				<i class="el-icon-arrow-down el-icon--right"></i>
			</div>
			<template #dropdown>
				<el-dropdown-menu>
					<el-dropdown-item @click="logout">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</template>
		</el-dropdown>
	</div>
</template>

<script lang="ts" setup>
import store from '@store/index';
import { computed } from 'vue';
// 用户名
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
	display: flex;
	align-items: center;
	padding: 4px 20px 4px 10px;
	.app-name {
		padding: 0 4px 0 10px;
	}
}
</style>
