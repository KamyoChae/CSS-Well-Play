<template>
<div class="body_wrapper">
   <div class="title-box">
       <h3 >{{this.myContent.title}}</h3>
       <div class="content">
            <div class="icon" v-for="item in this.myContent.tags" :key="item">
                <span :class="item">{{item}}</span> 
            </div>
            <span class="time">{{this.myContent.time}}</span>
       </div>
   </div>

   <div class="demo">
       <p>完成效果：</p>
       <div class="innerHtml" v-html="this.myContent.innerHtml">
           <!-- 这里插入html代码 css代码在跟文件style插入 -->
       </div>
   </div>


   <ShowFoot />
</div>

</template>

<script>
import ShowFoot from './foot'
import { mapState } from 'vuex';
export default { 
    data(){
        return { 
        }
    },
    components:{
        ShowFoot
    },
    methods:{
        checkContent(){ 
            let obj = this.myContent.id  
            if(obj === undefined){  
                this.$router.push("/")
            } 
        },
        getRootTags(){
            try {
                let root = document.getElementsByTagName("style")[0]
                let css = this.myContent.innerCss.replace(/\u200B/g, "")
                root.innerHTML = css
            } catch (error) {
                alert("该demo已失效，请换一个！")
            }
        },
        destroyedRoot(){
            document.getElementsByTagName("style")[0].innerHTML = ""
        },
 
    },
    computed:{
        ...mapState({
            myContent:state => state.content
        })
    },
    beforeMount(){
        this.checkContent()
    },
    mounted(){
        // console.log("装载一次content")
        this.getRootTags() 
    },
    updated(){
        // console.log("更新一次content")
        this.getRootTags() 
    },
    destroyed(){
        // console.log("销毁一次content")
        this.destroyedRoot()
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
        .innerHtml
            overflow hidden
</style>