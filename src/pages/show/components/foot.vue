<template>
<div class="foot_wrapper">
    <div class="swapper">
        <span class="pre" @click="beforeone">上一个：{{this.$store.state.preTitle}}</span>
        <span class="next" @click="nextone">下一个：{{this.$store.state.nextTitle}}</span>
    </div>
</div>

</template>

<script>
import {mapState} from 'vuex'
export default {

    mounted(){
    },
    methods:{
        beforeone(){
            this.$store.commit("swapone", -1) 
        },
        nextone(){
            this.$store.commit("swapone", 1) 
        }
    }

}
</script>

<style lang='stylus' scoped>
.foot_wrapper
    padding-top 3em  
    .swapper
        width 100%
        display flex
        justify-content space-between
        color #259ce5
        cursor pointer
    .swapper span
        padding .5em 
        transition all .3s
    .swapper span:hover 
       border-bottom 3px solid #25a4bb

</style>