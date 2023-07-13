import React from 'react';
import './ChatHeader.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

function ChatHeader() {
  return (
    <div className="chatHeader">
        <h3>I am the header</h3>  

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
                <input placeholderSearch />
            </div>
        </div>
    </div>
  );
}

export default ChatHeader;
