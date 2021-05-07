<template>
	<el-row class="app-logo">
		<el-image :src="logo"></el-image>
		<span v-show="!collapse">后台管理系统</span>
	</el-row>
</template>

<script lang="ts" setup>
// 展开状态标识
// eslint-disable-next-line no-unused-vars
import collapse from '@utils/data';
// logo
// eslint-disable-next-line no-unused-vars
import logo from '@assets/logo/logo.png';
</script>

<style lang="scss">
.app-logo {
	line-height: 60px;
	align-items: center;
	color: #fff;
	.el-image {
		width: 32px;
		height: 32px;
		padding: 14px 16px;
	}
}
</style>
