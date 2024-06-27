import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import UserContextProvider from './UserContext/UserContextProvider';
import UserData from './Components/UserData';

function App() {
  return (
    <>
      <h1>React.js App - USER Data</h1>
      <UserContextProvider>
        <UserData />
      </UserContextProvider>
    </>
  );
}

export default App;
