import React from 'react';

    export default class List extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                
            };
            
        }

        render() {
            return (
                <div>    
                    <div className="list">
                        <div className="list-content-left">
                            <div className="notice-title">Create List</div>
                            <p>Build your list criteria using the filters on the right.</p>
                            <p>And you can export the list to Nununi mail.</p>
                        </div>
                        <div className="list-content-right">
                            <input ref="text" placeholder="Name your new list" />
                            <div className="filter">
                                <div className="filter-text">Filter type</div>
                                    <select className="signup">
                                        <option value="">Sign up</option>
                                        <option value="">All</option>
                                        <option value="">Birthday</option>
                                        <option value="">Recent order</option>
                                    </select>
                            </div>
                            <div>
                                <div className="filter">
                                    <div className="filter-text">Filter time</div>
                                    <select className="signup">
                                        <option value="">Three months</option>
                                        <option value="">Six months</option>
                                        <option value="">One year</option>
                                        <option value="">One month</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn">
                                <input className="button" type="button" value="Export" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }    
  
  
  
  