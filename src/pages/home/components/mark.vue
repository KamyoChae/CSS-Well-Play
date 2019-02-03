<template>
    <div class="mark_wrapper">
       <div class="add-tags">
           书签
           <ul class="tags-list">
               <li>位置1
                   <span>X</span>
               </li>
               <li>位置2<span>X</span></li>
           </ul>
       </div>
       <div class="go" >></div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../../assets/style/color.styl'

.mark_wrapper 
    position fixed
    right 2em
    top 15em  
    width 50px
    .add-tags, .go
        box-sizing border-box
        position relative
        width 50px 
        height 50px 
        line-height 50px
        text-align center
        background #f0422a
        box-shadow 0 0 15px #f0422a
        color #fff
        $radius5() 
        cursor pointer
        .tags-list
            display none 
            opacity 0
            z-index -10
            position absolute
            box-sizing border-box
            $radius5()
            left 0
            top .5em
            width 150px
            padding .5em
            display block
            background #fff
            transition all .25s
            color #999
            li   
                line-height 30px
                padding 0 1em
                text-align left  
                span 
                    float right
                    display none
            li:hover, li:hover span
                background #eee
                display block
                color #999
                span:hover
                    color #353535
    .add-tags:hover .tags-list
        display block 
        opacity 1
        left -150px 
        z-index 1
    .go  
        transform rotateZ(-90deg)
        margin-top 2em
    .add-tags:hover, .go:hover
        background #fc6c32
                
</style>