<template>
  <el-row class="layoutContent">
    <el-col :span="6"> 菜单栏 </el-col>
    <el-col :span="18">
      <el-row>面包屑</el-row>
      <el-row>内容</el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Layout',
  setup() {
    const menuList = ref([]);
    return {
      menuList
    };
  }
});
</script>

<style>
.layoutContent {
  width: 100%;
  height: 100%;
}
</style>
