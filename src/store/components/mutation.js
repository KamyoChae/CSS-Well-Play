export default{
    pushIndex(state, index){
        state.content = state.homeList[index]
        console.log(index)
    }
}