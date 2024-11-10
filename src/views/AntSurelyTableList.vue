<template>
  <s-table
    :columns="props.columns"
    :scroll="{ y: 400 }"
    :pagination="false"
    :data-source="dataSource"
  ></s-table>
</template>
<script lang="ts" setup>
import { ref } from "vue";

interface DataItem {
  key: number;
  name: string;
  age: number;
  address: string;
}

const props = defineProps<{
  data: DataItem[];
  columns: any[];
}>();

const dataSource = ref(props.data);
</script>
