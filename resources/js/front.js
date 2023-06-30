// importiamo vue
import Vue from 'vue';
// importiamo vue-router
import VueRouter from 'vue-router';
// importiamo il component globale
import App from './views/App.vue';
// importiamo il file router.js
import router from './router.js';

window.Vue = require('vue');
Vue.use(VueRouter)

// creiamo l'istanza e renderizziamo l'app all'avvio
const app = new Vue({
    el: '#root',
    render: h => h(App),
    router
});
