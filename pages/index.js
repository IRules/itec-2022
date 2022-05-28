import { createTheme, ThemeProvider } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import { auth } from '../firebase';
import reducer, { initialState } from '../reducer';
import { StateProvider, useStateValue } from '../StateProvider';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Dashboard />
      </StateProvider>
    </ThemeProvider>
  );
}

const theme = createTheme({
  // palette: {
  //   primary: {
  //     main: '#EBEBE7',
  //   },
  //   secondary: {
  //     main: '#9E9940',
  //   },
  // },
});
