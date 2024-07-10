<template>
  <Teleport to="body">
    <div class="modal micromodal-slide" :id="id" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div
          class="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-1-title"
        >
          <header class="modal__header">
            <h2 class="modal__title" id="modal-1-title" v-if="title">
              {{ title }}
            </h2>
            <button
              class="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            ></button>
          </header>
          <main class="modal__content" :id="`${id}-content`">
            <slot></slot>
          </main>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import MicroModal from "micromodal";

type VModalProps = {
  id: string;
  title?: string;
};

const props = defineProps<VModalProps>();

onMounted(() => {
  MicroModal.init({
    openTrigger: "data-micromodal-open",
    closeTrigger: "data-micromodal-close",
    disableScroll: true,
    disableFocus: false,
    awaitCloseAnimation: true,
    debugMode: true,
  });
});

const open = () => {
  console.log("OPEN FROM MODAL");
  MicroModal.show(props.id);
};
const close = () => MicroModal.close(props.id);

defineExpose({ open, close });
</script>

<style lang="scss" scoped>
@import "./styles.scss";
</style>
