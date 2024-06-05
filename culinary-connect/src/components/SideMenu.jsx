import React from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';

import '../App.css';
import home from "../assets/home.png";
import explore from "../assets/explore.png";
import heart from "../assets/heart.png";
import user from "../assets/user.png";
import settings from "../assets/settings.png";
import logout from "../assets/exit.svg";
import { logoutUser } from '../services/ApiServices';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function SideMenu() {
    const { logout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{
            await logoutUser();
            logout();
            navigate('/login');
        }catch(error){
            console.error('Failed to logout:', error);
        }
    }
    return (
        <div className='sideMenu'>
            {/* <p className='logoText'>Culinary Connect</p> */}
            <NavLink to="/addRecipe">            
                <button className='addRecipeButton'>Add Recipe</button>
            </NavLink>
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
            {/* <hr className='hrSideMenu'/> */}

            <div onClick={handleLogout} className='sideMenuItem' activeClassName="activeLink">
                <img src={logout} alt=''></img>
                <p>Log out</p>
            </div>
        </div>
    );
}

export default SideMenu;