import React from 'react'
import Header from '../Header'
import photo from '../../assets/photo.png';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex registration">
        <div className="photo">
          <img className='photoDiv' src={photo} alt="Login" />
        </div>
        <div className="loginBox">
          <h1 className='hurray'>Hurray! Logged in.
           Go< Link to = "/"> home.</ Link> </h1>
        </div>
      </div>
    </>
  )
}

export default Dashboard