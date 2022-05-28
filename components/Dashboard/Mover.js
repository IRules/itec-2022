import { Button } from '@mui/material';
import React from 'react';
import styles from '../../styles/Mover.module.css';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function Mover() {
  return (
    <div className={styles.mover}>
      <div className={styles.mover__up}>
        <Button>
          <ArrowDropUpIcon fontSize="large" color="success" />
        </Button>
      </div>
      <div className={styles.mover__middle}>
        <Button className={styles.mover__left}>
          <ArrowLeftIcon fontSize="large" color="success" />
        </Button>
        <Button className={styles.mover__right}>
          <ArrowRightIcon fontSize="large" color="success" />
        </Button>
      </div>
      <div className={styles.mover__down}>
        <Button className={styles.mover__down}>
          <ArrowDropDownIcon fontSize="large" color="success" />
        </Button>
      </div>
    </div>
  );
}

export default Mover;
