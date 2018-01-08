<template>
    <el-aside class="aside-box">
        <el-row class="tac">
            <div class="user-avatar">
                <dl class="user-avatar-ul">
                    <dt><span>三鑫智慧社区</span></dt>
                    <dd><span>公共管理平台</span></dd>
                    <dd><img src="../../static/image/2.png"></dd>
                    <dd><span>管理员</span><span>{{$store.state.userName}}</span></dd>
                </dl>
            </div>
            <el-col :span="24">
                <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <el-submenu 
                    v-if='Boolean(item.submenus)'
                    :index="idx.toString()" 
                    v-for='(item, idx) in $store.state.menu' 
                    :key='idx'
                    active-text-color="red">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>{{item.name}}</span>
                        </template>
                        <el-submenu v-if='Boolean(value.submenus)' :index="idx+'-'+index_sub" v-for='(value, index_sub) in item.submenus' :key='index_sub'>
                            <template slot="title">{{value.name}}</template>
                            <el-menu-item @click='change_route(v.type, i, v.name, value)' :index="idx+'-'+index_sub+'-'+i" v-for='(v, i) in value.submenus' :key='i'>{{v.name}}</el-menu-item>
                        </el-submenu>
                        <el-menu-item v-else :index="idx+'-'+index_sub">
                            <span slot="title">{{value.name}}</span>
                        </el-menu-item> 
                    </el-submenu>
                    <el-menu-item v-else :index="idx+'-'">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{item.name}}</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row> 
    </el-aside>
</template>
<script>
    import { getCookie } from '../utils/utils.js';
    export default {
        data () {
            return {
                meundata: [],
                user: ''
            }
        },
        created () {
            this.user = getCookie('token'),
            this.$http.get('/api/menu').then((res) => {
                this.meundata = res.data.data
            })
        },
        methods: {
            change_route (url, id, urlName, value) {
                this.$store.commit('update_url_name', urlName);
                this.$router.push({name: url, params: {id: id}})
            }
        }
    }
</script>
<style>
    .aside-box {
        width: 3.5rem !important;
        background: #545c64;
    }
    .aside-box::-webkit-scrollbar{
        display: none;
    }
    .user-avatar {
        background: #29282e;
        text-align: center;
        padding: .3rem 0;
    }
    .user-avatar-ul dt {
        font-family:JLinXin;
        font-size:0.24rem;
        color:#ffffff;
    }
    .user-avatar-ul dd:nth-child(2) {
        padding: .15rem 0;
    }
    .user-avatar-ul dd img{
        width: 35%;
        margin-top: .15rem;
    }
    .user-avatar-ul dd span { 
        font-size:0.18rem;
        color:#ffffff;
    }
    .user-avatar-ul dd:nth-child(2) span {
        font-family:"楷体";
        font-size:0.2rem;
    }
    .user-avatar-ul dd:nth-child(4) {
        padding: .15rem 0;
    }
    .user-avatar-ul dd:nth-child(4) span{
        margin: 0 .05rem;
        font-size: .14rem;
    }
    .el-menu li, .el-menu li div {
        line-height: 0.64rem;
        font-size: .18rem;
    } 
</style>