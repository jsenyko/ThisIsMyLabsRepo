import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/header';
import { AdDesign } from './Components/AdDesign';
import { Votes } from './Components/Votes';

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <AdDesign />
        <Votes />
      </div>
    </>
  );
}

export default App;
