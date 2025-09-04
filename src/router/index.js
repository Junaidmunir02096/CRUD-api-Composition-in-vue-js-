import { createRouter, createWebHistory } from "vue-router";

import Add from "../components/students/Add.vue"
import Edit from "../components/students/Edit.vue"
import List from "../components/students/List.vue"
import View from "../components/students/View.vue"
import NotFound from "../view/NotFound.vue"



const routes =[
    {
        path:"/",
        name:"list",
        component:List
    },
    {
        path:"/add",
        name:"add",
        component:Add
    },
    {
        path:"/edit/:id",
        name:"edit",
        component:Edit
    },
    {
        path:"/view/:id",
        name:"view",
        component:View
    },
    {
        path:"/:pathMatch(.*)*",
        name:"NotFound",
        component:NotFound
    },
]


const router= createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:routes
})

export default router;