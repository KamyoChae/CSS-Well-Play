<template>
<div class="nav_wrapper">

    <div class="top-box">
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
        <div class="infos">
            <p class="title">CSS Well Play!</p> 
            <p class="text">css能做出哪些惊艳的东西？</p>
            <p class="about">about me</p>
        </div> 
   
    </div>
    
    <ul class="ul-list">
        <router-link :to='{name:"content"}' tag="li">这里是一个超链接</router-link> 
        <router-link to="/" tag="li">这里是一个超链接</router-link>
        <router-link to="/" tag="li">这里是一个超链接</router-link>
        <router-link to="/" tag="li">这里是一个超链接</router-link>
        <router-link to="/" tag="li">这里是一个超链接</router-link>
        <router-link to="/" tag="li">这里是一个超链接</router-link>
        <router-link to="/" tag="li">这里是一个超链接</router-link>
        <router-link to="/" tag="li">这里是一个超链接</router-link>
    </ul>
    
</div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '../../../assets/style/color.styl'
.nav_wrapper 
    position fixed 
    width 20%
    height 100%
    overflow-y scroll  
    .top-box 
        padding 2em 0 
        .logobox   
            vertical-align top
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
        .infos
            display inline-block   
            .title
                font-size 1vw
            .text
                line-height 2vw
                font-size .7vw
            .about
                font-size .8vw

    .ul-list
        background #f6f6f6
        li
            line-height 2.5em
            padding 0 0 0 2em 
            cursor pointer 
        li:nth-child(even)
            background #fff
        li:hover 
                background #eee






</style>