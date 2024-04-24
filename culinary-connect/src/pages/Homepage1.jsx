import React from 'react';
import { Link } from 'react-router-dom';
import Menu from "../components/Menu";
import pizzaPic from "../assets/pizza-ilustration.png";
import Footer from "../components/Footer";


function Homepage1() {
  return (
    <div className="appBody">
      <Menu />
      <div className="main">
        <div className="mainText">
          <h1>CulinaryConnect</h1>
          <p>Discover endless culinary inspiration with our collection of delicous recipes from all around the globe</p>
          <Link to="/signup">
            <button>Join Us!</button>
          </Link>
        </div>
        
        <img src={pizzaPic} className="pizzaIlustration" alt="Pizza Ilustration"></img>
      </div>
      <Footer />
    </div>
  );
}
export default Homepage1;