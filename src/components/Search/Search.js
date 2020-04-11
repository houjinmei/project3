import React,{Component} from 'react';
import styled from 'styled-components';
import axios from 'axios'
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";

class Search extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            image:[],
            url:"http://182.61.177.159:3000/data"
        }
    }
    componentDidMount(){
        this.getData();
        this.getImage();
    }
    getData(){
        axios.get(this.state.url).then((res)=>{
            console.log(res.data.list)
            this.setState({
                list:res.data.list.searchInfo
            })
        })
    }
    getImage(){
        axios.get(this.state.url).then((res)=>{
            this.setState({
                image:res.data.list.image
            })
        })
    }
    componentDidUpdate(){
        new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true
        })
    }
    render(){
        let {list,image}=this.state;
        return <Div>
            <div className="header">
                <span className="iconfont" onClick={this.props.history.go.bind(this,-1)}>&#xe63b;</span>
                <input type="text" placeholder="RAY面膜"/>
                <span className="iconfont">&#xe649;</span>
            </div>
            <div className="list">
                <ul> <p>热门搜索</p>
                {
                    list.map((item,index)=>{
                        return <li key={index}>{item.label}</li>
                    })
                }
                </ul>
            </div>
            <div className="image">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {
                            image.map((item,index)=>{
                                return <div className="swiper-slide" key={index}>
                                    <img src={item.adurl} alt=""/>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </Div>
    }
}
export default Search;
var Div=styled.div`
    width:100%;
    height:100%;
    .header{
        width:100%;
        height:0.96rem;
        background:#fff;
        border-bottom:0.02rem solid #eee;
        line-height:0.96rem;
        float:left;
        input{
            width:62%;
            height:0.46rem;
            border-radius:0.1rem;
            border:0;
            margin-top:0.25rem;
            background:#f3f3f3;
            float:left;
            padding-left:0.2rem;
            margin-right:0.7rem;
        }
        span{float:left;}
        span:first-child{
            padding-left:0.15rem;
            font-size:0.6rem;
            padding-right:0.3rem;
        }
        span:last-child{
            font-size:0.42rem;
            color:#ccc;
        }
    }
    .list{
        width:100%;
        float:left;
        height:3.7rem;
        background:#fff;
        margin-bottom:0.2rem;
        ul{
            padding:0.15rem 0.4rem;
            p{
                font-size: 0.28rem;
                height: 0.68rem;
                color: #999999;
                line-height: 0.68rem;
                margin-bottom: 0.1rem;
            }
            li{
                float:left;
                border:0.02rem solid #f3f3f3; 
                margin-right: 0.2rem;
                width: 26%;
                height: 0.56rem;
                font-size: 0.24rem;
                margin-bottom: 0.1rem;
                line-height: 0.52rem;
                text-align:center;
            }
        }
        
    }
    .image{
        width:100%;
        height:2.6rem;
        background:#fff;
        float:left;
        text-align:center;
        .swiper-container{
            padding:0.2rem;
            margin-bottom:0.2rem;
            .swiper-slide{
                margin-bottom:0.2rem;
                img{
                    width:96%;
                    height:90%;
                }
            }
        }
    }
`