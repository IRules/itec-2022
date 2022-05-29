import { Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import React, { useState } from 'react';
import './Panel.css';
import { auth } from '../firebase';
import Book from './Book';
import Manage from './Manage';
import Analytics from './Analytics';

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
        {/* <AppBar
          position="static"
          style={{ background: '#000000' }}
          className="navbar"
        >
          <Container maxWidth="xl" className="color_links">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  className="navbar__button"
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <img
                className="logo"
                src={require('../Resources/logoamd.png')}
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              />

              <div className="centerlink">
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  <Button
                    onClick={setWindow('book')}
                    sx={{ my: 2, color: '#0175ca', display: 'block' }}
                  >
                    Book Bureau
                  </Button>
                  <Button
                    onClick={setWindow('manage')}
                    sx={{ my: 2, color: '#0175ca', display: 'block' }}
                  >
                    Manage
                  </Button>
                  <Button
                    onClick={setWindow('analytics')}
                    sx={{ my: 2, color: '#0175ca', display: 'block' }}
                  >
                    Analytics
                  </Button>
                </Box>
              </div>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar> */}
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
          manage: <Manage />,
          analytics: <Analytics />,
        }[window]
      }
    </div>
  );
}

export default Panel;
