var list={
    list:[]
}
var reducer=(state=list,action)=>{
    var state=action.obj
    var newState={...state}
    return newState;
}
export default reducer;