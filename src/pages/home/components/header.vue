<template>
    <div class="wrapper">
        <div class="logobox">
            <div class="logo">
                <div class="text">CWP!</div>
                <div class="icon"> 
                    <span class="h5">HTML5</span>
                    <span class="css3">CSS3</span>
                    <span class="canvas">Canvas</span>
                    <span class="svg">SVG</span>
                </div>
            </div> 
        </div>
        <span class="infos">CSS Well Play!</span> 
        <div class="search">
            <input type="text" placeholder="请输入...">
        </div>

    </div>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped> 
            
@import '../../../assets/style/color.styl'
.wrapper 
    position relative
    padding 1em 0
    background #ffffff   
    z-index 2
    .logobox  
        margin-left 2em    
        display inline-block
        .logo
            display flex
            width 110px 
            height inherit
            .text
                width 4em
                height 4em 
                color #fff
                background $mMain
                $flexCenter()
                $radius5()
            .icon 
                margin-left 5px; 
                font-size .8em 
                color #ffffff
                display flex
                flex-direction column
                justify-content space-around
                span  
                    text-align center
                    display block 
                    border-radius 3px
                    padding 0
                .svg
                    background $svg
                .h5
                    background $h5
                .canvas
                    background $canvas
                .css3
                    background $css3
    span.infos
        display inline-block
        font-size 1.8em
    .search
        position absolute
        top 0
        bottom 0
        left 0
        right 0
        width 30%
        height 2.8em
        line-height 2.8em
        padding 0 1em
        border 1px solid #ddd
        $radius5()
        margin auto 
        
            


</style>