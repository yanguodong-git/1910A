import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 获取本地储存
let usermsg=sessionStorage.getItem('usermsg') ;
let list={"id":"","name":"","token":""};
// 如果有值 
if(usermsg){
  // 转json 对象
  list=JSON.parse(usermsg)
}

export default new Vuex.Store({
  state: {
    id:list.id,
    name:list.name,
    token:list.token
  },
  mutations: {
    setUserMsg(state,res){
      let {id,name,token} =res
      // console.log(id,name,token)
      state.id=id;
      state.name=name;
      state.token=token;
      // 本地储存
      sessionStorage.setItem("usermsg",JSON.stringify(res))
    }
  
  },
  actions: {
    checkUser({commit},res){
      // let {id,name,token} =res
      // console.log(id,name,token)
      commit('setUserMsg',res)
    }

  },
  modules: {
  }
})

