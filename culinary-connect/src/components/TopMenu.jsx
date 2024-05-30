import React, { useState } from "react";
import menuPic from "../assets/menu-burger.svg";
import { Link } from "react-router-dom";
import addPic from "../assets/add.svg";
import '../App.css';

function TopMenu() {

    
    const [sidebar, setSidebar] = useState(false);
  
    const toggleSidebar = () => {
        setSidebar(!sidebar);  // Toggle the state of the sidebar
    };


  return (
    <div>
        <div className="topMenu">
            <img src={menuPic} alt="" className="menuPic" onClick={toggleSidebar}/>
            <Link to="/addRecipe">            
                <img src={addPic} alt="" className="addPic"/>
            </Link>
        </div>
        <div className={`sideBarDiv ${sidebar ? 'show' : ''}`}>
            <Link to="/homepage2" className="link"><p>Home</p></Link>
            <Link to="/explore" className="link"><p>Explore</p></Link>
            <Link to="/favorites" className="link"><p>Favorite</p></Link>
            <Link to="/profile" className="link"><p>Profile</p></Link>
            <Link to="/settings" className="link"><p>Settings</p></Link>
            <Link to="/" className="link"><p>Log out</p></Link>





        </div>
    </div>
    

    // <div className="navDiv">
    //     <div className="nav">
    //         <div className="nav-icon" onClick={showSidebar}>
    //             <img src={menuPic} alt="Menu" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
    //         </div>
    //     </div>
    //     <nav className={`sidebar-nav ${sidebar ? 'show' : ''}`}>
    //         <div className="sidebar-wrap">
    //             {sidebarData.map((item, index) => (
    //                 <Link className="sidebar-link" to={item.path} key={index}>
    //                 {item.title}
    //                 </Link>
    //             ))}
    //         </div>
    //     </nav>
    // </div>
    );
}

export default TopMenu;