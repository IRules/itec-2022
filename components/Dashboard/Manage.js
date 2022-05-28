import {
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/Manage.module.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AdjustIcon from '@mui/icons-material/Adjust';
import ReorderIcon from '@mui/icons-material/Reorder';
import axios from 'axios';
import Dot from './Dot';
import Mover from './Mover';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

function Manage() {
  const [locations, setLocations] = useState([]);
  const [office, setOffice] = useState('Select Office');
  const [floor, setFloor] = useState('Select Floor');
  const [anchor, setAnchor] = React.useState(null);
  const [anchor2, setAnchor2] = React.useState(null);
  const [xAxis, setX] = useState(0);
  const [yAxis, setY] = useState(0);
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

  const moveUp = () => {
    setY(yAxis - 7);
  };
  const moveLeft = () => {
    setX(xAxis - 7);
  };
  const moveRight = () => {
    setX(xAxis + 7);
  };
  const moveDown = () => {
    setY(yAxis + 7);
  };

  const handleSave = () => {};

  //   useEffect(() => {
  //     const listener = (event) => {
  //       if (event.code === 'ArrowLeft') {
  //         moveLeft();
  //       }
  //     };

  //     document.addEventListener('keydown', listener);

  //     return () => {
  //       document.removeEventListener('keydown', listener);
  //     };
  //   }, []);

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
            x={xAxis}
            y={yAxis}
            color="#DE3F1F"
          />
        </div>
      </div>
      <div className={styles.breadcrumbs}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit">
            Office
          </Link>
          <Link underline="hover" color="inherit">
            Floor
          </Link>
          <Typography color="text.primary">Bureaus</Typography>
        </Breadcrumbs>
      </div>
      <div className={styles.options}>
        <Button onClick={handleSave}>
          <SaveAltIcon />
          &#160; Save
        </Button>
      </div>
      <div className={styles.mover}>
        <div className={styles.mover__up}>
          <Button onClick={moveUp}>
            <ArrowDropUpIcon fontSize="large" color="success" />
          </Button>
        </div>
        <div className={styles.mover__middle}>
          <Button onClick={moveLeft}>
            <ArrowLeftIcon fontSize="large" color="success" />
          </Button>
          <Button onClick={moveRight}>
            <ArrowRightIcon fontSize="large" color="success" />
          </Button>
        </div>
        <div className={styles.mover__down}>
          <Button onClick={moveDown}>
            <ArrowDropDownIcon fontSize="large" color="success" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Manage;
