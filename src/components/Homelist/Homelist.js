import React,{Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom'

class List extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            recommend:[],
            url:"http://182.61.177.159:3000/data"
        }
    }
    componentDidMount(){
        this.getData();
        this.getDate();
    }
    getData(){
        axios.get(this.state.url).then((res)=>{
            this.setState({
                list:res.data.list.list
            })
        })
    }
    getDate(){
        axios.get(this.state.url).then((res)=>{
            this.setState({
                recommend:res.data.list.datalist
            })
        })
    }
    go(id){
        this.props.history.push('/detail/'+id);
    }
    render(){
        let {list,recommend} = this.state;
        return <Div>
            {
                Object.keys(list).map((item)=>{
                    return <div key={item}  className="ullist">
                        {
                            list[item].map((subItem,index)=>{
                                return <div key={index} className="list">
                                    <img src={subItem.pic} alt=""/>
                                    <p>{subItem.title}</p>
                                    {subItem.sellprice?<p className="price">￥{subItem.sellprice}</p>:""}
                                </div>
                            })
                        }
                    </div>
                })
            }
            <div className="datalist">
                <div className="datalist_title">
                    <p>精品推荐</p>
                </div>
            </div>
            <div className="recommend">
                {
                    recommend.map((item)=>{
                        return <li key={item.goodsid} onClick={this.go.bind(this,item.goodsid)}>
                            <img src={item.goodsurl} alt=""/>
                            <p className="title">{item.goodsname}</p>
                            <p className="price">￥{item.sellprice}</p>
                            <p className="data">{item.purchasenum}人购买</p>
                        </li>
                    })
                }
            </div>
        </Div>
    }
}
export default withRouter(List);
var Div=styled.div` 
    margin-bottom:1rem;
    float:left;
    .list{
        display:block;
        float:left;
        p{
            bottom:0;
            font-size:0.14rem;
        }
    }
    .list:not(:first-child){
        width:2.2rem;
        height:3.52rem;
        display:inline-block;
        padding:0.15rem;
        background:#fff;
        img{
            width:2rem;
        }
        .price{
            color:red;
        }
    }        
    .list:nth-child(1) img{
        width:7.5rem;
    }
    .datalist{
        width:100%;
        height:100%;
        float:left;
        margin-top:0.2rem;
        background:#fff;
        .datalist_title{
        width:100%;
        height:0.86rem;
        line-height:0.86rem;
            img{
                display:inline;
                float:left;
            }
            p{
                font-size:0.3rem!important;
                text-align:center;
            }
        }
    }
    .recommend{
        float:left;
        li{
            width:49%;
            height:5.7rem;
            background:#fff;
            float:left;
            border-bottom: .1rem solid #f1f1f1;
            img{
                width:3.6rem;
            }
            .title{
                box-sizing: border-box;
                padding: 0 .12rem;
                font-size: .28rem;
                font-weight: 400;
                text-align: left;
                color: #333;
                height: .84rem;
                line-height: .42rem;
                width: 100%;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
            }
            .price{
                color:#f23030;
                font-size: .28rem;
                margin: .1rem .1rem 0 .2rem;
                height: .32rem;
                line-height: .32rem;
            }
            .data{
                font-size: 0.1rem;
                margin-left: 0.2rem;
                color: rgb(152, 152, 152);
                line-height: 0.68rem;
            }
        }
        li:nth-child(2n+1){
            border-right: .1rem solid #f1f1f1;
        }
    }
`