<template>
	<el-row class="height">{{ $route.meta.title }}</el-row>
	<el-row>
		<el-button type="primary">按钮</el-button>
	</el-row>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.height {
	height: 1200px;
	// background-color: red;
}
</style>
