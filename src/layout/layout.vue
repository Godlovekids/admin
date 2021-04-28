<template>
	<el-row class="layoutContent">
		<side-bar></side-bar>
		<div>
			<el-row>面包屑</el-row>
			<el-row>
				<router-view></router-view>
			</el-row>
		</div>
	</el-row>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-unused-vars
import SideBar from './components/sidebar/sidebar.vue';
</script>

<style lang="scss">
.layoutContent {
	width: 100%;
	height: 100%;
}
</style>
