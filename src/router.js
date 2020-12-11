import Vue from "vue"
import VueRouter from "vue-router"
import Makeup from "./components/Makeup"

Vue.use(VueRouter)

const routes = [{
        path: "/makeup",
        component: Makeup
    }

]

export const router = new VueRouter({
    mode: "history",
    routes
})