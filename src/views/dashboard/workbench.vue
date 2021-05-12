<template>
	<div class="workbench">
		<el-row class="height-1000">{{ $route.meta.title }}</el-row>
	</div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.workbench {
	padding: 10px;
	.height-1000 {
		height: 1000px;
	}
}
</style>
