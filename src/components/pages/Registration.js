import React ,{useState} from 'react'
import photo from '../../assets/photo.png';
import Header from '../Header'
import {Link } from 'react-router-dom';
import Axios from'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [userReg, setUserReg] = useState({
        name : "",
        username : "",
        email : "",
        password : ""
    });
    const  handleInput =  (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        setUserReg({...userReg, [name]:value})
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await Axios.post("http://localhost:3002/users",userReg);
        alert("Successfully Signed Up");
        navigate("/");
    }
    return (
        <>
            <Header />
            <div className="flex registration">
                <div className="photo">
                    <img className='photoDiv' src={photo} alt="Login" />
                </div>
                <div className="registrationBox">
                    <div className="Items flex sb">
                        <label className="name">Name</label>
                        <input type="text" name = "name" value = {userReg.name} className="input" onChange={handleInput} required   />
                    </div>
                    <div className="Items flex sb">
                        <label className="username">Username</label>
                        <input type="text" name = "username" value = {userReg.username} className="input" onChange={handleInput} required />
                    </div>
                    <div className="Items flex sb">
                        <label className="email">Email</label>
                        <input type="email" name = "email" value = {userReg.email} className="input" onChange={handleInput} required />
                    </div>
                    <div className="Items flex sb">
                        <label className="password">password</label>
                        <input type="password" name = "password" value = {userReg.password} className="input" onChange={handleInput} required />
                    </div>
                    <div className="butonDiv">
                        <button className='button' onClick={handleSubmit} >SignUp</button>
                    </div>
                    <div className="alreadyLogin">
                        Already Have an account? < Link to = '/login'>Login In </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Registration