<template>
	<div class="app-error">
		<el-image :src="error" class="errorImage"></el-image>
		<el-row class="back">
			<el-button @click="backHome">返回主页</el-button>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
// error
// eslint-disable-next-line no-unused-vars
import error from '@assets/404/404.png';
// 路由
import store from '@router/index';
// 返回主页
// eslint-disable-next-line no-unused-vars
const backHome = (): void => {
	store.push('/');
};
</script>
<style lang="scss">
.app-error {
	width: 100%;
	height: 100%;
	text-align: center;
	.errorImage {
		width: 700px;
		margin-top: 20px;
	}
	.back {
		margin-top: 40px;
		justify-content: center;
	}
}
</style>
