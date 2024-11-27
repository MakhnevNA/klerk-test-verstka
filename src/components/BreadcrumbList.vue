<template>
  <nav aria-label="Breadcrumb">
    <ul class="inline-flex flex-wrap items-center gap-2">
      <li
        v-for="(item, index) in props.breadcrumbList"
        :key="index"
        class="inline-flex flex-nowrap items-center gap-2 text-[0.815rem] text-grey1"
      >
        <span v-if="index"> → </span>
        <a
          href="#"
          class="inline-flex items-center transition-colors duration-200 hover:text-black"
        >
          {{ item }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface IBreadcrumbsListProps {
  breadcrumbList: string[];
}

const props = defineProps<IBreadcrumbsListProps>();
</script>
