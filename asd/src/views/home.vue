<template>
    <div>
        <el-container>
        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col :span="24">
                        <el-menu>
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
                        <el-submenu index="2">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品管理</span>
                            </template>
                            <el-menu-item-group>
                            <el-menu-item index="2-1">选项1</el-menu-item>
                            <el-menu-item index="2-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        <el-submenu index="3">
                            <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>商品分类</span>
                            </template>
                            <el-menu-item-group>
                            <el-menu-item index="3-1">选项1</el-menu-item>
                            <el-menu-item index="3-2">选项2</el-menu-item>
                            </el-menu-item-group>
                        </el-submenu>
                        </el-menu>
                    </el-col>
                    </el-row>
            </el-aside>
            <el-main>Main</el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
</style>