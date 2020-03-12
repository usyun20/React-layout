import React from 'react';
import './App.css';
import './onoffswitch.css';
import Content from './component/Content';
import Login from './component/Login';

export default class Disconnect extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      show: 'Content',
   
    };
    this.GoLogin = this.GoLogin.bind(this);
  }

  GoLogin() {
    let showpage = this.state.show;
    if(this.state.show === 'Content') {
      showpage = 'Login'
    }else{
      showpage = 'Content'
    };
    this.setState({
      show:showpage
    });
  }


  render() {
    return ( 
      <div className="App">
        {this.state.show === 'Login' ? <Login GoLogin = {this.GoLogin}/> : <Content GoLogin = {this.GoLogin} />}
      </div>
    )
  }
}
