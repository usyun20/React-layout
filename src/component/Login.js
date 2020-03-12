import React from 'react';
import nununiLogo from '../nununiLogo.png';
import LoginArea from './LoginArea';
import Login2 from './Login2';

    export default class Login extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isLogin: 'Login'
            };
            this.Logingin = this.Logingin.bind(this);
        }
        Logingin() {
            if (this.state.isLogin === 'Login') {
                this.setState({
                    isLogin:'Login2'
                });
            }
        }

        render() {
            return (
                <div className="login-page">    
                    <div className="logo">
                        <img src={nununiLogo} alt="nununi" />
                    </div>
                    {this.state.isLogin === 'Login2' ? <Login2 GoLogin = {this.props.GoLogin}/> : <LoginArea Logingin={this.Logingin}/>}
                </div>
            )
        }
    }    
  
  
  
  