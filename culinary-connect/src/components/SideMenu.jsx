import React from 'react';
import { NavLink } from 'react-router-dom';

import '../App.css';
import home from "../assets/home.png";
import explore from "../assets/explore.png";
import heart from "../assets/heart.png";
import user from "../assets/user.png";
import settings from "../assets/settings.png";


function SideMenu() {
    return (
        <div className='sideMenu'>
            {/* <p className='logoText'>Culinary Connect</p> */}
            <NavLink to="/homepage2" className='sideMenuItem' activeClassName="activeLink">
                <img src={home} alt=''></img>
                <p>Home</p>
            </NavLink>
            
            <NavLink to="/explore" className='sideMenuItem' activeClassName="activeLink">
                <img src={explore} alt=''></img>
                <p>Explore</p>
            </NavLink>

            <NavLink to="/favorites" className='sideMenuItem' activeClassName="activeLink">
                <img src={heart} alt=''></img>
                <p>Favorite</p>
            </NavLink>

            <NavLink to="/profile" className='sideMenuItem' activeClassName="activeLink">
                <img src={user} alt=''></img>
                <p>Profile</p>
            </NavLink>

            <NavLink to="/settings" className='sideMenuItem' activeClassName="activeLink">
                <img src={settings} alt=''></img>
                <p>Settings</p>
            </NavLink>

        </div>
    );
}

export default SideMenu;