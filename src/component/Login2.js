import React from 'react';

    export default class Login2 extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                
            };
        }

        render() {
            return (
                <div className="login-area">
                    <div className="login">Choose subcode</div>
                    <select className="signup">
                        <option value="">Tigerflyapp</option>
                    </select>
                    <div className="login-btn" >
                        <input onClick={this.props.GoLogin}type="button" value="Next" />
                    </div>
                </div>
            )
        }
    }    