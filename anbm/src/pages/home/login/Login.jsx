import "./login.css";
import { Link } from "react-router-dom";

export default function Login(){
    return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">BANd</h3>
                <span className="loginDesc">
                    Banding together through music.
                </span>
            </div>
            <div className="loginRight">
              <div className="loginBox"> 
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
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
