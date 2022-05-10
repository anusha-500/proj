import Vue from 'vue'
import Router from 'vue-router'
import question5 from '../components/question5'
//import watchUpper from '../components/watchUppercase.vue'
Vue.use(Router)
const routes =[
{
path:'/question5',
name:'question5',
component:question5
},
]
let router = new Router({routes})
export default router