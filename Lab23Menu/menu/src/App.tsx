import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './Components/Header';
import { MenuRoute } from './Components/MenuRoute';
import { DetailsRoute } from './Components/DetailsRoute';

function App() {
  return (
      <BrowserRouter > 
    <div className="App">
    <Header />
    <Routes>
      <Route path="/menu" element={<MenuRoute />} />
      <Route path="/details/:id" element={<DetailsRoute />} />
      <Route path="*" element={<Navigate to={"/menu"} />} />
    </Routes>
    </div>
      </BrowserRouter>
   
  );
}

export default App;
