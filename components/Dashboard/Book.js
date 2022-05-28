import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Book.module.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AdjustIcon from '@mui/icons-material/Adjust';
import ReorderIcon from '@mui/icons-material/Reorder';
import axios from 'axios';
import Dot from './Dot';

function Book() {
  const [locations, setLocations] = useState([]);
  const [office, setOffice] = useState('Select Office');
  const [floor, setFloor] = useState('Select Floor');
  const [anchor, setAnchor] = React.useState(null);
  const [anchor2, setAnchor2] = React.useState(null);
  const open = Boolean(anchor);
  const open2 = Boolean(anchor2);
  const handleClick = (event) => {
    setAnchor(event.currentTarget);
    setLocations(axios.get('/api/locations'));
    console.log(axios.get('/api/locations'));
  };
  const handleClick2 = (event) => {
    setAnchor2(event.currentTarget);
    setLocations(axios.get('/api/locations'));
    console.log(axios.get('/api/locations'));
  };
  const handleClose = () => {
    setAnchor(null);
  };

  const handleClose2 = () => {
    setAnchor2(null);
  };

  return (
    <div className={styles.book}>
      <div className={styles.book__nav}>
        <Button className={styles.book__navButton} onClick={handleClick}>
          <ApartmentIcon />
          &#160; {office}
        </Button>
        <Menu
          id="office-menu"
          anchorEl={anchor}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>Office-1</MenuItem>
          <MenuItem>Office-2</MenuItem>
          <MenuItem>Office-3</MenuItem>
        </Menu>

        <Button className={styles.book__navButton} onClick={handleClick2}>
          <ReorderIcon />
          &#160; {floor}
        </Button>
        <Menu
          id="floor-menu"
          anchorEl={anchor2}
          open={open2}
          onClose={handleClose2}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem>Floor-1</MenuItem>
          <MenuItem>Floor-2</MenuItem>
          <MenuItem>Floor-3</MenuItem>
        </Menu>
      </div>
      <div className={styles.book__map}>
        <div className={styles.book__mapBureaus}>
          <img
            className={styles.book__mapBureausImg}
            alt="Office Map"
            src="https://firebasestorage.googleapis.com/v0/b/itec-2022.appspot.com/o/demo1.png?alt=media&token=dab00570-5595-46cd-afc2-8ca8389b346a"
          ></img>
          <Dot
            className={styles.book__mapBureausDots}
            x="-27%"
            y="19%"
            color="#DE3F1F"
          />
        </div>
      </div>
    </div>
  );
}

export default Book;
