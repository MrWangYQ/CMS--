<template>
    <el-main class="main-box">
        <el-row class="main-head">
            <div class="main-left">
                <el-col  class='bg'>
                    <el-menu
                    class="el-menu-demo"
                    mode="horizontal"
                    background-color="#fff"
                    text-color="#898989"
                    active-text-color="#01b0b9">
                        <router-link :to='{name: "Entrys"}'>
                            <el-menu-item index="1">一口式受理平台</el-menu-item>
                        </router-link>
                        <router-link :to='{name: "Grid"}'>
                            <el-menu-item index="2">网格化管理平台</el-menu-item>
                        </router-link>
                        <router-link :to='{name: "Publicsps"}'>
                            <el-menu-item index="3">公共服务平台</a></el-menu-item>
                        </router-link>
                    </el-menu>
                </el-col>
            </div>
            <div class="main-right">
                <el-col class="login-btn">
                <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-menu-item index="1"> 
                        <el-badge :value="12" class="item">
                            <el-button size="small">评论</el-button>
                        </el-badge>
                     </el-menu-item> 
                    <el-menu-item index="3">
                        <el-badge :value="3" class="item">
                        <el-button size="small">回复</el-button>
                    </el-badge></el-menu-item> 
                    <el-submenu index="2">
                        <template slot="title">管理员{{$store.state.userName}}</template>
                        <el-menu-item index="2-1">个人资料</el-menu-item>
                        <el-menu-item index="2-2">设置</el-menu-item>
                        <el-menu-item index="2-3" @click='loginOut'>退出</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            </div>
        </el-row>
        <el-row>
            <el-col>
                <el-breadcrumb separator-class="el-icon-arrow-right"  class="breadcrumb">
                    <el-breadcrumb-item><router-link to='/'>首页</router-link></el-breadcrumb-item>
                    <el-breadcrumb-item>······</el-breadcrumb-item>
                    <el-breadcrumb-item>{{$store.state.urlName}}</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <router-view></router-view>
    </el-main>
</template>
<script>
    import {delCookie} from '../utils/utils.js'
    export default {
        methods: {
            loginOut () {
                delCookie('token');
                this.$router.push({name: 'Login'});
            }
         }
     }  
</script>
<style>
    .main-head {
        background: #fff;
    }
    .main-left {
        float: left;
    }
    .main-left ul, .main-right ul {
        border-bottom: none;
    }
    .main-right {
        float: right;
    }
    .login-btn ul{
        background: #fff !important;
    }
    .main-box {
        padding: 0;
        background: #eee;
    }
    .breadcrumb {
        padding-left: .2rem;
        height: .5rem;
        line-height: .5rem;
        font-size: .18rem;
    }
    /* 顶部背景设置 */
     .main-box ul li{
        color: #333 !important;
        border-bottom-color: none;
        /* background-color: rgb(1, 176, 186) !important; */
    }
    /* 平台背景设置 */
    .main-box .main-left .el-menu-item.is-active {
        color: #fff !important;
        border-bottom-color: rgb(255, 208, 75) !important;
        background: rgb(1, 176, 186) !important;
    }
    /* 管理员左边的的背景设置 */
    .login-btn ul li {
        background-color: #fff !important;
    }
    /* 管理员的背景设置 */
    .login-btn ul li div{
        color: #333 !important;
        background-color: #fff !important;
    } 
    /* 划过设置 */
    .bg ul li:hover , .login-btn ul li ul li:hover{
        border-bottom-color: #fff;
        color: #fff !important;
        background-color: rgb(1, 176, 186) !important; 
    }
    /* 管理点击设置*/
    .main-right .el-menu--horizontal>.el-menu-item.is-active {
        color: #fff !important;
        border: none !important;
        background-color: #fff !important;
    }  
    /* 消息通知*/
    .el-badge__content.is-fixed {
        top: 7px;
        right: 10px;
    }
    .el-menu li div {
        line-height: .5rem;
    }
</style>