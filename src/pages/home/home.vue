<template>
<div class="home_wrapper">
    <HomeHeader />
    <HomeFall /> 
    <HomeMark /> 
</div>

</template>

<script>
import HomeHeader from "./components/header"
import HomeMark from "./components/mark"
import HomeFall from "./components/fall"
export default {
    name:"Index",
    data() {
        return {
            
        }
    },
    components:{
        HomeHeader,
        HomeMark,
        HomeFall
    }

}
</script>

<style lang="stylus" scoped>
.home_wrapper
    position absolute
    width 100% 
    min-height 100%
    background #eee

</style>