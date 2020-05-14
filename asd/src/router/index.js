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
   // 默认进入 登陆 页 
   {
    path:"/",
    redirect:"/login"
   }
  ]

const router = new VueRouter({
  routes
})

import axios from "axios"
import store from "@/store/index.js"

router.beforeEach((to,from,next)=>{
  //除了 /login 其他 验证token 
  if(to.path=="/login"){
    next()
  }else{
    // 调用 验证token 接口
    axios.get("/checktoken",{
      // 传参
      headers:{
        // token 在 vuex 中 获取的
        token:store.state.token
      }
    })
    .then(res=>{
      // 如果 返回值  error_code == 200 证明 token 存在 并 没有过期
      if(res.data.error_code == 200){
        // 进入 下一个路由页面
        next()
      }else{
        // 如果 返回值 error_code   != 200  证明 token 不存在 或者 已过期
        alert("登陆失败，重新登陆");// 弹框提示 登陆失败
        // next(false)
        next("/login"); // 进入登陆页面
      }
    })
  }
})

export default router