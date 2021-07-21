// import logo from './logo.svg';
import './App.css';
import Login from './login';
import Dashboard from './dashboard';
import {Router,Switch,Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
   <>
    {isLoggedIn ?<Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} /> }
  </>
  );
}

export default App;
