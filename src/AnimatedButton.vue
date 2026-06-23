<template>
  <div ref="menu-container" class="floating-box-container">
    <Transition name="slide-fade">
    <div v-if="isOpen" class="popover-panel">
      <div
        v-for="widget in widgetStore.availableWidgets"
        :key="widget.id"
        class="menu-item"
        @click="widgetStore.addWidgetToCanvas(widget.type)"
      >
        <div class="widget-icon">H</div>
        <span>{{ widget.name }}</span>
      </div>

    </div>
    </Transition>
    <button class="btn" @click="toggleButton">
      <span class="mx-3">Add</span>
      <div
        class="open-icon p-2 m-2 rounded-full"
        :class="{ 'is-open': isOpen }"
      >
        <Plus class="plus-sign" size="24" />
      </div>
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Plus } from "lucide-vue-next";
import { useWidgetStore } from "./stores/widgetStore";
import { onMounted, onUnmounted, useTemplateRef } from "vue";

const menuContainerRef = useTemplateRef("menu-container");

const handleClickOutside = (event) => {
  if (
    isOpen.value && 
    menuContainerRef.value && 
    !menuContainerRef.value.contains(event.target)
  ) {
    isOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
const widgetStore = useWidgetStore();
const isOpen = ref(false);

const toggleButton = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style>
.btn {
  width: 118px;
  height: 48px;
  display: flex;
  justify-content: space-evenly;
  font-family: "Geologica";
  align-items: center;
  font-size: 20px;
  border: 2px solid var(--color-teal-900);
  color: var(--color-sand-base);
  font-weight: 400;
  border-radius: 24px;
  background-color: var(--color-teal-deep);
  box-shadow: 0 6px 18px rgba(8, 86, 80, 0.3);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:active {
  transform: scale(0.95);
}

.floating-box-container {
  position: fixed;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  z-index: 9999;
}

.popover-panel {
  position: relative;
  width: 260px;
  height: 270px;
  overflow-y: scroll;
  background-color: rgba(201, 227, 237, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 28px;
  padding: 10px;
  box-shadow: 0 12px 40px rgba(8, 86, 80, 0.12);
  display: flex;
  flex-direction: column;
   scrollbar-width: none;
}


.menu-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-radius: 20px;
  cursor: pointer;
}

.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.3);
}

.widget-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--color-teal-deep);
  box-shadow: 0 2px 8px rgba(8, 86, 80, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-sand-base);
}

.menu-item span {
  font-family: "Geologica", sans-serif;
  font-size: 18px;
  color: #000000;
  font-weight: 400;
}

.open-icon {
  background-color: #ffffff22;
}
.plus-sign {
  transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.27, 1.9);
  transform-origin: center center;
}
.open-icon.is-open .plus-sign {
  transform: rotate(135deg);
}

.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px) scale(0.92);
  opacity: 0;
}
</style>
