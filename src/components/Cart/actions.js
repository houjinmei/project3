// import axios from 'axios'
export default{
    // getDataAction(){
    //     return (dispatch)=>{
    //         axios.get("/tong/data").then((res)=>{
    //             console.log(res)
    //             // dispatch({
    //             //     type:"",
    //             //     data:res
    //             // })
    //         })
    //     }
    // }
    addAction(obj){
        return{
            type:"ADD",
            obj
        }
    },
    incAction(id){
        return{
            type:'INC',
            id
        }
    },
    decAction(id){
        return{
            type:"DEC",
            id
        }
    },
    change(id){
        return{
            type:"CHANGE",
            id
        }
    }
}