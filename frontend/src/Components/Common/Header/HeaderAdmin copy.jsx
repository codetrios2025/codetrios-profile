import React from "react";
import { useNavigate  } from "react-router-dom"; // Use react-router-dom for navigation
import HeaderStyle from '../../Style/Header.module.css';
import {  Button } from 'react-bootstrap';
import { RiLogoutBoxRLine } from "react-icons/ri";
import { userlogout } from '../../../store/authSlice';


import { useDispatch } from 'react-redux';
const Header =()=>{
    const navigate = useNavigate(); // Get the navigate function
    const dispatch = useDispatch();
    const logout = () => {
     
          localStorage.removeItem('token');
          localStorage.removeItem('userDetail');
          dispatch(userlogout());
          // Redirect to home or login page
          navigate('/Login');
    };
    return(
        <header className={HeaderStyle.HeaderMainAdmin}>
         
                        <div className={HeaderStyle.headerFlexAmdin}>
                            <div className={HeaderStyle.Logo}>
                                <img src={require('../../../assest/images/Qcert-logo.png')} />
                            </div>
                           <div className={HeaderStyle.Logout}>
                            <Button variant="link" onClick={logout}><RiLogoutBoxRLine /></Button>
                           </div>
                            
                        </div>
                   
        </header>
    )
}

export default Header;