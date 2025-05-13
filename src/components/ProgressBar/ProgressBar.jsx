import React from "react";
import "./ProgressBar.css";

const CoolRedBar = ({ percentage = 70, label = "Progress" }) => {
  return (
    <div className='bar-container'>
      <div className='bar-label'>{label}</div>
      <div className='bar-background'>
        <div className='bar-fill' style={{ width: `${percentage}%` }} />
        <div id='full_body' style={{ left: `${percentage}%` }}>
          <div id='right_arm'></div>
          <div id='right_leg'></div>
          <div id='head'></div>
          <div id='left_leg'></div>
          <div id='torso'></div>
          <div id='left_arm'></div>
        </div>
      </div>
      <div className='bar-percentage'>{percentage}%</div>
    </div>
  );
};

export default CoolRedBar;
