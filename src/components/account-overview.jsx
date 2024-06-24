import React from 'react';
import SupportContact from './SupportContact';
import Panel from './Panel';
import './css/account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="container">
      <div className="support-contact-wrapper">
        <SupportContact props={data.supportContact} />
      </div>
      <div className="panel-wrapper">
        <Panel props={data.salesOverview}/>
      </div>
    </div>
    
  )
}

export default AccountOverview;