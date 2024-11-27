<template>
  <nav>
    <ul class="flex justify-center gap-6">
      <li
        v-for="tab in props.tabsOption"
        :key="tab.id"
        class="text-grey2 transition-colors duration-200"
      >
        <button
          type="button"
          class="pb-4"
          :class="{
            'border-b-2 border-blue1 text-blue1': tab.id === props.activeTabId,
            'hover:text-black': tab.id !== props.activeTabId,
          }"
          @click="updateActiveTab(tab)"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ITabOption } from "@/shared/types";

interface ITabList {
  tabsOption: ITabOption[];
  activeTabId: number;
}

const emit = defineEmits<{
  (event: "updateActiveTabId", value: number): void;
}>();

const updateActiveTab = (tab: ITabOption) => {
  emit("updateActiveTabId", tab.id);
};

const props = defineProps<ITabList>();
</script>
