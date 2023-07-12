import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>I am the Sidebar</h2>

      <div className="sidebar__top">
        <h3>Soham Server</h3>
        <ExpandMoreIcon />
      </div>
    </div>
  );
}

export default Sidebar;
