<template>
  <div style="height: 400px">
    <el-auto-resizer>
      <template #default="{ height, width }">
        <el-table-v2
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </el-auto-resizer>
  </div>
</template>

<script lang="tsx" setup>
import { ref } from "vue";
import {
  ElButton,
  ElIcon,
  ElTag,
  ElTooltip,
  TableV2FixedDir,
} from "element-plus";

import type { Column } from "element-plus";

const props = defineProps<{
  data: any[];
  columns: any[];
}>();

const data = ref(props.data);

const columns: Column<any>[] = [
  {
    key: "date",
    title: "Date",
    dataKey: "date",
    width: 150,
    cellRenderer: ({ cellData: date }) => (
      <ElTooltip content={date}>
        {
          <span class="flex items-center">
            {date}
          </span>
        }
      </ElTooltip>
    ),
  },
  {
    key: "name",
    title: "Name",
    dataKey: "name",
    width: 150,
    align: "center",
    cellRenderer: ({ cellData: name }) => <ElTag>{name}</ElTag>,
  },
  {
    key: "operations",
    title: "Operations",
    cellRenderer: () => (
      <>
        <ElButton size="small">Edit</ElButton>
        <ElButton size="small" type="danger">
          Delete
        </ElButton>
      </>
    ),
    width: 150,
    align: "center",
  },
];

</script>
