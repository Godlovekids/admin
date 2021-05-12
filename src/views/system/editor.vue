<template>
	<div class="editor">
		<div id="editor"></div>
	</div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
// 富文本
import Editor from 'wangeditor';

onMounted(() => {
	const editor = new Editor('#editor');
	editor.create();
});
</script>

<style lang="scss">
.editor {
	padding: 10px;
}
</style>
