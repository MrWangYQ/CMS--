<template>
         <el-tabs value='first'>
            <el-tab-pane label="活动介绍" name="first">
                <introduce></introduce>
            </el-tab-pane>
            <el-tab-pane label="邀请居民" name="second">
                <invite></invite>
            </el-tab-pane>
            <el-tab-pane label="居民报名" name="third">
                <apply></apply>
            </el-tab-pane>
            <el-tab-pane label="活动总结" name="fourth">
                <div v-for='(item, idx) in $store.state.datasum' :key='idx'> 
                    <summarys :itembool='item.hasDelement' :hasBtn='item.hasBtn' :id='idx'></summarys>
                 </div>
            </el-tab-pane>
        </el-tabs>
</template>
<script>
    import summarys from './ment_sub/summary.vue';
    import invite from './ment_sub/invite.vue';
    import introduce from './ment_sub/introduce.vue';
    import apply from './ment_sub/apply.vue';
    export default {
        data () {
            return {
                
            }
        },
        components: {
            summarys,
            invite,
            introduce,
            apply
        }
    } 
</script>
<style scoped>
    
    .el-tab-pane .el-table .el-table__body .cell {
        line-height: 1rem !important;
    }
</style>