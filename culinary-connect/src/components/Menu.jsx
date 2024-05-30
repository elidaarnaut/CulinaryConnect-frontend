import '../App.css';
import { NavLink } from 'react-router-dom';



function Menu() {
    return (
        <div className='menu'>
            <NavLink to="/" className="hp1menu"><h2 className='menuItems'>Home</h2></NavLink>
            <NavLink to="/about" className="hp1menu"><h2 className='menuItems'>About</h2></NavLink>
            <NavLink to="/explore2" className="hp1menu"><h2 className='menuItems'>Explore</h2></NavLink>
        </div>
    
    );
}

export default Menu;