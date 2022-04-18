import "./NavBar.css" ;
import {Search, Person, Chat, Notifications } from "@material-ui/icons" ;
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
      <div className="NavBarContainer"> 
          <div className="NavBarLeft">
                <Link to="/">
                    <button className="logo">BANd</button>
                </Link>
          </div>
          <div className="NavBarCenter">
              <div className="searchbar">
                  <Search className="searchIcon" />
                  <input placeholder="Search for friends, songs, or artists" className="searchInput" /> 
              </div>
          </div>
          <div className="NavBarRight">
            <div className="NavBarLinks">
                <Link to="/login">
                    <button className="NavBarLink">
                        Login
                    </button>
                </Link>
                <Link to="/register">
                    <button className="NavBarLink2">
                        Register
                    </button>
                </Link>
                <span className="NavBarLink1">Upload</span>
            </div>
            <div className="NavBarIcons">
            <div className="NavBarIconItems">
                <Person />
                <span className="NavBarIconBadge">1.2k</span>
                </div>    
                <div className="NavBarIconItems">
                <Chat />
                <span className="NavBarIconBadge">657</span>
                </div>    
                <div className="NavBarIconItems">
                <Notifications />
                <span className="NavBarIconBadge">1.0k</span>
                </div>        
            </div>

            <Link to="/profile">
                <button> <img src="/assets/profile/photo1.jpg" alt="" className="NavBarImg"/></button>
            </Link>
         </div>
     </div>  
    )
}
