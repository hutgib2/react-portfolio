
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={{minHeight: "calc(100vh - 182px)"}} className="container mx-auto">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;


