<template>
  <div class="status-panel-container">
    
    <div class="grid grid-cols-2 gap-2 mb-4">
      <button 
        :class="['tab-toggle-btn', activeTab === 'bluetooth' ? 'active-tab' : 'inactive-tab']"
        @click="activeTab = 'bluetooth'"
      >
        Bluetooth
      </button>
      <button 
        :class="['tab-toggle-btn', activeTab === 'wifi' ? 'active-tab' : 'inactive-tab']"
        @click="activeTab = 'wifi'"
      >
        Wi-Fi
      </button>
    </div>

    <div class="menu-list-viewport">
      
      <div v-if="activeTab === 'bluetooth'" class="tab-view-group">
        <div class="menu-item">
          <span>Switch Button</span>
          <span class="status-badge connected">Connected</span>
        </div>
        <div class="menu-item"><span>Arc Gauge</span></div>
        <div class="menu-item"><span>Circle Gauge</span></div>
      </div>

      <div v-else class="tab-view-group">
        <div class="menu-item">
          <span>ESP32 Node 1</span>
          <span class="status-badge connected">Online</span>
        </div>
        <div class="menu-item">
          <span>ESP32 Node 2</span>
          <span class="status-badge disconnected">Offline</span>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
const activeTab = ref('bluetooth'); // Tracks sub-panel switches natively
</script>

<style scoped>
.status-panel-container {
  display: flex;
  flex-direction: column;
  width: 260px;
}
.tab-toggle-btn {
  padding: 8px;
  border-radius: 12px;
  font-family: "Geologica", sans-serif;
  font-size: 14px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}
.active-tab {
  background-color: rgba(255, 255, 255, 0.6);
  color: #000;
  font-weight: 500;
}
.inactive-tab {
  background-color: rgba(0, 0, 0, 0.05);
  color: #555;
}
.menu-list-viewport {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.menu-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 12px;
  border-radius: 14px;
  font-family: "Geologica", sans-serif;
  color: #000;
}
.menu-item:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.status-badge {
  font-size: 11px;
  padding: 2px 8px;
  border-radius: 20px;
  font-weight: 500;
}
.status-badge.connected { background: #a9e4d5; color: #134e40; }
.status-badge.disconnected { background: #fecaca; color: #991b1b; }
</style>