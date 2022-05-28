import { Button, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import React from 'react';
import './Dot.css';
import AdjustIcon from '@mui/icons-material/Adjust';

function Dot(props) {
  const booked = false;
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const [startDate, setStartDate] = React.useState(null);
  const [startEnd, setEndDate] = React.useState(null);

  return (
    <>
      <IconButton
        className="dot"
        style={{ marginLeft: props.x, marginTop: props.y }}
        onClick={handleClick}
      >
        <AdjustIcon fontSize="large" sx={{ color: props.color }} />
      </IconButton>

      {booked ? (
        <Menu
          id="office-menu"
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>Booked till: 25/05/2022</MenuItem>
          <MenuItem>by: irulesmain@gmail.com</MenuItem>
        </Menu>
      ) : (
        <Menu
          id="office-menu"
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            sx={{
              display: 'flex',
              allignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {props.name}
          </MenuItem>
          <br></br>
          <TextField
            id="date"
            label="Book till"
            type="date"
            defaultValue="2022-05-30"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <br></br>
          <MenuItem
            sx={{
              display: 'flex',
              allignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Book!
          </MenuItem>
          <br></br>
        </Menu>
      )}
    </>
  );
}

export default Dot;
