import React,{Component} from 'react';
import axios from 'axios';
import styles from 'styled-components';
import '../../font/iconfont.css';
import {connect} from 'react-redux';
import actions from '../Cart/actions'

class Detail extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            url:"http://182.61.177.159:3000/data"
        }
    }
    componentDidMount(){
        this.getData();
    }
    getData(){
        var id=this.props.match.params.id;
        axios.get(this.state.url).then((res)=>{
                this.setState({
                    list:res.data.list.datalist.filter((it)=>it.goodsid===id)
                })
        })
    }
    go(id){
        this.props.history.push('/cart/'+id);
    }
    change(){
        // this.node.style.color="red";
    }
    render(){
        let {list} = this.state;
        return <Div>
            <div className="head">
                <span className="iconfont" onClick={this.props.history.go.bind(this,-1)}>&#xe63b;</span>
                <span>商品</span>
                <span>详情</span>
                <span>评价</span>
                <span className="iconfont">&#xe6a3;</span>
            </div>
            {
                list.map((item)=>{ 
                    return <div key={item.goodsid} className="goods">
                        <img src={item.goodsurl} alt=""/>
                        <p className="sellprice"><span>￥</span>{item.sellprice}</p>
                        <p className="goodsname">{item.goodsname}</p>
                        <p className="goodsdesc">{item.goodsdesc}</p>
                        <div className="specifications">
                            <span>已选</span>
                            <span className="name">{item.goodsname}</span>
                            <span className="iconfont">&#xe615;</span>
                        </div>
                        <div className="specifications">
                            <span>送至</span>
                            <span>河南省郑州市金水区</span>
                            <span className="iconfont">&#xe615;</span>
                        </div>
                        <div className="relation">
                            <div className="con">
                                {item.brandurl?<img src={item.brandurl} alt=""/>:''}
                                {/* <img src={item.brandurl} alt=""/> */}
                                <p>{item.country}</p>
                                <p>{item.brandname}</p>
                                
                                <span className="iconfont">&#xe615;</span>
                                 <span>进入品牌</span> 
                            </div>
                            {item.branddescription? <div className="desc"><p>{item.branddescription}</p></div> :""}
                            
                        </div>
                        <div className="transverse">
                            {
                                item.goodsurls.map((subItem,index)=>{
                                    return <li key={index}>
                                        <img src={subItem.url} alt="" />
                                        <p>{item.brandname}</p>
                                    </li>
                                })
                            }
                        </div>
                    
                    <div className="foot">
                        <span className="iconfont">&#xe627;</span>
                        <span className="iconfont" onClick={this.go.bind(this,item.goodsid)}>&#xe607;
                            <div className="count">
                                <p>{list.length}</p>
                            </div>
                        </span>
                        <span className="iconfont" onClick={this.change} ref={(node)=>this.node=node}>&#xe601;</span>
                        <span className="buy" onClick={this.go.bind(this,item.goodsid)}>立即购买</span>
                        <span className="buy" onClick={this.props.add.bind(this,{...item,count:1,flag:false})}>加入购物车</span>
                    </div>
                </div>
                })
            }
            
        </Div>
    }
}
var mapState=(state)=>{
    console.log(state)
    return{
        list:state
    }
}
var mapDispatch=(dispatch)=>{
    return{
        add(obj){
            dispatch(actions.addAction(obj))
        }
    }
}
export default connect(mapState,mapDispatch)(Detail);

var Div=styles.div`
    width:100%;
    height:100%;
    margin-bottom:1rem;
    .head{
        width:100%;
        height:0.96rem;
        background:#fff;
        position:fixed;
        display:flex;
        justify-content:space-around;
        align-items:center;
        top:0;
        span{
            font-size:0.3rem;
        }
        span:first-child{
            margin-left:-0.3rem;
        }
        span:last-child{
            margin-right:-0.1rem;
        }
        .iconfont{
            font-size:0.6rem;
        }
    }
    .goods{
        width:100%;
        padding-top:0.96rem;
        img{
            width:100%;
            display:block;
        }
        .sellprice{
            padding: 0.13rem 0.15rem 0.2rem 0.15rem;
            font-size: 0.56rem;
            color: #E60C12;
            background:#fff;
            span{
                font-size:0.44rem;
            }
        }
        .goodsname{
            font-size: 0.32rem;
            font-weight: 600;
            margin-bottom: 0.17rem;
            display: block;
            letter-spacing: 0.01rem;
            padding:0.2rem;
            background:#fff;
            margin:0;
        }
        .goodsdesc{
            padding:0.2rem;
            background:#fff;
            color: #9A9A9A;
            font-size: 0.25rem;
            margin-bottom:0.2rem;
        }
        .specifications{
            width:100%;
            height:1.1rem;
            line-height:1.1rem;
            background:#fff;
            font-size:0.30rem;
            margin-bottom:0.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            span:first-child{
                font-size:0.24rem;
                padding:0 0.3rem;
                color:#9a9a9a;
            }
            .name{
                
            }
            span:last-child{
                float:right;
                padding-right:0.3rem;
            }
        }
        .relation{
            width:100%;
            height:100%;
            background:#fff;
            float:left;
            .con{
                width:100%;
                height:1.5rem;
                float:left;
                border-bottom:1px solid #eee;
                img{
                    width:1.2rem;
                    display:inline-block;
                    margin:0.3rem;
                    border:1px solid #eee;
                    float:left;
                }
                p{padding-top:0.35rem; padding-left:0.35rem;}
                span{
                    float:right;
                    margin-top:-0.6rem;
                    padding-right:0.4rem;
                }
            }
            .desc{
                float:left;
                height:1.5rem;
                background:#fff;
                font-size: 0.24rem;
                color: #9a9a9a;
                line-height: 0.34rem;
                margin:0.2rem ;
                border-top: solid 1px #eaeaea;
                padding-top: 0.2rem;
            }
        }
        .transverse{
            width:100%;
            height:100%;
            float:left;
            margin-bottom:1.2rem;
            background:#fff;
            li{
                width:2.4rem;
                height:3rem;
                float:left;
                text-align:center;
                img{
                    width:2.65rem;
                    border:1px solid #eee;
                }
            }
            
        }
    }
    .foot{
        width:100%;
        height:1rem;
        background:#fff;
        z-index:100;
        float:left;
        position:fixed;
        bottom:0;
        span{
            width:1rem;
            height:1rem;
            line-height:1rem;
            .count{
                float:left;
                background:red;
                width:0.35rem;
                height:0.35rem;
                z-index:1000;
                position:absolute;
                bottom:0.6rem;
                left:1.6rem;
                border-radius:50%;
                p{
                    line-height:0.35rem;
                    text-align:center;
                    font-size:0.2rem;
                    color:#fff;
                }
            }
        }
        .iconfont{
            font-size:0.44rem; 
            float:left;
            text-align:center;
            
        }
        .buy{
            font-size:0.3rem;
            width:2.24rem;
            display:inline-block;
            text-align:center;
            color:#fff;
            background: #F23030;
        }
        .buy:last-child{
            background: #212121!important;
        }
    }
`