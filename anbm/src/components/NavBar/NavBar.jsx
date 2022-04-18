import "./NavBar.css" ;
import {Search, Person, Chat, Notifications } from "@material-ui/icons" ;

export default function NavBar(){
    return (
      <div className="NavBarContainer"> 
          <div className="NavBarLeft">
             <span className="logo">BANd</span>
          </div>
          <div className="NavBarCenter">
              <div className="searchbar">
                  <Search className="searchIcon" />
                  <input placeholder="Search for friends, songs, or artists" className="searchInput" /> 
              </div>
          </div>
          <div className="NavBarRight">
            <div className="NavBarLinks">
            <span className="NavBarLink1">Upload</span>
            <span className="NavBarLink"> Login</span>
            <span className="NavBarLink2"> Register</span>
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
            <img src="/assets/profile/photo1.jpg" alt="" className="NavBarImg" />
         </div>
     </div>  
    )
}
