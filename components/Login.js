import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from '../styles/Login.module.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((a) => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={styles.Login}>
      <div className={styles.login__stripe}>
        <div className={styles.login__stripeForm}>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              focused={false}
              id="outlined-basic"
              label="Username"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              focused={false}
              id="outlined-basic"
              label="Your password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          <Button
            variant="outlined"
            onClick={(e) => handleLogin()}
            type="submit"
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
