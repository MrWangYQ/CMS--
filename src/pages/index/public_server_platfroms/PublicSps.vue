<template>
    <div>
        <div class="tab-content">
             <router-view></router-view> 
        </div>
    </div>
</template>
<script>
    export default {
        created () {
            this.$http.get('/admin/menu/public').then((res) => {
                this.$store.commit('update_menu', res.data.data)
            })
        }
    }
</script>
<style scoped>
    .tab-content {
        width: 98%;
        box-sizing: border-box;
        margin-left: 1%;
        padding: 0 0.2rem;
    } 
</style>