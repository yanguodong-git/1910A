<template>
  <div class="login">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="10">
          <div class="grid-content bg-purple">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item label="密码">
                <el-input v-model="form.password" show-password></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
      onSubmit(){
          console.log(this.form)
          this.$http.post("/api/login",{
            name:this.form.name,
            password:this.form.password
          }).then(res=>{
            console.log(res)
          })
      }
  }
}
</script>

<style>
html,#app,body,.login,.home{
    margin: 0;
    padding: 0;
    height: 100%; 
}
</style>