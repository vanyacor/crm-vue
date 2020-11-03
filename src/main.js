import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter';
import currencyFilter from './filters/currency.filter';
import localizeFilter from './filters/localize.filter';
import tooltipDirective from '@/directives/tooltip.directive';
import messagePlugin from '@/utils/message.plugin';
import Loader from '@/components/app/Loader';
import Paginate from 'vuejs-paginate';
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min.js'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
Vue.config.productionTip = false

Vue.use(messagePlugin);
Vue.use(Vuelidate);
Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);
Vue.directive("tooltip", tooltipDirective);
Vue.component('Loader', Loader)
Vue.component('Paginate', Paginate)

firebase.initializeApp({
  apiKey: "AIzaSyD6cyLcolSERcs8zdHTlgTUahZ5pUHihkw",
  authDomain: "vue-crm-mine.firebaseapp.com",
  databaseURL: "https://vue-crm-mine.firebaseio.com",
  projectId: "vue-crm-mine",
  storageBucket: "vue-crm-mine.appspot.com",
  messagingSenderId: "692991609876",
  appId: "1:692991609876:web:83f00316d93ca08a75eb01"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

