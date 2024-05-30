import { React } from 'react';
import { Link } from 'react-router-dom';
import "./LoginForm.css";

const Verification = () => {
    return (
        <div>
             <div className='wrapper'>
                <h1>
                    Confirm Your Email 
                </h1>
                <h3>
                    check your inbox to verify your email, click on the link sent for verification 
                </h3>
                <h4 className='linktologin'>
                     {/* <Link to="/LoginForm" className="login-link">Login</Link> */}
                     go to Login 
                </h4>
             </div>
        </div>
        
    );
};

export default Verification;