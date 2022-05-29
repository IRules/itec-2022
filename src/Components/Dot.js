import { Button, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import './Dot.css';
import AdjustIcon from '@mui/icons-material/Adjust';
import moment from 'moment';
import { auth, db } from '../firebase';

function Dot(props) {
  const [date, setDate] = useState(moment(new Date()).format('DD-MM-YYYY'));
  const booked = false;
  const [anchor, setAnchor] = React.useState(null);
  const open = Boolean(anchor);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleBook = (e) => {
    e.preventDefault();

    console.log('merge');

    db.collection('locations')
      .doc(props.loc)
      .collection('floors')
      .doc(props.floor)
      .collection('bureaus')
      .doc(props.name)
      .set({
        booked: true,
        bookedBy: auth.currentUser.email,
        bookedTill: date,
      });
  };

  const handleChangeDate = (e) => {
    e.preventDefault();
    setDate(e.target.value);
  };

  console.log(date);

  return (
    <>
      <IconButton
        className="dots"
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
            defaultValue={date}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={handleChangeDate}
          />
          <br></br>
          <MenuItem
            sx={{
              display: 'flex',
              allignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={handleBook}
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
