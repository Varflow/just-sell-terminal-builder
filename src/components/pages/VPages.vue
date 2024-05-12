<template>
  <div class="pages-wrp">
    <div class="add-page" @click="addPage">Add new page</div>
    <div class="pages">
      <div
        v-for="page in pages"
        :key="page.id"
        :class="{ page: 1, selected: isSelected(page) }"
        @click="selectPage(page.id)"
      >
        {{ page.get("name") || page.id }}
        <div
          v-if="!isSelected(page)"
          @click.stop="removePage(page.id)"
          class="page-close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-trash-2"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";

const { editor } = defineProps<{ editor: any }>();

const pagesManager = editor?.Pages;

let pages = reactive<any>([]);
// const editor = inject<any>("editor");

const setPages = (pages) => {
  if (!pages) {
    return;
  }
  pages = [...pages];
};
const isSelected = (page) => {
  return pagesManager?.getSelected().id == page.id;
};
const selectPage = (pageId) => {
  return pagesManager?.select(pageId);
};
const removePage = (pageId) => {
  pages = pages.filter((page) => page.id !== pageId);
  return pagesManager?.remove(pageId);
};
const addPage = () => {
  console.log("add page");
  const len = pagesManager?.getAll().length;
  pagesManager?.add({
    name: `Page ${len + 1}`,
    component: "<div>New page</div>",
  });
};

onMounted(() => {
  setPages(pagesManager?.getAll());
  pages.push(...pagesManager?.getAll());
});
</script>

<style lang="scss" scoped>
.pages {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.page {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 14px;
  background-color: rgb(203 213 225);
  border-radius: 8px;

  font-family: "Inter";
  font-size: 14px;
  font-weight: 500;
  color: #fff;

  cursor: pointer;

  &.selected {
    background-color: #ff7a2e;
  }
}

.add-page {
  margin-bottom: 12px;
  cursor: pointer;
}

.page-close {
  font-size: 18px;
}
</style>
