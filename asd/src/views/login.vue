<template>
  <div class="login">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
              </el-form-item>

              <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
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
    };
  }
};
</script>

<style lang="scss" scoped>
html,#app,body{
    margin: 0;
    padding: 0;
}
</style>