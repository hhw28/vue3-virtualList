<template>
  <div>
    <a-table
      :columns="columns"
      :data-source="actualRenderData"
      :pagination="false"
    >
      <template #headerCell="{ column }">
        <template v-if="column.key === 'name'">
          <span> Name </span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a>
            {{ record.name }}
          </a>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions </a>
          </span>
        </template>
      </template>
    </a-table>
  </div>
</template>
<script lang="ts" setup>
import useVirtualList from "@/hooks/useVirtualList";
import { ref } from "vue";

const props = defineProps<{
  data: any[];
  columns: any[];
}>();

const tableData = ref(props.data);

const { actualRenderData } = useVirtualList({
  data: tableData, // 列表项数据
  scrollContainer: ".ant-table-container", // 滚动容器
  actualHeightContainer: ".ant-table-content", // 渲染实际高度的容器
  translateContainer: ".ant-table-tbody", // 需要偏移的目标元素
  itemContainer: ".ant-table-row", // 列表项
  itemHeight: 54, // 列表项的大致高度
  size: 20, // 单次渲染数量
});
</script>

<style>
.ant-table-container {
  height: 400px;
  overflow: scroll;
}
</style>
