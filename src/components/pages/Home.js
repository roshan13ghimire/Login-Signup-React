import React from 'react'
import Header from '../Header';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <>
      <Header />
      <div className='flexDiv'>
        <div className='textDiv' >

          <h1 className='text'>Registration and login using React Hooks.</h1>=
          <h2>Click < Link to='/registration'>here </Link> to SignUp</h2>
          <h2>Click < Link to = '/login'>here</Link>to Login</h2>
        </div>
      </div>
    </>
  )
}

export default Home