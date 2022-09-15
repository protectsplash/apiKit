import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import VueMoment from 'vue-moment'
import VueMeta from 'vue-meta'
import i18n from './i18n'

import JsonViewer from 'vue-json-viewer'
Vue.use(JsonViewer)
Vue.config.productionTip = false

Vue.use(VueMoment)
Vue.use(VueMeta)
new Vue({
	router,
	store,
	vuetify,
	i18n,
	render: h => h(App),
}).$mount('#app')
