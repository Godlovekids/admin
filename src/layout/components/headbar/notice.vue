<template>
	<el-dropdown class="app-notice">
		<el-badge :value="6" :max="99" type="danger">
			<i class="el-icon-bell" />
		</el-badge>
		<template #dropdown>
			<el-dropdown-menu class="app-notice-dropdown">
				<el-tabs type="card">
					<el-tab-pane label="通知"> </el-tab-pane>
					<el-tab-pane label="关注"> </el-tab-pane>
					<el-tab-pane label="待办"> </el-tab-pane>
				</el-tabs>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.app-notice {
	padding-top: 16px;
	margin: 0 10px;
	.el-badge {
		i {
			cursor: pointer;
			font-size: 20px;
		}
	}
}
.app-notice-dropdown.el-dropdown-menu {
	padding: 0;
}
</style>
