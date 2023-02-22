<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'RenderJSX',
  props: {
    scope: {
      type: Object,
      default: null,
    },
    render: {
      type: Function,
      default: null,
    },
  },
  render(h) {
    return this.render(h, this.scope)
  },
})
</script>
