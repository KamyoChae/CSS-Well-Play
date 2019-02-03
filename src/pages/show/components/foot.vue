<template>
<div class="foot_wrapper">
    <div class="swapper">
        <span class="pre">上一个：</span>
        <span class="next">下一个：</span>
    </div>
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
.foot_wrapper
    margin-top 3em
    .swapper
        display flex
        justify-content space-between
        color #259ce5
        cursor pointer
    .swapper span
        padding .5em 
        transition all .3s
    .swapper span:hover 
       border-bottom 3px solid red

</style>