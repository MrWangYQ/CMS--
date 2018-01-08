<template>
    <div class="anaccp-box">
        <el-row>
            <el-col>
                <div class="block">
                    <span class="demonstration">活动列表</span>
                    <!-- <el-carousel trigger="click" height="200px">
                        <el-carousel-item v-for="(item, idx) in 4" :key="idx">
                            <div class="active-box">
                                <h3>{{ item }}</h3>
                                <h3>{{ item }}</h3>
                                <h3>{{ item }}</h3>
                                <h3>{{ item }}</h3>
                            </div>
                        </el-carousel-item>
                    </el-carousel> -->
                    <el-carousel :interval="4000" type="card" height="200px">
                        <el-carousel-item v-for="(item, idx) in activeList" :key="idx">
                        <div class="active-list">
                            <div class="active-content">
                                <span>"寿星齐相聚 温暖夕阳红"</span>
                                <span>社区第{{idx+1}}期生日派对</span>
                                <p>
                                    <span>活动时间： {{item.send}}</span>
                                </p>
                            </div>
                        </div>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </el-col>
        </el-row>
        <router-view></router-view> 
    </div>
</template>
<script>
    export default {
        data (){
            return {
                activeList: []
            }
        },
        created () {
            this.$http.get('/admin/menu/entry').then((res) => {
                this.$store.commit('update_menu', res.data.data)
            })
            this.$http.post('/useractive/info').then((res) => {
                this.activeList = res.data.list.slice(0, 5);
            })
        }
    }
</script>
<style scoped>
    .anaccp-box {
        padding: 0 .1rem;
    }
    .demonstration {
        font-size: .2rem;
        line-height: .6rem;
    }
    .block {
        margin: .1rem 0;
        padding: .1rem .17rem;
        box-sizing: border-box;
        background: #fff;
        text-align: center;
    }
    .active-box {
        display: -webkit-flex;
        text-align: center;
    }
    .active-box .active-list {
        width: 23%;
        height: 2rem;
        margin: 0 .1rem;
        background: #ffffff;
        text-align: center;
    } 
    .el-carousel__item .active-list {
        color: #01b09b;
        font-size: 14px;
        opacity: .8;
        height: 200px;
        margin: 0;
    }
    .active-list .active-content {
        height: 2rem;
        padding-top: .5rem;
        background: #fff;
    }
    .active-list .active-content span {
        display: block;
        line-height: .3rem;
        font-size: .2rem;
    }
    .active-content p {
        padding: .2rem 0;
    }
    .el-carousel__item--card.is-active {
        background: rgb(1, 176, 185);
        box-shadow: 0 0 0 0; 
        color: #fff !important;
    }
    .el-carousel__item--card {
        background: #eee;
        box-shadow: 0 0 2px #333;
    }
    .el-carousel .el-carousel--card {
        padding-left: 2px;
    }
</style>