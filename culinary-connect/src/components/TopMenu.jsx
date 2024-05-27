import React, { useState } from "react";
import menuPic from "../assets/menu-burger.svg";
import { Link } from "react-router-dom";
import '../App.css';

function TopMenu() {
    const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    console.log("Toggling Sidebar"); // Debugging line to check function call
    setSidebar(!sidebar);
  };

  const sidebarData = [
    { title: "Home", path: "/home" },
    { title: "Explore", path: "/explore" },
    { title: "Favorite", path: "/favorite" },
    { title: "Profile", path: "/profile" },
    { title: "Settings", path: "/settings" }
  ];

  return (
    <div>
        <div className="nav">
            <div className="nav-icon" onClick={showSidebar}>
                <img src={menuPic} alt="Menu" style={{ width: '30px', height: '30px', cursor: 'pointer' }} />
            </div>
        </div>
        <nav className={`sidebar-nav ${sidebar ? 'show' : ''}`}>
            <div className="sidebar-wrap">
                {sidebarData.map((item, index) => (
                    <Link className="sidebar-link" to={item.path} key={index}>
                    {item.title}
                    </Link>
                ))}
            </div>
        </nav>
    </div>
    );
}

export default TopMenu;