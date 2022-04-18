import "./register.css";
import { Link } from "react-router-dom";

export default function Register(){
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
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <input placeholder="DOB" className="loginInput" />
                <input placeholder="Location" className="loginInput" />
                <Link to="/">
                    <button className="loginButton"> Sign Up</button>
                </Link>
                <Link to="/login">
                    <button className="loginRegisterButton"> Log into Account </button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    );
}
