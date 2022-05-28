import { Button, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Book.css';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ReorderIcon from '@mui/icons-material/Reorder';
import Dot from '../Components/Dot';
import { db } from '../firebase';
function Book() {
  const [dots, setDots] = useState();
  const [office, setOffice] = useState('Select Office');
  const [floor, setFloor] = useState('Select Floor');
  const [anchor, setAnchor] = React.useState(null);
  const [anchor2, setAnchor2] = React.useState(null);
  const open = Boolean(anchor);
  const open2 = Boolean(anchor2);

  const [locations, setLocations] = useState();
  const [spaces, setSpaces] = useState();

  let offices = [];
  let floors = [];
  let bureaus = [];

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

  const handleSetOffice = (office) => {
    setOffice(office);
    floors.length = 0;
    db.collection('locations')
      .doc(office)
      .collection('floors')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          floors.push({
            floor: doc.id,
          });
        });
      });
    setAnchor(null);
    console.log(floors);
    setSpaces(null);
    setTimeout(() => {
      setSpaces(
        floors.map(({ floor }, i) => (
          <MenuItem key={i} onClick={(e) => handleSetFloor(floor)}>
            {floor}
          </MenuItem>
        ))
      );
    }, 500);
  };

  const handleSetFloor = (floor) => {
    setFloor(floor);
    bureaus.length = 0;
    console.log(floor);
    setTimeout(() => {
      db.collection('locations')
        .doc(office)
        .collection('floors')
        .doc(floor)
        .collection('bureaus')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            bureaus.push({
              name: doc.id,
              x: doc.data().x,
              y: doc.data().y,
              booked: doc.data().booked,
              bookedBy: doc.data().bookedBy,
              bookedTill: doc.data().bookedTill,
            });
          });
        });
    }, 5500);
    console.log(bureaus);
  };

  db.collection('locations')
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        offices.push({
          title: doc.id,
        });
      });
    });

  useEffect(() => {
    setTimeout(() => {
      setLocations(
        offices.map(({ title }, i) => (
          <MenuItem key={i} onClick={(e) => handleSetOffice(title)}>
            {title}
          </MenuItem>
        ))
      );
    }, 500);
  }, []);

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
          {locations}
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
          {spaces}
        </Menu>
      </div>
      <div className="book__map">
        <div className="book__mapBureaus">
          <img
            className="book__mapBureausImg"
            alt="Office Map"
            src="https://firebasestorage.googleapis.com/v0/b/itec-2022.appspot.com/o/demo1.png?alt=media&token=dab00570-5595-46cd-afc2-8ca8389b346a"
          ></img>
          {dots}
          <Dot
            className="book__mapBureausDots"
            x="-27%"
            y="-100%"
            color="#DE3F1F"
          />
        </div>
      </div>
    </div>
  );
}

export default Book;
