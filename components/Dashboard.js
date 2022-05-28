import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import UI from './Dashboard/UI';
import Login from './Login';

function Dashboard() {
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, [dispatch]);

  console.log(auth.currentUser);

  return <div>{user ? <UI /> : <Login />}</div>;
}

export default Dashboard;
