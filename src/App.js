import React from 'react';
import './App.css';
import './font/iconfont.css';
import {Route,NavLink,Redirect,Switch,BrowserRouter as Router} from 'react-router-dom';
import Home from './components/Home/Home';
import Classify from './components/Classify/Classify';
import Groups from './components/Groups/Groups';
import Cart from './components/Cart/Cart';
import User from './components/User/User';
import Search from './components/Search/Search';
import Detail from './components/Goodsdetail/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavLink to="/search"></NavLink>
        </header>
        <footer>
          <NavLink to="/home" activeClassName="selected">
            <span className="iconfont">&#xe61e;</span>首页
          </NavLink>
          <NavLink to="/classify" activeClassName="selected">
            <span className="iconfont">&#xe64e;</span>分类
          </NavLink>
          <NavLink to="/groups" activeClassName="selected">
            <span className="iconfont">&#xe60f;</span>拼团
          </NavLink>
          <NavLink to="/cart" activeClassName="selected">
            <span className="iconfont">&#xe607;</span>购物车
          </NavLink>
          <NavLink to="/user" activeClassName="selected">
            <span className="iconfont">&#xe621;</span>我的
          </NavLink>
        </footer>
        
        <Switch>
          <Route path="/search" component={Search}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/classify" component={Classify}></Route>
          <Route path="/groups" component={Groups}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/cart/:id" component={Cart}></Route>
          <Route path="/user" component={User}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Redirect to="/" to="/home" exact></Redirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
