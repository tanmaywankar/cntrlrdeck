<template>
  <div ref="containerRef" class="popover-wrapper-node">
    
    <customTrigger 
      labelText="Disconnected" 
      :arrowRotated="isMenuOpen"
      @click="toggleMenu"
    >
      <template #icon><BluetoothOffIcon/></template>
  </customTrigger>

    <Transition name="slide-fade">
      <div v-if="isMenuOpen" class="master-popover-panel">
        <listPanel />
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, useTemplateRef } from 'vue';
import { BluetoothOffIcon } from 'lucide-vue-next';
import customTrigger from './customTrigger.vue';
import listPanel from './listPanel.vue';

const isMenuOpen = ref(false);
const containerRef = useTemplateRef('containerRef');

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value; };

const handleClickOutside = (event) => {
  if (isMenuOpen.value && containerRef.value && !containerRef.value.contains(event.target)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => window.addEventListener('click', handleClickOutside));
onUnmounted(() => window.removeEventListener('click', handleClickOutside));
</script>

<style scoped>
.popover-wrapper-node {
  position: relative;
  display: inline-block;
}
.master-popover-panel {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 12px;
  background-color: rgba(201, 227, 237, 0.5);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 28px;
  padding: 14px;
  box-shadow: 0 12px 40px rgba(8, 86, 80, 0.12);
  z-index: 9999;
}
.slide-fade-enter-active { transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
.slide-fade-leave-active { transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); }
.slide-fade-enter-from, .slide-fade-leave-to {
  transform: translateY(15px) scale(0.94);
  opacity: 0;
}
</style>