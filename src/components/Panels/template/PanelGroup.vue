<template lang="pug">
Panel(
  v-for="(panel,index) in panels"
  :key="index"
  :config="panel"
  @close="closePanel(panel)"
) 
  component(
    :is="getDynamicComponent(panel.component)"
    @close="closePanel(panel)"
    :configProps="panel.props"
    @eventEmit="eventEmit($event, panel.events)"
  )
</template>

<script>
import { defineComponent, defineAsyncComponent, computed } from 'vue'
import { useStore } from 'vuex'
import Panel from './Panel'

export default defineComponent({
  name: 'PanelGroup',
  components: {
    Panel,
  },
  setup () {
    const store = useStore()
    const panels = computed(()=> store.state.panels.panels)
    
    const getDynamicComponent = (component) => {
      if (typeof component === 'string') {
        return component
      }
      return defineAsyncComponent(component)
    }

    const closePanel = (panel)=>{
      store.dispatch('panels/closePanel', panel)
    }

    const eventEmit = ($emit,events) => {
      const { name, props} = $emit
      events[name](props)
    }

    return {
      panels,
      getDynamicComponent,
      closePanel,
      eventEmit
    }
  }
})
</script>

