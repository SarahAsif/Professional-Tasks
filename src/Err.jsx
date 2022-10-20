import React from 'react'
import { Navigate } from "react-router-dom";

const Err = () => {
  return (
    <div className='text-center m-5'>
      <h1 className='m-5'>User Details Not Found</h1>
      <a href="/">Return to Login Page</a>
 
    </div>
  )
}

export default Err