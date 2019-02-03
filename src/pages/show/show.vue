<template>
    <div class="show_wrapper">
        <ShowNav />
        <div class="body-foot"> 
            <router-view />
            
        </div>
    </div>
</template>

<script>
import ShowNav from './components/nav' 

export default {

    name:"Show",
    components:{
        ShowNav,  

    }

}
</script>

<style lang='stylus' scoped>
.show_wrapper
    position relative
    .body-foot
        position relative
        margin-left 20%
</style>