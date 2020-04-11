import React,{Component} from 'react';
import Swiper from '../Swiper/Swiper'
import axios from 'axios';
import styled from 'styled-components';
import List from '../Homelist/Homelist';
import '../../font/iconfont.css';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            url:"http://182.61.177.159:3000/data",
            menulist:[],
            noticelist:[]
        }
    }
    componentDidMount(){
        axios.get(this.state.url).then((res)=>{
            console.log(res)
            this.setState({
                menulist:res.data.list.menulist
            })
        })
        this.getData();
    }
    getData(){
        axios.get(this.state.url).then((res)=>{
            this.setState({
                noticelist:res.data.list.noticelist
            })
        })
    }
    gosearch(){
        this.props.history.push("/search");
    }
    render(){
        let {menulist,noticelist} = this.state;
        return <Div className="home">
            <div className="search" onClick={this.gosearch.bind(this)}>
                <span className="iconfont">&#xe649;</span>
                <input type="text" placeholder="RAY面膜"/>
                <span className="iconfont">&#xe622;</span>
            </div>
            <Swiper/>
            <div className="menu">
                {
                    menulist.map((item,index)=>{
                        return <li key={index}>
                            <img src={item.icon} alt=""/>
                            <p>{item.menu}</p>
                        </li>
                    })
                }
            </div>
            <div className="noticelist">
                {
                    noticelist.map((item,index)=>{
                        return <li key={index}>
                            <img src={item.pic} alt=""/>
                        </li>
                    })
                }
                <div className="notices"><i>优品速报</i><span> 再不买又要涨价了，宝宝奶粉囤起来></span></div>
            </div>
            <List/>
        </Div>
    }
}
export default Home;
var Div=styled.div`
    width:100%;
    height:100%;
    .search{
        position:absolute;
        width:100%;
        height:0.88rem;
        z-index:11;
        color:#fff;
        input{
            width:5.4rem;
            height:0.55rem;
            border-radius:0.1rem;
            opacity:0.3;
            margin-left:0.3rem;
            margin-top:0.1rem;
            color:#fff;
            padding-left:0.6rem;
            font-size:0.3rem;
        }
        /* input:-webkit-input-placeholder{
            color:#fff;
        } */
        span:first-child{
            position:absolute;
            left:0.55rem;
            top:0.3rem;
            color:#f5f5f5;
        }
        span:last-child{
            font-size:0.45rem;
            color:#f5f5f5;
            padding-left:0.2rem;
        }
    }
    .menu{
        height:1.8rem;
        background:#fff;
        display:flex;
        align-items: center;
        justify-content: space-around;
        margin-bottom: .2rem;
        li{
            text-align: center;
            display: flex;
            flex-direction: column;
            img{
                width:0.88rem;
                display:block;
            }
            p{
                line-height: 0.32rem;
                padding-top:0.1rem;
            }
        }
    }
    .noticelist{
        width:100%;
        height:5.5rem;
        float:left;
        background:#fff;
        margin-bottom:0.2rem;
        li img{ display:block;}
        li:nth-child(1){
            width:100%;
            float:left;
            img{
                width:100%;
            }
        }
        li:nth-child(2){
            width:50%;
            float:left;
            img{
                width:100%;
            }
        }
        li:nth-child(3){
            width:50%;
            float:right;
            img{
                width:100%;
            }
        } 
        .notices{
            width:100%;
            height:0.76rem;
            line-height:0.76rem;
            float:left;
            border-top:0.02rem solid #f5f5f5;
            background:#fff;
            i{
                color:rgb(242, 48, 48);
                font-size:0.3rem;
                padding-left:0.3rem;
                padding-right:0.2rem;
            }
            span{
                font-size:0.28rem;
            }
        } 
    }
    
`