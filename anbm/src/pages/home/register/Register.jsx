import "./register.css";
import {Link} from "react-router-dom";
import { useRef } from "react";
import {useHistory} from "react-router"

export default function Register(){
    const Username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const DOB = useRef();
    const Location = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("Passwords don't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try{
                await axios.post("/auth/register", user);
                history.push("/login");
            } catch (err) {
                console.log(err)
            }
        }
    };

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
                <input placeholder="Username" required ref={username} className="loginInput" />
                <input placeholder="Email" required ref={email} className="loginInput" type="email" />
                <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6"/>
                <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password" />
                <input placeholder="DOB" required ref={DOB} className="loginInput" type="DOB" />
                <input placeholder="Location" required ref={location} className="loginInput" type="location"/>
                <Link to="/">
                    <button className="loginButton" type="submit"> Sign Up</button>
                </Link>
                <Link to="/login">
                    <button className="loginRegisterButton"> Log into Account </button>
                </Link>
                </form>
            </div>
        </div>
        </div>
    );
}
