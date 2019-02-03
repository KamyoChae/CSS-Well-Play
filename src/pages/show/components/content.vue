<template>
<div class="body_wrapper">
   <div class="title-box">
       <h3>纯css实现金色小汽车</h3>
       <div class="content">
            <div class="icon"> 
                <span class="h5">HTML5</span>
                <span class="css3">CSS3</span>
                <span class="canvas">Canvas</span>
                <span class="svg">SVG</span>
            </div>
            <span class="time"> 2019-02-02</span>
       </div>
   </div>

   <div class="demo">
       <p>完成效果：</p>
       <div class="innerHtml">
           <!-- 这里插入html代码 css代码在跟文件style插入 -->
       </div>
   </div>


   <ShowFoot />
</div>

</template>

<script>
import ShowFoot from './foot'
export default { 
    components:{
        ShowFoot
    }
}
</script>

<style lang='stylus' scoped>
@import '../../../assets/style/color.styl'
.body_wrapper
    box-sizing border-box
    padding 5% 10%
    width 100% 
    .title-box
        h3
            font-size 2em
        .content
            line-height 3em 
            .icon
                display inline-block
            .time
                color #888
    .demo
        margin-top 1em 
        width 100% 
        background #fafafa
        p
            font-size 1.5em
            line-height 2.5em
            text-indent 2em
</style>