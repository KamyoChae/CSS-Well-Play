<template>
    <div>
        <ShowNav />
        <div class="body-foot"> 
            <router-view />
            <ShowFoot /> 
        </div>
    </div>
</template>

<script>
import ShowNav from './components/nav'
import ShowBody from './components/body'
import ShowFoot from './components/foot'
export default {

    name:"show",
    comments:{
        ShowNav,
        ShowBody,
        ShowFoot

    }

}
</script>

<style lang='stylus' scoped>

</style>