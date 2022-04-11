import "./NavBar.css" ;
import {Search, Person, Chat, Notifications } from "@material-ui/icons" ;
export default function NavBar(){
    return (
      <div className="NavBarContainer"> 
          <div className="NavBarLeft">
             <span className="logo">ANBM</span>
          </div>
          <div className="NavBarCenter">
              <div className="searchbar">
                  <Search />
                  <input placeholder="Search for friends, songs, or artists" className="searchInput" /> 
              </div>
          </div>
          <div className="NavBarRight">
            <div className="NavBarLinks">
            <span className="NavBarLink">Homepage</span>
            <span className="NavBarLink">Timeline</span>
            </div>
            <div className="NavBarIcons">
            <div className="NavBarIconItems">
                <Person />
                <span className="NavBarIconBadge">1</span>
                </div>    
                <div className="NavBarIconItems">
                <Chat />
                <span className="NavBarIconBadge">2</span>
                </div>    
                <div className="NavBarIconItems">
                <Notifications />
                <span className="NavBarIconBadge">1</span>
                </div>        
            </div>
            <img src="/assets/person/1.jpeg" alt="" className="NavBarImg" />
         </div>
     </div>  
    )
}