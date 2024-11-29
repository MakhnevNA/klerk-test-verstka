<template>
  <ul>
    <li v-for="item in props.items" :key="item.id">
      <div
        class="flex items-center gap-2"
        :class="{ 'gap-6': !item.children?.length }"
      >
        <input
          type="checkbox"
          :checked="!!item.isChecked"
          class="size-4"
          @change="updateCheckboxStatus(item)"
        />
        <button
          v-if="item.children?.length"
          type="button"
          class="w-2"
          @click="toggleExpand(item, items)"
        >
          {{ item.isExpanded ? "-" : "+" }}
        </button>

        <a target="_blank" :href="`https://www.klerk.ru${item.url}`">
          {{ item.title }} ({{ item.count }}, {{ item.totalCount }} )
        </a>
      </div>
      <v-list
        v-if="item.children?.length && item.isExpanded"
        :style="{
          marginLeft: `${(item.level + 1) * 20}px`,
        }"
        :items="item.children"
        @update-checkbox-status="updateCheckboxStatus"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { rubricTreeService } from "@/modules/rubricTree/services/rubricTree.service.ts";
import { IRubricTreeTypes } from "@/shared/types.ts";

const { toggleExpand } = rubricTreeService();

interface IVListProps {
  items: IRubricTreeTypes[];
}

const props = defineProps<IVListProps>();

const emit = defineEmits<{
  updateCheckboxStatus: [value: IRubricTreeTypes];
}>();

const updateCheckboxStatus = (item: IRubricTreeTypes) => {
  emit("updateCheckboxStatus", item);
};
</script>
