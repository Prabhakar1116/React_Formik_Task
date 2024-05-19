import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Edit from './Components/Edit';
import Create from './Components/Create';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import AllDetails from './Components/AllDetails';
import './App.css'; 

const App = () => {
  const [userId, setUserId] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <BrowserRouter>
        <Sidebar isOpen={isSidebarOpen} />
        <div className="content">
          <Navbar toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path='/edit/:id' element={<Edit userId={userId} />} />
            <Route path="/create" element={<Create />} />
            <Route path="/alldetails" element={<AllDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
