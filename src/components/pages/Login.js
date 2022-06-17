import React from 'react'
import photo from '../../assets/photo.png';
import Header from '../Header'
import {Link } from 'react-router-dom';

const Registration = () => {
    return (
        <>
            <Header />
            <div className="flex registration">
                <div className="photo">
                    <img className='photoDiv' src={photo} alt="Login" />
                </div>
                <div className="loginBox">
                    <div className="Items flex sb">
                        <label className="username">Username</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="Items flex sb">
                        <label className="password">Password</label>
                        <input type="text" className="input" />
                    </div>
                    <div className="butonDiv">
                        <button className='button' >Login</button>
                    </div>
                    <div className="alreadyLogin">
                        Don't Have an account? < Link to = '/registration'>Sign Up </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Registration