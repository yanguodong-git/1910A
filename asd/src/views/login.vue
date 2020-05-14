<template>
  <div class="login">
      <el-row type="flex" class="row-bg form" justify="center" align="middle">
        <el-col :span="10">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item label="密码">
                <el-input placeholder="请输入密码" v-model="form.password" show-password></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
              </el-form-item>
            </el-form>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import { mapState } from "vuex"
    export default {
        // computed: {
        //     ...mapState(['id','name','token'])
        // },

        data(){
            return {
                form:{
                    name:"",
                    password:""
                }
            }
        },
        methods: {
            onSubmit() {
                // console.log(this.form);
                // 调用登陆接口
                this.$http.post("/login",{
                    name:this.form.name,
                    password:this.form.password
                }).then(res=>{
              

                    if(res.data.error_code == 200){
                        this.$store.dispatch('checkUser',res.data)
                        this.$router.push('/home')
                    }else{
                        alert("账号密码有错")
                    }
                   
                })
                // console.log("ssss")
            },
        
        }
    }
</script>

<style>
html,body,#app,.login,.form{
        margin: 0;
        padding: 0;
        height: 100%;
}
</style>