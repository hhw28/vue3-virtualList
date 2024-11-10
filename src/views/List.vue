<script setup lang="ts">
import useVirtualList from "@/hooks/useVirtualList";
import { ref } from "vue";

const props = defineProps<{
  data: any[];
}>();

const tableData = ref(props.data);

const { actualRenderData } = useVirtualList({
  data: tableData, // 列表项数据
  scrollContainer: ".scroll-container", // 滚动容器
  actualHeightContainer: ".actual-height-container", // 渲染实际高度的容器
  translateContainer: ".translate-container", // 需要偏移的目标元素,
  itemContainer: ".item", // 列表项
  itemHeight: 30, // 列表项的大致高度
  size: 20, // 单次渲染数量
});
</script>

<template>
  <div class="container">
    <ul class="scroll-container">
      <div class="actual-height-container">
        <div class="translate-container">
          <li v-for="(item, i) in actualRenderData" class="item">
            {{ item.name }}
          </li>
        </div>
      </div>
    </ul>
  </div>
</template>
<style scoped>
.container {
  height: 500px;
  overflow: hidden;
}
.scroll-container {
  overflow-y: scroll;
  height: 100%;
  border: 1px solid red;
}
.actual-height-container {
  border: 1px solid blue;
}
.translate-container {
  border: 1px solid green;
}
.item {
  height: 30px;
  border: 1px solid yellow;
}
</style>
