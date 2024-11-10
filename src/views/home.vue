<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="list" name="first">
      <List :data="tableData" />
    </el-tab-pane>
    <el-tab-pane label="el-table" name="second">
      <ElTableList :data="tableData" :columns="columns" />
    </el-tab-pane>
    <el-tab-pane label="el-table-v2" name="third">
      <ElTableV2List :data="tableData" :columns="columns" />
    </el-tab-pane>
    <el-tab-pane label="ant-design-vue-table" name="fourth">
      <AntTableList :data="tableData" :columns="columns" />
    </el-tab-pane>
    <el-tab-pane label="surely-vue-table" name="fifth">
      <AntSurelyTableList :data="tableData" :columns="columns" />
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "vue";
import List from "./List.vue";
import ElTableList from "./ElTableList.vue";
import ElTableV2List from "./ElTableV2List.vue";
import AntTableList from "./AntTableList.vue";
import AntSurelyTableList from "./AntSurelyTableList.vue";
import type { TabsPaneContext } from "element-plus";

const tableData = ref([]);

onMounted(() => {
  Array.from({ length: 100000 }).forEach((_, index) => {
    tableData.value.push({
      id: index,
      key: index,
      name: `Item ${index + 1}`,
    });
  });
});

const columns = ref([
  {
    title: "Name",
    dataIndex: "name",
  },
]);

const activeName = ref("first");

const handleClick = (tab?: TabsPaneContext, event?: Event) => {
  //   console.log(tab, event);
};
</script>

<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
