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
            <div className='sideMenuItem'>
                <img src={home} alt=''></img>
                <p>Home</p>
            </div>
            <div className='sideMenuItem'>
                <img src={explore} alt=''></img>
                <p>Explore</p>
            </div>
            <div className='sideMenuItem'>
                <img src={heart} alt=''></img>
                <p>Favorite</p>
            </div>
            <div className='sideMenuItem'>
                <img src={user} alt=''></img>
                <p>Profile</p>
            </div>
            <div className='sideMenuItem'>
                <img src={settings} alt=''></img>
                <p>Settings</p>
            </div>

        </div>
    );
}

export default SideMenu;