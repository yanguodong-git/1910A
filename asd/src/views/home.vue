<template>
  <div>
    <el-container>
      <el-header>
        header
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu class="zuo">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>管理员管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">添加管理员</el-menu-item>
                <el-menu-item index="1-2">设置管理员</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 导航2 -->
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">商品列表</el-menu-item>
                <el-menu-item index="2-2">添加商品</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <!-- 导航三 -->
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品分类管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">商品分类列表</el-menu-item>
                <el-menu-item index="3-2">添加商品分类</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
      computed: {
        ...mapState(['id','name','token'])
      }
  };
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 129px;
}
.zuo{
  text-align: left;
}
</style>