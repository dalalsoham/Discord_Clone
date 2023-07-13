import React from 'react';
import './Sidebar.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CallIcon from "@mui/icons-material/Call";
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic';
import HeadsetIcon from '@mui/icons-material/Headset';
import SettingsIcon from '@mui/icons-material/Settings';

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
      <div className="sidebar__profile">
          <Avatar src="https://pbs.twimg.com/profile_images/1667789941643055104/VtxxOHfB_400x400.jpg" />
          <div className="sidebar__profileInfo">
            <h3>mr_sd_jack_003</h3>
            <p>#thisismyid</p>
          </div>

          <div className="sidebar__profileIcons">
            <MicIcon />
            <HeadsetIcon />
            <SettingsIcon />
          </div>
      </div>
    </div>
  );
}

export default Sidebar;
