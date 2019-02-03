<template>
    <div class="fall_wrapper">
      <ul class="fall-ul">
          <li>
              <div class="item-box">
                    <img src="../../../images/1.png" alt="">
                    <div class="content">
                        <p class="title">纯css实现黄包车</p>
                        <div class="tags-time">
                            <div class="tags">
                                <span class="css3">css3</span>
                                <span class="h5">h5</span>
                    
                            </div>
                            <span class="time">2019-02-02</span>
                        </div>
                    </div>
              </div>
 
          </li> 


      </ul>
    </div>

</template>

<script>
export default {

}
</script>

<style lang='stylus' scoped>
@import '../../../assets/style/color.styl'
.fall_wrapper
    position relative 
    margin-top 2em
    .fall-ul
        min-height 500px
        width 85% 
        margin auto  
        font-size 0
        li 
            vertical-align top
            font-size 16px
            box-sizing border-box
            display inline-block
            width 20%  
            padding .5em
            background #eee   
            .item-box
                background #fff
                padding 1em .5em
                margin-bottom 1em
                box-shadow 0 0 30px #bbb
                $radius5()
                img
                    width 100%
                    $radius5()
                .content 
                    line-height 1.8em
                    font-size 1.2em
                    font-weight 400
                    .tags-time
                        font-size .8em
                        display flex
                        justify-content space-between
                            


</style>