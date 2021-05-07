<template>
	<div class="workbench">
		<el-row class="height">{{ $route.meta.title }}</el-row>
		<el-row>
			<el-button type="primary">按钮</el-button>
		</el-row>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.workbench {
	.height {
		height: 800px;
	}
}
</style>
