import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path:"/login",
      component:()=>import("@/views/login.vue"),
      name:"login"
    },
    {
      path:"/home",
      component:()=>import("@/views/home.vue"),
      name:"home"
    },
    {
      //默认进入登陆页
      path:"/",
      redirect: "/login"
    }
]

const router = new VueRouter({
  routes
})

export default router
