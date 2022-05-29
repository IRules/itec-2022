import {
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AdjustIcon from '@mui/icons-material/Adjust';
import ReorderIcon from '@mui/icons-material/Reorder';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Dot from '../Components/Dot';
import './Manage.css';
import { db } from '../firebase';

function Manage() {
  const [value, setValue] = useState();
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
  };
  const handleClick2 = (event) => {
    setAnchor2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  const handleClose2 = () => {
    setAnchor2(null);
  };

  const moveUp = () => {
    setY(yAxis - 9);
  };
  const moveLeft = () => {
    setX(xAxis - 9);
  };
  const moveRight = () => {
    setX(xAxis + 9);
  };
  const moveDown = () => {
    setY(yAxis + 9);
  };

  const handleSave = () => {
    db.collection('locations')
      .doc('Timisoara')
      .collection('floors')
      .doc('1')
      .collection('bureaus')
      .doc(value)
      .set({
        booked: false,
        bookedBy: '',
        bookedTill: '',
        x: xAxis,
        y: yAxis,
      });

    console.log(xAxis);
    console.log(yAxis);
    console.log(value);
  };

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="book">
      <div className="book__nav">
        <Button className="book__navButton" onClick={handleClick}>
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

        <Button className="book__navButton" onClick={handleClick2}>
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
      <div className="book__map">
        <div className="book__mapBureaus">
          <img
            className="book__mapBureausImg"
            alt="Office Map"
            src="https://firebasestorage.googleapis.com/v0/b/itec-2022.appspot.com/o/demo1.png?alt=media&token=dab00570-5595-46cd-afc2-8ca8389b346a"
          ></img>
          <Dot
            className="book__mapBureausDots"
            x={xAxis}
            y={yAxis}
            color="#DE3F1F"
          />
        </div>
      </div>
      <div className="breadcrumbs">
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
      <div className="options">
        <TextField
          id="outlined-basic"
          className="options__name"
          label="Bureau Name"
          variant="outlined"
          value={value}
          onChange={handleChange}
        />
        <Button onClick={handleSave}>
          <SaveAltIcon />
          &#160; Save
        </Button>
      </div>
      <div className="mover">
        <div className="mover__up">
          <Button onClick={moveUp}>
            <ArrowDropUpIcon fontSize="large" color="success" />
          </Button>
        </div>
        <div className="mover__middle">
          <Button onClick={moveLeft}>
            <ArrowLeftIcon fontSize="large" color="success" />
          </Button>
          <Button onClick={moveRight}>
            <ArrowRightIcon fontSize="large" color="success" />
          </Button>
        </div>
        <div className="mover__down">
          <Button onClick={moveDown}>
            <ArrowDropDownIcon fontSize="large" color="success" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Manage;
