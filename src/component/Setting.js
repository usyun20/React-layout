import React from 'react';

    export default class Setting extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                
            };
            
        }

        render() {
            return (
                <div>    
                    <div className="setting">
                        <div className="setting-upper">
                            <div className="setting-left">Connection</div>
                            <div className="setting-right">
                                <div className="setting-text">
                                    <div className="setting-title">You're connected to nununi mail</div>
                                    <div className="setting-content">Account: Tigerflyapp</div>
                                </div>
                                <div className="setting-button" >
                                    <input onClick={()=>this.props.Disconnect()} type="button" value="Disconnect" />
                                </div>
                            </div>
                        </div>
                        <div className="setting-center">
                            <div className="center-title">Product Feed Sync</div>
                            <div className="onoffswitch">
                                <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="myonoffswitch" checked />
                                <label className="onoffswitch-label" for="myonoffswitch"></label>
                            </div>
                        </div>
                        <div className="setting-bottom">
                            <div>Use this service to produce Smart Tag for your products.<br/>
                                Combined with some marketing tools such as email,Fb,SEM,<br/>
                                provide customers with more accurate marketing content.
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }    
  
  
  
  