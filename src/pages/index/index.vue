<template>
    <el-container class="container-box">
        <sx-menu-base></sx-menu-base>  
        <sx-main-base></sx-main-base>
    </el-container>
</template>
<script>
    import sxMenuBase from '../../menu/menu.vue'
    import sxMainBase from '../../main/main.vue'
    export default {
        components: {
            sxMenuBase,
            sxMainBase
        }
    }
</script>
<style scoped>
    .container-box {
        width: 100%;
        height: 100%;
    }
    
</style>