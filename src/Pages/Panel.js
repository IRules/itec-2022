import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import './Panel.css';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import { auth } from '../firebase';
import Book from './Book';

function Panel() {
  const [window, setWindow] = useState('book');
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleSignOut = (e) => {
    auth
      .signOut()
      .then((out) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };
  const handleSettings = () => {};
  return (
    <div>
      <div className="header">
        <div className="headerRight">
          <Button onClick={(e) => setWindow('book')}>
            <ScheduleIcon />
            &#160; Book Bureau
          </Button>
          <Button onClick={(e) => setWindow('manage')}>
            <ManageAccountsIcon />
            &#160; Manage
          </Button>
          <Button onClick={(e) => setWindow('analytics')}>
            <AnalyticsIcon />
            &#160; Analytics
          </Button>
        </div>
        <div className="headerDivider"></div>
        <IconButton className="headerUser" onClick={handleClick}>
          {/* <AccountCircleIcon fontSize="large" /> */}
          <Avatar />
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleSettings}>Settings</MenuItem>
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      </div>
      {
        {
          book: <Book />,
          manage: '',
          analytics: '',
        }[window]
      }
    </div>
  );
}

export default Panel;
