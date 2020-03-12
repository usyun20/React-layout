import React from 'react';

import ContentBottom from './ContentBottom';
import Disconnect from './Disconnect';
import ContentSetUp from './ContentSetUp';
import DisconnectUpper from './DisconnectUpper';

export default class Content extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          showBottom: 'ContentBottom',
      };
    this.Disconnect = this.Disconnect.bind(this);
  }

  Disconnect() {
    if(this.state.showBottom === 'ContentBottom') {
      this.setState({
        showBottom: 'Disconnect'
      });
    }
  }
  render() {
    return (
      <content>
        <div className="content-upper">
        <div className="upper-title">
            Connect your store to nununi mail
        </div>
        {this.state.showBottom === 'Disconnect' ? <DisconnectUpper /> : <ContentSetUp />}
      </div>
        {this.state.showBottom === 'Disconnect' ? <Disconnect GoLogin = {this.props.GoLogin} /> : <ContentBottom Disconnect={this.Disconnect}/>}
      </content>
    )
  }
}