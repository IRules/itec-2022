import React, { useState } from 'react';
import { auth } from '../firebase';
import './Login.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Alert, Snackbar } from '@mui/material';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const handleLogin = (e) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((a) => {})
      .catch((error) => setError(error.message));
  };
  return (
    <div className="Login">
      <div className="login__stripe">
        <div className="login__stripeLogo">
          <img
            alt="logo"
            src="https://ac.upt.ro/wp-content/uploads/2022/03/Untitled-design-17-aspect-ratio-230-130.png"
            className="login__stripeLogoImg"
          ></img>
        </div>
        <div className="login__stripePreForm">
          <div className="login__stripeForm">
            {error ? (
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="error"
                  sx={{ width: '100%' }}
                >
                  {error}
                </Alert>
              </Snackbar>
            ) : (
              ''
            )}
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
                type="email"
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
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Box>
            <div className="login__stripeFormButton">
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
      </div>
    </div>
  );
}

export default Login;
