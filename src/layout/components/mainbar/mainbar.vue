<template>
	<div class="app-main">
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
</template>

<script lang="ts" setup></script>

<style lang="scss">
.app-main {
	width: 100%;
	height: calc(100vh - 40px);
	overflow: hidden;
}
</style>
