//import App from '../App.vue';
import VueRouter from 'vue-router';
import Vue from 'vue';
import Form from '../components/Form.vue';
import Submission from '../components/Submission.vue';

Vue.use(VueRouter);

const routes = [
    //{path: '/', component: App},
    {path: '/person-form', name: 'Form', component: Form},
    {path: '/person-detail', name: 'Submit', component: Submission},
];

const router = new VueRouter({mode: 'history', routes});

export default router;