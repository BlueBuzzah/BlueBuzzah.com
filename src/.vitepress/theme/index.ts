import Layout from './Layout.vue'
import Shot from './Shot.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Shot', Shot)
  },
}
