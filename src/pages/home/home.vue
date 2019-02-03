<template>
<div class="home_wrapper">
    <HomeHeader />
    <HomeMark /> 
</div>

</template>

<script>
import HomeHeader from "./components/header"
import HomeMark from "./components/mark"
export default {
    name:"Index",
    data() {
        return {
            
        }
    },
    components:{
        HomeHeader,
        HomeMark,
    }

}
</script>

<style lang="stylus" scoped>
.home_wrapper
    position absolute
    width 100%
    height 100%
    background #eee

</style>