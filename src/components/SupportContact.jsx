import React from 'react';
import './css/SupportContact.css';
import dogSupport from './imgs/dog-support.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


const SupportContact = ({ props }) => {
  SupportContact.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  };

  return (
    <div className="support-contact-wrapper">
      <div className="sidebar">
        <h1 className="textAccount">ACCOUNT OVERVIEW</h1>
      </div>
      
      <div className="support-contact">
        <h1 className="title">YOUR FEEFO SUPPORT CONTACT</h1>
        <div className="contact-info">
          <img id="imgSupport" src={dogSupport} alt="Support" className="support-image" />
          <div className="contact-details">
            <div className="support-name">{props.name}</div>
            <div className="contact-methods">
              <span className="email">
                <FontAwesomeIcon icon={faMailBulk} /> {props.email}
              </span>
              <span> </span>
              <span className="phone">{props.phone}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContact;