import Vue from 'vue'
import Vuetify from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
  }

export default new Vuetify(opts)