import Vue from 'vue'
import Router from 'vue-router'
import question5 from '../components/question5'
import question6 from '../components/question6'
Vue.use(Router)
const routes =[
{
path:'/question5',
name:'question5',
component:question5
},
{
    path:'/question6',
    name:'question6',
    component:question6
    },
]
let router = new Router({routes})
export default router