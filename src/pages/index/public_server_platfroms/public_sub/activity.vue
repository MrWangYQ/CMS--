<template>
    <div class="activity-top"> 
        <div class="tabtn"> 
            <div class="management" :class='{tabtn_left: btn_active}' @click='infoBtn'>信息管理</div>
            <div class="management" :class='{tabtn_left: btn_actived}' @click='activeBtn'>活动管理</div>
        </div>
        <div class="tabContent"> 
            <message-active v-if='btn_active'></message-active>
        </div> 
        <div class="tabContent"> 
            <message-ment v-if='btn_actived'></message-ment>
        </div>
    </div>
</template>
<script>
    import messageMent from './message_ment.vue';
    import messageActive from './message_active.vue';
    export default {
        data () {
            return {
                btn_active: false,
                btn_actived: true
            }
        },
        components: {
            messageMent,
            messageActive         
        },
        methods: {
            infoBtn () {
                this.btn_active = true;
                this.btn_actived = false;
            },
            activeBtn () {
                this.btn_active = false;
                this.btn_actived = true;
            }
        }
    }
</script>
 <style scoped>
     .tab-content {
        padding: 0!important;
        background: none;
        box-shadow: none;
    }
    .activity-top  { 
        width: 100%; 
        height: .6rem;
        background: #fff;
        line-height: .6rem;
        position: relative;
    } 
    .tabtn {
        width: 100%; 
        height: .5rem;
        line-height: .5rem;
        display: -webkit-flex;
        justify-content: center;
        position: absolute;
        bottom: 0.7rem;
    }
    .management {
        width: 2rem; 
        margin: 0 .1rem; 
        display: inline-block;
        text-align: center;
        border-radius: .1rem;
        border: 1px solid #ccc;
    }
    .tabtn_left {
        background: #01b0b9;
        color: #fff;
    } 
    .tabContent {
        width: 98%;
        padding: 0 1%; 
        background: #fff;
        margin-top: .7rem; 
    } 
</style> 