import "./login.css";
import {Link} from "react-router-dom";
import { useRef } from "react";


export default function Login(){
    const email = useRef();
    const password = useRef();
    const handleClick = (e) => {
        e.preventDefault ();
        console.log(email);
    }
    return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <Link to ="/" style={{textDecoration: "none"}}>
                <h3 className="loginLogo">BANd</h3>
                </Link>
                <span className="loginDesc">
                    Banding together through music.
                </span>
            </div>
            <div className="loginRight">
              <form className="loginBox" onSubmit={handleClick}> 
                <input 
                placeholder="Email" 
                type="email" 
                required
                className="loginInput" 
                ref={email}
                />
                <input 
                placeholder="Password" 
                type="password" 
                required
                className="loginInput"
                ref={password}
                />
                <Link to="/">
                    <button className="loginButton"> Log In</button>
                </Link>
                <span className="loginForgot"> Forgot Password?</span>
                <Link to="/register">
                    <button className="loginRegisterButton">Create a New Account</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    );
}
