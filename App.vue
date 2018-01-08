<template>
    <div class="content">
         <router-view v-loading='$store.state.loading'></router-view> 
    </div>
</template>
<script>
  export default {
    name: 'App',
      data () {
        return {
                
        }
    }
  }
</script>
<style>
    html, body, .content {
         width: 100%;
         height: 100%; 
    }
    body {
        font-size: .14rem;
    }
</style>