import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import AppRoutes from './components/AppRoutes';
import Tanstack1 from './components/tanstack/usequeryandmutation'
function App() {
  return (
    <>
      {/* <div className="navbar">
        <div className="sidebar">
          <MantineProvider>
            <Navbar />
          </MantineProvider>
        </div>
        <div className="routes">
          <AppRoutes />
        </div>
      </div> */}
      <Tanstack1/>
    </>
  );
}

export default App;
