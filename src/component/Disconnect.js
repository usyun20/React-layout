import React from 'react';

    export default class Disconnect extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                   
            };
        }

        render() {
            return ( 
           <div className="setting">     
                <div className="setting-upper">
                    <div className="setting-left">Connection</div>
                    <div className="setting-right">
                        <div className="setting-text">
                            <div className="setting-content">Click Connect to install the integration.</div>
                        </div>
                        <div className="setting-button" >
                            <input onClick={()=>this.props.GoLogin()} className="button" type="button" value="Connect" />
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    }    
  
  
  
  