import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWidgetStore = defineStore('widget', () => {
  const availableWidgets = ref([
    { id: 'push-btn', name: 'Push Button', type: 'PushButton' },
    { id: 'switch-btn', name: 'Switch Button', type: 'SwitchButton' },
    { id: 'arc-gauge', name: 'Arc Gauge', type: 'ArcGauge' },
    { id: 'circle-gauge', name: 'Circle Gauge', type: 'CircleGauge' },
    { id: 'spline-chart', name: 'Spline Chart', type: 'SplineChart' },
    { id: 'val-display', name: 'Value', type: 'ValueDisplay' }
  ])

  const activeWidgets = ref([])

  const addWidgetToCanvas = (widgetType) => {
    console.log(`Ready to place new grid item for: ${widgetType}`)
  }

  return {
    availableWidgets,
    activeWidgets,
    addWidgetToCanvas
  }
})