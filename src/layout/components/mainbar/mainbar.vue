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
	height: calc(100vh - 40px);
	width: 100%;
	background-color: #fff;
	padding: 10px 0px 10px 10px;
	overflow: hidden;
}
</style>
