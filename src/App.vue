<template>
  <div class="flex min-h-screen justify-center bg-white py-6 lg:py-12">
    <div class="max-w-[64rem] rounded-lg bg-white">
      <header class="mx-6 flex flex-col gap-6">
        <div class="flex flex-col items-center">
          <a href="#">
            <icon-logo width="76" height="36" />
          </a>
          <breadcrumb-list :breadcrumb-list="breadcrumbList" />
          <h1 class="text-center text-H1Bold font-medium text-black">
            Подписки «Клерка»
          </h1>
        </div>
        <tab-list
          :tabs-option="tabsLinkList"
          :active-tab-id="activeTabId"
          @update-active-tab-id="handleActiveTabChange"
        />
      </header>

      <main class="flex flex-col gap-8 rounded-2xl bg-grey3 px-3 py-12 md:px-6">
        <section class="flex flex-col gap-6">
          <p
            class="flex flex-wrap justify-center whitespace-pre text-center text-2xl font-medium"
          >
            <span> Выберите рассылки, которые</span>
            <span> подходят именно вам </span>
          </p>
          <custom-input type="email" placeholder="Электронная почта" />
          <custom-switcher label="Подписаться на все рассылки" />
        </section>

        <section class="flex flex-wrap justify-center gap-5">
          <subscription-card
            v-for="card in subscriptionData"
            :subscription-data="card"
          />
        </section>
      </main>

      <footer class="flex justify-center pt-12">
        <icon-emotion width="194" height="48" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CustomSwitcher from "@/components/Ui/CustomSwitcher.vue";
import SubscriptionCard from "@/components/SubscriptionCard.vue";
import BreadcrumbList from "@/components/BreadcrumbList.vue";
import CustomInput from "@/components/Ui/CustomInput.vue";
import TabList from "@/components/Ui/TabList.vue";
import IconLogo from "@/assets/icons/IconLogo.svg";
import IconEmotion from "@/assets/icons/IconEmotion.svg";
import { breadcrumbList, subscriptionData, tabsLinkList } from "./constants.ts";

const activeTabId = ref(0);

const handleActiveTabChange = (newTabId: number) => {
  activeTabId.value = newTabId;
};
</script>
