import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();

  const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated")|| false));

  const logout = () => {
    localStorage.removeItem('authenticated');
    setauthenticated(false)
    navigate("/")
  };
  return (
    <div className='text-center m-5'>
    <h1 className='m-5'>Welcome to Dashboard</h1>
    <button className='btn btn-primary' onClick={logout}>Log out</button>
    </div>)
}

export default Dashboard