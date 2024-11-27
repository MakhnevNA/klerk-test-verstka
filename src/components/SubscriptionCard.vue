<template>
  <div
    class="flex min-w-[21rem] flex-1 flex-col justify-between rounded-lg bg-white p-4 shadow-mainShadow sm:min-w-[29.75rem] sm:p-6"
  >
    <div class="relative flex justify-between">
      <div>
        <p class="text-gray-600">{{ props.subscriptionData.label }}</p>
        <h2 class="mb-2 text-lg font-semibold">
          {{ props.subscriptionData.title }}
        </h2>
        <p class="mb-4 max-w-[20.25rem] text-sm text-grey2">
          {{ props.subscriptionData.subtitle }}
        </p>
      </div>
      <div class="absolute right-0 top-0 h-10 w-10 sm:h-20 sm:w-20">
        <img
          :src="props.subscriptionData.imageUrl"
          alt="Изображение карточки"
          class="w-full"
        />
      </div>
    </div>
    <div>
      <ul class="mb-4 text-sm">
        <li
          v-for="(item, index) in props.subscriptionData.itemList"
          :key="index"
          class="flex items-center gap-2"
        >
          <icon-checked width="16" height="15" class="text-green1" />
          {{ item }}
        </li>
      </ul>
      <div class="flex items-center gap-3">
        <custom-switcher :is-checked="props.subscriptionData.isChecked" />
        <p class="text-gray-500 text-sm">
          Уже получает {{ props.subscriptionData.numOfRecipients }} человек
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CustomSwitcher from "@/components/Ui/CustomSwitcher.vue";
import IconChecked from "@/assets/icons/IconChecked.svg";

interface ISubscriptionCardProps {
  subscriptionData: {
    id: number;
    label: string;
    title: string;
    subtitle: string;
    itemList: string[];
    imageUrl: string;
    isChecked: boolean;
    numOfRecipients: number;
  };
}

const props = defineProps<ISubscriptionCardProps>();
</script>
