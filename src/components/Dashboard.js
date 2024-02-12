import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import 'bootstrap/dist/css/bootstrap.min.css';
function Dashboard() {
  const [userName ,setuserName]= useState("");
  const [theme ,setTheme]= useState(true);
  return (
    <div className="wrapper">
      <Navbar userName={userName} theme={theme}/>
      <Sidebar theme={theme} setTheme={setTheme}/>
      <MainContent setuserName={setuserName} theme={theme}/>
    </div>
  );
}

export default Dashboard;
