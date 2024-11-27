import ImageClip from "@/assets/images/ImageClip.png";
import ImageClipBlack from "@/assets/images/ImageClipBlack.png";
import ImageScissors from "@/assets/images/ImageScissors.png";
import ImagePaidFree from "@/assets/images/ImagePaidFree.png";

export const subscriptionData = [
  {
    id: 0,
    label: "Перед рассветом",
    title: "Утренний бухгалтер",
    subtitle:
      "Самые важные новости и события за день. Кратко, по делу, структурировано.",
    itemList: [
      "Новости для бухгалтеров, ИП и директора",
      "Подборка статей за день",
    ],
    imageUrl: ImageClip,
    isChecked: true,
    numOfRecipients: 59342,
  },
  {
    id: 1,
    label: "После заката",
    title: "Ночной бухгалтер",
    subtitle:
      "Самая краткая газета о налогах и бухучете в мире — современная рассылка для чтения.",
    itemList: [
      "Анализ, оценка и только самое главное",
      "Лучшие комменты юзеров в обзоре",
    ],
    imageUrl: ImageClipBlack,
    isChecked: false,
    numOfRecipients: 37480,
  },
  {
    id: 2,
    label: "Раз в две недели",
    title: "Ножницы скидок",
    subtitle:
      "Подборка самых выгодных и полезных спецпредложений от надежных компаний.",
    itemList: [
      "Акции и скидки от лидеров рынка",
      "Те, кто подписался – экономят много денег 🤑",
    ],
    imageUrl: ImageScissors,
    isChecked: false,
    numOfRecipients: 92118,
  },
  {
    id: 3,
    label: "По мере появления анонсов",
    title: "Чемодан вебинаров",
    subtitle:
      "Подборка с анонсами бесплатных вебинаров на самые топовые темы при участии экспертов.",
    itemList: [
      "Никогда не пришлем платные вебинары",
      "Подборка топовых тем для вебинаров",
    ],
    imageUrl: ImagePaidFree,
    isChecked: false,
    numOfRecipients: 92082,
  },
];

export const breadcrumbList = ["Главная", "Рассылки", "Хлебные крошки"];

export const tabsLinkList = [
  {
    id: 0,
    title: "Рассылки",
  },
  {
    id: 1,
    title: "Соцсети",
  },
  {
    id: 2,
    title: "Мессенджеры",
  },
];
