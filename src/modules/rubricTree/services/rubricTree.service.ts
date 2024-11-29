import { computed, ref, watch } from "vue";
import { getRubricTreeFetch } from "@/modules/rubricTree/services/rubricTree.transport.ts";
import { IRubricTreeTypes } from "@/shared/types.ts";

export const rubricTreeService = () => {
  const rubricTree = ref<IRubricTreeTypes[]>([]);
  const allowEmpty = ref(false);
  const isLoading = ref(false);
  const count = ref(0);

  const getRubricTree = async () => {
    try {
      isLoading.value = true;
      rubricTree.value = await getRubricTreeFetch(withEmptyRubrics.value);
      setInitialValue(rubricTree.value);
    } catch (e) {
      throw e;
    } finally {
      isLoading.value = false;
    }
  };

  const expandRow = (item: IRubricTreeTypes, isExpanded = false) => {
    if (item.children && item.children.length) {
      item.isExpanded = isExpanded;
    }
  };

  const incrementLevel = (item: IRubricTreeTypes, level = 0) => {
    item.level = level + 1;
  };

  const setInitialCheckedStatus = (item: IRubricTreeTypes) => {
    item.isChecked = false;
  };

  const resetCount = () => {
    count.value = 0;
  };

  const setInitialValue = (items: IRubricTreeTypes[]) => {
    items.forEach((item) => {
      expandRow(item);
      setInitialCheckedStatus(item);
      incrementLevel(item);
      calcTotalCount(item);

      if (item.children?.length) {
        setInitialValue(item.children);
      }
    });
  };

  const toggleExpand = (item: IRubricTreeTypes, nodes = rubricTree.value) => {
    for (const node of nodes) {
      if (node.id === item.id) {
        node.isExpanded = !node.isExpanded;
        return;
      }
      if (node.children && node.children.length) {
        toggleExpand(item, node.children);
      }
    }
  };

  const calcCount = (node: IRubricTreeTypes): number => {
    return (
      node.count +
      (node.children
        ? node.children.reduce((sum, child) => sum + calcCount(child), 0)
        : 0)
    );
  };

  const calcTotalCount = (node: IRubricTreeTypes) => {
    const totalCount = calcCount(node);
    node.totalCount = totalCount;
  };

  const setStatusForParent = (items: IRubricTreeTypes[]) => {
    let parentChecked = true;

    for (const item of items) {
      if (item.children && item.children.length) {
        item.isChecked = setStatusForParent(item.children);
      }

      if (!item.isChecked) {
        parentChecked = false;
      }
    }

    return parentChecked;
  };

  const updateCount = (items: IRubricTreeTypes[]): number => {
    let currentCount = 0;

    for (const item of items) {
      if (item.isChecked) {
        if (item.children && item.children.length && item.isChecked) {
          currentCount += item.totalCount || 0;
          continue;
        } else {
          currentCount += item.count;
        }
      }

      if (item.children && item.children.length) {
        currentCount += updateCount(item.children);
      }
    }

    return currentCount;
  };

  const setStatus = (item: IRubricTreeTypes, neededStatus: boolean) => {
    item.isChecked = neededStatus;

    if (item.children && item.children.length) {
      for (const child of item.children) {
        setStatus(child, neededStatus);
      }
    }
  };

  const changeStatus = (item: IRubricTreeTypes) => {
    const neededStatus = !item.isChecked;

    setStatus(item, neededStatus);
    setStatusForParent(rubricTree.value);

    count.value = updateCount(rubricTree.value);
  };

  const withEmptyRubrics = computed(() =>
    allowEmpty.value ? "/?allowEmpty=1" : "",
  );

  watch(allowEmpty, () => {
    getRubricTree();
    resetCount();
  });

  return {
    rubricTree,
    isLoading,
    allowEmpty,
    getRubricTree,
    changeStatus,
    toggleExpand,
    count,
  };
};
