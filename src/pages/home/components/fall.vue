<template>
    <div class="fall_wrapper">
      <ul class="fall-ul" ref="fallUl" > 
 
        <li v-for="(items, index) of this.liarr" :key="index">
            <div  class="item-box" 
                v-for=" item of items"
                :key="item.title"
                :data-link="item.nav" 
                @click="linkTo(item.nav, item.id)" 
            > 
                    <img  src="../../../images/1.png" alt="">
                    <div class="content">
                        <p class="title">{{item.title}}</p>
                        <div class="tags-time">
                            <div class="tags">
                               <span :class="tag" v-for="tag in item.tags" :key="tag">{{tag}}</span> 

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
import {mapState} from "vuex" 
import homeVue from '../home.vue';
export default {
    data(){
        return { 
            liarr: [],
            liLength: 5,
        }
    },
    computed:{
        ...mapState({
            homeList : state => state.homeList
        }),
  
    },
    methods:{
        linkTo(str, id){ 
            console.log(str, id)
            this.$store.commit("pushIndex", id)
            
            this.$router.push(str)  
        },
        renderList(){

            // 这里通过获取ul内子节点个数动态生成数组 
            // 然后通过遍历state传过来的数据动态插入到对应的数组中
            // 最后将数组中的数组分辨渲染到页面 
            // 实现vue不直接操作dom的瀑布流效果

            let pro = 0 
            let len = this.liLength 
             
            for(let i = 0; i < len; i++){
                this.liarr.push(new Array()) 
            }
 

            this.homeList.forEach((ele, index) => {
                
                if(index % len == 0){ // index = 5 的时候 pro变成0
                     pro = 0  
                }   
                this.liarr[pro].push(ele)
                pro ++  
            }); 
        },
    },
    mounted(){ 

        this.renderList() 
         
    }
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
                position relative
                background #fff
                padding 1em .5em
                margin-bottom 1em
                $radius5()
                transition all .3s
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
                        .tags span
                            margin 0 .1em
            .item-box:hover  
                box-shadow 0 0 20px #bbb


</style>