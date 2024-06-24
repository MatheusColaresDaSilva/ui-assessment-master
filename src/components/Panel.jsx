import React, { useState } from 'react';
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload,faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import './css/Panel.css'; 
import PropTypes from 'prop-types';

const Panel = ({ props }) => {
  Panel.propTypes = {
        uploads: PropTypes.number.isRequired,
        successfulUploads: PropTypes.number.isRequired,
        linesAttempted: PropTypes.number.isRequired,
        linesSaved: PropTypes.number.isRequired,
        lastUploadDate: PropTypes.number.isRequired,
  };

  const [linesAdded, setLinesAdded] = useState();
  const [uploadSucess, setUploadSucess] = useState();
  const [linesSaved, setLinesSaved] = useState();

  useEffect(()=> {

    const diff = props.linesAttempted - props.linesSaved;
    const sucess = (props.successfulUploads / props.uploads) * 100;
    const lines = (props.linesSaved / props.linesAttempted) * 100;
    setLinesAdded(diff);
    setUploadSucess(sucess);
    setLinesSaved(lines)
  }, [props]);

  return (
    <div className="panel">
      <div className="block">
        <div className="row">
          <div className="column">
            <span className="salesText boldText ">             
                <FontAwesomeIcon icon={faUpload} color='blue' /> Sales</span>
          </div>
          <div className="column">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>
        <div className="row">
            <span className="updateText">You had <span className="boldText">{props.uploads} uploads</span> and <span className="boldText">{linesAdded}</span> lines added</span>
        </div>
      </div>
      <div className="second-block">
        <div className="sub-block">
          <div className="row">
            <div className="column">
                <span className="customPercentText boldText">{uploadSucess}%</span>
            </div>
            <div className="column">
            </div>
          </div>
          <div className="row">
            <span className='customPercentBellowText boldText'>UPLOAD SUCESS</span>
          </div>
        </div>
        <div className="sub-block">
          <div className="row">
            <div className="column">
                <span className="customPercentText boldText">{linesSaved}%</span>
            </div>
            <div className="column">
            </div>
          </div>
          <div className="row">
            <span className='customPercentBellowText boldText'>LINES SAVED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;