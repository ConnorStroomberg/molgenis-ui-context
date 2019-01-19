import Vue from 'vue'
import NavBar from './components/NavBar.vue'

Vue.config.productionTip = false

new NavBar({
  propsData: {
    // @ts-ignore
    molgenisMenu: window.molgenisMenu
  }
}).$mount('#molgenis-site-menu')
