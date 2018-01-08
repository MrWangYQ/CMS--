<template>
    <div>
        <router-view></router-view>
        网格化管理平台
    </div>
</template>
<script>
    export default {
        created () {
            this.$http.get('/admin/menu/grid').then((res) => {
                console.log(res)
                this.$store.commit('update_menu', res.data.data)
            })
        }
    }
</script>
<style>

</style>