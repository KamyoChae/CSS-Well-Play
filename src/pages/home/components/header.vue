<template>
    <div class="wrapper">
        <div class="logobox">
            <div class="logo">
                <div class="text">CWP!</div>
                <div class="icon"> 
                    <span class="svg">SVG</span>
                    <span class="css">CSS3</span>
                    <span class="html">HTML5</span>
                    <span class="canvas">Canvas</span>
                </div>
            </div>

            <span>CSS Well Play!</span>
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
 
// @import '../../assets/style/color.styl'
.wrapper
    height 5em;
    width 100%
    background #ffffff 
    border-bottom 2px solid ;
    border-image linear-gradient(to right, #F80, #2ED)
    border-image-slice 10
    .logobox
        height 100%
        width 200px
        margin-left 2em
        background red
        display flex
        // $flexCenter()
        .logo
            display flex
        .logo .text, .icon
            width 4em
            height 4em
            background #1758b2
            


</style>