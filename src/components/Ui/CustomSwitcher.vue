<template>
  <label class="inline-flex cursor-pointer items-center">
    <input
      type="checkbox"
      value=""
      class="peer sr-only"
      :checked="props.isChecked"
    />
    <div
      class="relative h-6 w-11 rounded-full bg-grey4 after:absolute after:start-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border-white after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue1 peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full"
    ></div>
    <span v-if="props.label" class="ms-3 text-sm">
      {{ props.label }}
    </span>
  </label>
</template>

<script setup lang="ts">
export interface TSwitcherProps {
  label?: string;
  isChecked?: boolean;
}

const props = defineProps<TSwitcherProps>();
</script>
