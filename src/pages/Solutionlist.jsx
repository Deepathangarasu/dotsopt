import React from 'react';
import { NavLink } from 'react-router-dom';

const Solutionlist = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/solutions/1">Object Detection and Classification</NavLink>
        </li>
        <li>
          <NavLink to="/solutions/2">Security and Surveillance</NavLink>
        </li>
        <li>
          <NavLink to="/solutions/3">Works Monitoring and Attendance</NavLink>
        </li>
        <li>
          <NavLink to="/solutions/4">Vehicle Detection and Monitoring</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Solutionlist;
