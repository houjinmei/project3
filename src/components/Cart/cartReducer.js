var initState={
    cart:localStorage.cart?JSON.parse(localStorage.cart).cart:[]
}

var reducer = (state=initState,action)=>{
    var newState={...state}
    if(action.type==="ADD"){
        if(newState.cart.length===0){
            newState.cart.push(action.obj)
        }else{ 
            var flag=false;  //表示添加的商品购物车里没有
            newState.cart.forEach((item)=>{
                console.log(item,11,action.obj)
                if(item.goodsid===action.obj.goodsid){
                    item.count++;
                    flag=true;
                }
            })
            if(!flag) newState.cart.push(action.obj)
        }
    }
    else if(action.type==="INC"){
        newState.cart.forEach((item)=>{
            if(item.id===action.id){
                item.count++
            }
        })
    }else if(action.type==="DEC"){
        newState.cart.forEach((item)=>{
            if(item.id===action.id){
                if(item.count>1){
                    item.count--;
                }
            }
        })
    }else if(action.type==="CHANGE"){
        newState.cart.forEach((item)=>{
            if(item.goodsid===action.id){
                item.flag=!item.flag
            }
        })
    }

    localStorage.cart=JSON.stringify(newState)
    return newState;
}
export default reducer;