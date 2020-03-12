import React from 'react';
import ContentSetUp from './ContentSetUp';
import DisconnectUpper from './DisconnectUpper';

const ContentUpper = () => (
    
    <div className="content-upper">
        <div className="upper-title">
            Connect your store to nununi mail
        </div>
        {this.props.Disconnect === 'Disconnect' ? <DisconnectUpper /> : <ContentSetUp />}
    </div>
);
  
  export default ContentUpper;
