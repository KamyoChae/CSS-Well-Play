export default{
    pushIndex(state, id){
        let index = state.homeList.length- id-1
        state.content = state.homeList[index]
        console.log(state.content)
        this.commit("refreshIndex", index)
    },
    refreshIndex(state, index){
        state.nowIndex = index
        console.log("refresh：" + index)
    },
    beforeOne(state){
        let index = state.nowIndex
        index --
        if(state.homeList[index]){
            state.content = state.homeList[index]
            state.nowIndex = index
            return state.content.title
        }else{
            return "没有了"
        }
        

    }
}