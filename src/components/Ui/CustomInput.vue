<template>
  <div class="relative flex justify-center">
    <input
      :type="props.type"
      :placeholder="props.placeholder"
      class="h-14 w-full max-w-none rounded-l-lg rounded-r-[6.25rem] px-4 py-2 pr-24 focus:outline-blue2 md:pr-44"
    />
    <button
      type="button"
      class="absolute right-0 hidden h-full rounded-[6.25rem] bg-blue2 px-8 py-4 text-white transition-colors duration-200 hover:bg-blue1 md:block"
    >
      Подписаться
    </button>
    <button
      type="button"
      class="absolute right-0 flex h-14 w-14 items-center justify-center rounded-[6.25rem] bg-blue2 text-white md:hidden"
    >
      <icon-arrow-right width="9" height="16" class="fill-white" />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconArrowRight from "@/assets/icons/IconArrowRight.svg";

interface ICustomInputProps {
  placeholder: string;
  type?: string;
}

const props = withDefaults(defineProps<ICustomInputProps>(), {
  type: "text",
});
</script>
