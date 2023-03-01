import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { MenuList } from './components/MenuList';
import OrderContextProvider from './context/OrderContextProvider';

function App() {
  return (
    <div className="App">
      <OrderContextProvider>   
      <Header />
      <div><MenuList /><Sidebar /></div>
      </OrderContextProvider>
    </div>
  );
}

export default App;
