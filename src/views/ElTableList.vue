<script setup lang="ts">
import useVirtualList from "@/hooks/useVirtualList";
import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";
import { ElTabs, ElTabPane } from "element-plus";

const props = defineProps<{
  data: any[];
  columns: any[];
}>();

const tableData = ref(props.data);

const { actualRenderData } = useVirtualList({
  data: tableData, // 列表项数据
  scrollContainer: ".el-scrollbar__wrap", // 滚动容器
  actualHeightContainer: ".el-scrollbar__view", // 渲染实际高度的容器
  translateContainer: ".el-table__body", // 需要偏移的目标元素
  itemContainer: ".el-table__row", // 列表项
  itemHeight: 40, // 列表项的大致高度
  size: 20, // 单次渲染数量
});
</script>

<template>
  <el-table :data="actualRenderData" max-height="500px">
    <el-table-column v-for="item in props.columns" :prop="item.dataIndex" :label="item.title" />
  </el-table>
</template>
<style scoped>

</style>