<template>
  <div class="flex justify-center pt-5">
    <div class="w-[50rem]">
      <div class="mb-10">
        <label>
          <input type="checkbox" :disabled="isLoading" v-model="allowEmpty" />
          Отображать пустые рубрики
        </label>
        <p>Сумма count выбранных: {{ count }}</p>
      </div>

      <fake-spinner v-if="isLoading" />
      <v-list
        v-else
        :items="rubricTree"
        @update-checkbox-status="changeStatus"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import FakeSpinner from "@/components/FakeSpinner.vue";
import VList from "@/components/VList.vue";
import { rubricTreeService } from "@/modules/rubricTree/services/rubricTree.service.ts";

const {
  isLoading,
  allowEmpty,
  getRubricTree,
  rubricTree,
  changeStatus,
  count,
} = rubricTreeService();

onMounted(() => {
  getRubricTree();
});
</script>
