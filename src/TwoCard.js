import React from 'react';
import './App.css'; // Import CSS file for styling

const TwoCardComponent = () => {
  return (
    <div className="two-card-container">
      <div className="card">
        <h2><b>How to use Kro-Edit</b></h2>
        <ul>
          <li>Provide the URL below, for the video you want to edit</li>
          <li>Provide the captions, start and endtime for the given caption </li>
          <li>Hit the save button, and watch video with captions</li>
        </ul>
      </div>
      <div className="card">
        <h2>Check out our other apps</h2>
        <ul>
          <li><b>Workout Manager </b><a  href='http://13.201.61.59:4000/'>Click here </a></li>
          <li><b>Whatsapp Clone </b><a  href='https://github.com/howabsurd/Whatsapp_clone'>Click here </a></li>
         <li><b>Lets connect on Github </b><a  href='https://github.com/howabsurd'>Click here </a></li>
         <li>New cool application - Expense Manager <b>coming soon</b></li>
        </ul>
      </div>
    </div>
  );
};

export default TwoCardComponent;
