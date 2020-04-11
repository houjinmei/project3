import React,{Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Swiper from 'swiper';
import "swiper/dist/css/swiper.css";
var Div=styled.div`
    width:100%;
    height:4rem;
    overflow:hidden;
    img{
        width:100%;
    }
`
class Myswiper extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
    }
    componentDidMount(){
        this.getData();
    }
     getData(){
        axios.get("http://182.61.177.159:3000/data").then((res)=>{
            this.setState({
                list:res.data.list.adlist
            })
        })
     }
    componentDidUpdate(){
        new Swiper ('.swiper-container', {
            autoplay:true,
            loop: true, 
            
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            }
        })
    }
    render(){
        let {list} =this.state;
        return <Div className="swiper">
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        list.map((item,index)=>{
                            return <div className="swiper-slide" key={index}>
                                <img src={item.picurl} alt=""/>
                            </div>
                        })
                    }
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Div>
    }
}
export default Myswiper;