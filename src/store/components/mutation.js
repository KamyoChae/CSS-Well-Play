export default{
    pushIndex(state, id){
        
        let list = state.homeList
        let index = list.length- id-1
        state.content = list[index]
        console.log(state.content)
        try {
            
            state.preTitle = list[index-1].title  
        } catch (error) {
            state.preTitle = "没有了"
        }
        try {
            
            state.nextTitle = list[index+1].title  
        } catch (error) {
            state.nextTitle = "没有了"
        }
        this.commit("refreshIndex", index)
    },
    refreshIndex(state, index){
        state.nowIndex = index
        console.log("refresh：" + index)
    },
    swapone(state, flag){
        let index = state.nowIndex
        console.log(flag)
        index += flag
        if(state.homeList[index]){
            
            let list = state.homeList
            state.content = list[index]
            state.nowIndex = index
            if(flag > 0){  
                // 表示点击了next
                try { 
                    state.preTitle = list[index-flag].title
                    
                } catch (error) { 
                    state.preTitle = "没有了"
                }
                try {
                    state.nextTitle = list[index+flag].title
                } catch (error) {
                    state.nextTitle = "没有了"
                }
            }else{
                // 表示点击了pre
                try { 
                    state.preTitle = list[index+flag].title 
                } catch (error) { 
                    state.preTitle = "没有了"
                }
                try {
                    state.nextTitle = list[index-flag].title
                } catch (error) {
                    state.nextTitle = "没有了"
                } 
            }
        }else{
            
        }
         
    }
}