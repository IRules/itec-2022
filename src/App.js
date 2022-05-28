import './App.css';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Login from './Pages/Login';
import { useEffect } from 'react';
import Panel from './Pages/Panel';

function App() {
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
  return !auth.currentUser ? <Login /> : <Panel />;
}

export default App;
