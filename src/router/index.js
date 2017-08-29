import Vue from 'vue'
import Router from 'vue-router'
import MarqueeText from '../components/MarqueeText.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MarqueeText',
      component: MarqueeText
    }
  ]
})
