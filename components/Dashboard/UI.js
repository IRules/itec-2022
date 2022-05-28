import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import { auth } from '../../firebase';
import styles from '../../styles/UI.module.css';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Book from './Book';
import Manage from './Manage';

function UI() {
  const [startDate, setStartDate] = React.useState(null);
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

  const user = auth.currentUser;
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.headerRight}>
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
        <div className={styles.headerDivider}></div>
        <IconButton className={styles.headerUser} onClick={handleClick}>
          {/* <AccountCircleIcon fontSize="large" /> */}
          <Avatar alt={user.email} src={user.photoURL} />
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
          <MenuItem onClick={handleSignOut}>Logout</MenuItem>
        </Menu>
      </div>
      {
        {
          book: <Book />,
          manage: <Manage />,
          analytics: '',
        }[window]
      }
    </div>
  );
}

export default UI;
