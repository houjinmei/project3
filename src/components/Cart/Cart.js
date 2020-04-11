import React,{Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import '../../font/iconfont.css';
import actions from './actions';
class Cart extends Component{
    constructor(props){
        super(props)
        this.state={
            count:''
        }
    }
    render(){
        return <Div>
            <div className="cart_head">
                <span className="iconfont" onClick={this.props.history.go.bind(this,-1)}>&#xe63b;</span>
                <span>购物车</span>
                <span>编辑</span>
                <span className="iconfont">&#xe6a3;</span>
            </div>
            <div className="clearfix">
                <p>跨仓-年终大促</p>
                <span>运费</span>
            </div>
            {
                this.props.list.map((item)=>{
                    return <div key={item.goodsid} className="box">
                        <div className="content">
                            <input type="checkbox" defaultChecked={item.flag} onChange={this.props.change.bind(this,item.goodsid)}/>
                            <img src={item.goodsurl} alt="" />
                            <h3>{item.goodsname}</h3>
                            {item.sellprice?<p>￥{item.sellprice}</p>:''}
                            <div className="btn">
                                <button onClick={this.props.inc.bind(this,item.id)}>+</button>
                                {item.count}
                                <button onClick={this.props.dec.bind(this,item.id)}>-</button>
                            </div>
                        </div>
                        
                    </div>
                })
            }
            <div className="count">
                <p>小计:  <span>￥{this.props.money()}. 00</span></p>
            </div>
            <div className="foot">
                <div className="cart_left">
                    <input type="checkbox"  defaultChecked="checked"/>
                    <p>合计: <span>￥{this.props.money()}. 00</span></p>
                    <p>商品总额: ￥{this.props.money()}. 00 - <i>立减:￥50.00</i></p>
                </div>
                <div className="cart_right">
                    <p>去结算({this.props.count()})</p>
                </div>
            </div>
        </Div>
    }
}
var mapState=(state)=>{
    return{
        list:state.cart.cart,
        count(){
            var t=0;
            state.cart.cart.forEach((item)=>{
                if(item.flag){
                    t +=item.count;
                }
                
            })
            return t;
        },
        money(){
            var s=0;
		 	state.cart.cart.forEach((item)=>{
		 		if(item.flag){
                     s+=item.count*item.sellprice;
                     
		 		}
		 	})
		 	return s;
        }
    }
}
var mapDispatch=(dispatch)=>{
    return{
        inc(id){
            dispatch(actions.incAction(id))
        },
        dec(id){
            dispatch(actions.decAction(id))
        },
        change(id){
            dispatch(actions.change(id))
        }
    }
}
export default connect(mapState,mapDispatch)(Cart);

var Div=styled.div`
    width:100%;
    height:100%;
    .cart_head{
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
            margin-left:-0.5rem;
        }
        span:last-child{
            margin-right:-0.3rem;
        }
        .iconfont{
            font-size:0.6rem;
        }
    }
    .clearfix{
        width:100%;
        height:0.98rem;
        background:#fff;
        float:left;
        margin-top:1.2rem;
        border-bottom:0.02rem solid #eee;
        line-height:0.98rem;
        p{
            float:left;
            font-size:0.3rem;
            font-weight:600;
            padding-left:0.6rem;
        }
        span{
            float:right;
            padding-right:0.3rem;
            color: #969696;
        }
    }
    .box{
        width:100%;
        height:100%;
        .content{
            width:100%;
            height:3.6rem;
            background:#fff;
            float:left;
            border-bottom:0.02rem solid #eee;
            input{
                float:left;
                margin-top:1.5rem;
                margin-left:0.3rem;
            }
            img{
                width:1.88rem;
                display:block;
                float:left;
                padding-top:2.6em;
            }
            h3{
                width:4.4rem;
                float:left;
            }
            p{
                font-size:0.35rem;
                color:#e71b29;
                font-weight:600;
                padding-top:1.5rem;
            }
            .btn{
                float:right;
                padding-right:0.3rem;
                font-size:0.32rem;
                button{
                    background:#fff;
                    margin:0.1rem;
                    padding:0.1rem 0.2rem;
                    border:0.02rem solid #EAEAEA;
                }
            }
        }
        
    }
    .count{
        width:100%;
        height:0.9rem;
        background:#fff;
        float:left;
        p{
            padding:0 0.4rem;
            line-height:0.9rem;
        }
        span{
            color:#E32525;
            font-size:0.26rem;
        }
    }
    .foot{
        width:100%;
        height:0.94rem;
        background:#fff;
        z-index:10;
        position:fixed;
        bottom:0;
        .cart_left{
            float:left;
            width:73%;
            height:100%;
            background:#eee;
            input{
                float:left;
                margin:0.3rem;
            }
            p{
                padding-top:0.05rem;
                span{
                    color: #E32525;
                    font-size: 0.32rem; 
                }
                i{
                    font-style:normal;
                }
            }
        }
        .cart_right{
            float:right;
            width:2rem;
            height:100%;
            background:#E32525;
            text-align:center;
            line-height:0.94rem;
            p{
                color:#fff;
                font-size:0.3rem;
            }
        }
    }
    
`