import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Soham Server</h3>
        <ExpandMoreIcon />
      </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
            <div className="sidebar__header">
                <ExpandMoreIcon />
                <h4>Text Channels</h4>
            </div>

            <AddIcon className= "sidebar__addChannel" />
        </div>

        <div className="sidebar__channelsList">
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
      </div>
      </div>

      <div className="sidebar__voice">
        <SignalCellularAltIcon 
            className="sidebar__voiceIcon"
            fontSize="large"
        />
        <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
        </div>

        <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon />
            <CallIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
