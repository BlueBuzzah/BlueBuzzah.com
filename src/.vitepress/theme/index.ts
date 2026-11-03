import Layout from './Layout.vue'
import Shot from './Shot.vue'
import Notices from './Notices.vue'
import Banner from './Banner.vue'
import Checklist from './Checklist.vue'
import BuyList from './BuyList.vue'
import FileButton from './FileButton.vue'

export default {
  Layout,
  enhanceApp({ app }) {
    app.component('Shot', Shot)
    app.component('Notices', Notices)
    app.component('Banner', Banner)
    app.component('Checklist', Checklist)
    app.component('BuyList', BuyList)
    app.component('FileButton', FileButton)
  },
}
