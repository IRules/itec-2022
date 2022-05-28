import { Button, IconButton, Menu, MenuItem, TextField } from '@mui/material';
import React from 'react';
import styles from '../../styles/Book.module.css';
import AdjustIcon from '@mui/icons-material/Adjust';
import {
  DatePicker,
  LocalizationProvider,
  AdapterDateFns,
} from '@mui/x-date-pickers';

function Dot(props) {
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
        className={styles.book__mapBureausDots}
        style={{ marginLeft: props.x, marginTop: props.y }}
        onClick={handleClick}
      >
        <AdjustIcon fontSize="large" sx={{ color: props.color }} />
      </IconButton>
      <Menu
        id="office-menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <br></br>
        &#160;&#160;
        <TextField
          id="date"
          label="Book from"
          type="date"
          defaultValue="2022-05-29"
          InputLabelProps={{
            shrink: true,
          }}
        />
        &#160;
        <TextField
          id="date"
          label="Book till"
          type="date"
          defaultValue="2022-05-30"
          InputLabelProps={{
            shrink: true,
          }}
        />
        &#160;&#160;
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
    </>
  );
}

export default Dot;
