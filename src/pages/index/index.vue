<template>
<div class="index_wrapper">
    <router-link to="/Home">CSS Well Play!</router-link>
    <div class="index_background"></div>
</div>

</template>

<script>
export default {
    name:"Index",

}
</script>

<style lang="stylus" scoped>
.index_wrapper
    position absolute
    width 100%
    height 100%
    background #eee

</style>