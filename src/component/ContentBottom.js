import React from 'react';
import List from './List';
import Setting from './Setting';

    export default class ContentBottom extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isSelect: 'List'
                
                
            };
            this.Select = this.Select.bind(this);
        }

        Select(item) {   
            if (this.state.isSelect !== item) {
                this.setState({
                    isSelect:item
                });
            }
        }

        render() {
            return (
            <div>    
                <div className="content-bottom">
                    <div className="select">
                        <div onClick= {()=>this.Select('List')} className = {this.state.isSelect === 'List' ? 'dash' : 'no-dash'} >List</div>
                        <div onClick= {()=>this.Select('Setting')} className = {this.state.isSelect === 'Setting' ? 'dash' : 'no-dash'} >Setting</div>
                    </div>
                    {this.state.isSelect === 'List' ? <List /> : <Setting Disconnect={this.props.Disconnect}/>}  
                    
                </div>
            </div>
            )
        }
    }    
  
  
  
  