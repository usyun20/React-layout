import React from 'react';

    export default class LoginArea extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                
            };   
        }

        render() {
            return (
                <div>
                    <div className="login-area">
                        <div className="login">Log in</div>
                        <input ref="text" placeholder="Email address" />
                        <input ref="text" placeholder="Password" />
                        <div className="login-btn" >
                            <input onClick={this.props.Logingin}type="button" value="Log in" />
                        </div>
                        <p>forgot my password</p>
                    </div>
                    <div>If you don't have a nununi mail account,apply <div className="blue">one</div> hrer</div>
                    <p>Copyright 阿物股份有限公司 Ａll rights reserved</p>
                </div>
            )
        }
    }    