import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';

function ChatHeader() {
  return (
    <div className="chatHeader">
        {/* <h3>I am the header</h3>   */}

        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">
                    #
                </span>
                Test Channel Name
            </h3>
        </div>

        <div className="chatHeader__right">
            <NotificationsIcon />
            <AddLocationIcon />
            <PeopleAltIcon />

            <div className="chatHeader__search">
                <input placeholder="Search" />
                <SearchIcon />
            </div>

            <SendIcon />
            <HelpIcon />
        </div>
    </div>
  );
}

export default ChatHeader;
