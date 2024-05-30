import React from "react";
import Menu from "../components/Menu";
import pastaPic from "../assets/pasta.svg";
import saladPic from "../assets/salad.svg";
import Footer from "../components/Footer";
import "../App.css";

function AboutPage(){
    return(
        <div className="appBody">
            <Menu></Menu>
            <div className="aboutSection">
                <div className="aboutPicDiv">
                    <img src={pastaPic} alt="Pasta Illustration" className="aboutPic"/>
   
                </div>
                <div className="aboutPicText">
                    <p>Welcome to CulinaryConnect, the premier social media destination where food enthusiasts, home cooks, and professional chefs converge to share and discover delectable recipes from around the world.</p>
                </div>
            </div>
            <hr className="hrAbout"/>
            <div className="aboutSection">
                <div className="aboutPicText">
                    <p>Our mission is to empower culinary passion through sharing. We aim to create a vibrant community where anyone, from novice cooks to seasoned chefs, can share their unique recipes, learn new cooking techniques, and celebrate the joy of cooking.</p>
                </div>
                <div className="aboutPicDiv">
                    <img src={saladPic} alt="Pasta Illustration" className="aboutPic"/>
                   </div>
                
            </div>
            <Footer></Footer>

        </div>
    );
}

export default AboutPage;