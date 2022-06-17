import React, { useState } from 'react'
import photo from '../../assets/photo.png';
import Header from '../Header'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
    });
    const [unsuccessful, setUnsuccessful] = useState(false);

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser({ ...user, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const podey = await Axios.get("http://localhost:3002/users");
        const a = podey.data;
        let len = a.length;
        for (let i = 0; i < len; i++) {
            const b = a[i];
            const uname = b.username;
            const pass = b.password;
            if (user.username === uname && user.password === pass) {
                console.log("succesful");
                navigate("/dashboard");
            } else {

                setUnsuccessful(!unsuccessful);

            }
        }


    }
    return (
        <>
            <Header />
            <div className="flex registration">
                <div className="photo">
                    <img className='photoDiv' src={photo} alt="Login" />
                </div>
                <div className="loginBox">
                <div className ={` ${unsuccessful ? 'responsive': ''}`}>
                    <h1 className = "invalid">Invalid Email and Password</h1>
                    <div className="Items flex sb">
                        <label className="username">Username</label>
                        <input type="text" name="username" value={user.username} className="input" onChange={handleInput} required />
                    </div>
                    <div className="Items flex sb">
                        <label className="password">Password</label>
                        <input type="password" name="password" value={user.password} className="input" onChange={handleInput} required />
                    </div>
                    <div className="butonDiv">
                        <button className='button' onClick={handleSubmit} >Login</button>
                    </div>
                    <div className="alreadyLogin">
                        Don't Have an account? < Link to='/registration'>Sign Up </Link>
                    </div>
                </div>
            </div>
            </div>

        </>
    )
}

export default Registration