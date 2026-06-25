<template>
  <button class="btn" @click="$emit('click')">
    <div class="widget-icon">
      <slot name="icon">icon</slot>
    </div>
    
    <span class="mx-2">{{ labelText }}</span>
    
    <div class="open-icon" :class="{ 'is-open': arrowRotated }">
      <span class="plus-sign"><ChevronDown /></span>
    </div>
  </button>
</template>

<script setup>
import { ChevronDown } from 'lucide-vue-next';
defineProps({
  labelText: { type: String, default: 'Button' },
  arrowRotated: { type: Boolean, default: false }
});

defineEmits(['click']);
</script>

<style scoped>
.btn {
  width: auto;
  min-width: 140px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  font-family: "Geologica", sans-serif;
  font-size: 16px;
  border: 2px solid var(--color-teal-900);
  color: var(--color-sand-base);
  background-color: var(--color-teal-deep);
  border-radius: 24px;
  cursor: pointer;
  transition: transform 0.2s ease;
}
.btn:active {
  transform: scale(0.95);
}
.widget-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
}
.plus-sign {
  display: inline-block;
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.open-icon.is-open .plus-sign {
  transform: rotate(180deg);
}
</style>