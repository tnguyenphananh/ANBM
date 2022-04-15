import "./rightsidebar.css"
import {FeaturedPlayList} from "@material-ui/icons";
import {Face} from "@material-ui/icons";
import {MusicNote} from "@material-ui/icons";
import {TrendingUp} from "@material-ui/icons";
import {Whatshot} from "@material-ui/icons";
import { Users } from "../../dummyData";
import Suggest from "../suggest/Suggest";
import Profile from "../../pages/profile/profile";

export default function Rightsidebar({profile}) {
    const HomeRightbar = () => {
        return(
            <>
            <ul className="rightsidebarList">
                    <li className="rightsidebarListItem">
                        <FeaturedPlayList className="rightsidebarIcon"/>
                        <span className="rightsidebarListItemText">Suggested Columns</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <Face className="rightsidebarIcon"/>
                        <span className="rightsidebarListItemText">Artists</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <MusicNote className="rightsidebarIcon"/>
                        <span className="rightsidebarListItemText">Songs</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <TrendingUp className="rightsidebarIcon"/>
                        <span className="rightsidebarListItemText">Trending Profiles</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <Whatshot className="rightsidebarIcon"/>
                        <span className="rightsidebarListItemText">Trending Songs</span>
                    </li>
                </ul>
                <button className="rightsidebarButton">Show More</button>
                <hr className="rightsidebarHr"/>
                <ul className="rightsidebarFriendList">
                    {Users.map(u=>(
                        <Suggest key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () =>{
        return (
        <>
        <h4 className="rightsidebarTitle">Bio</h4>
        <div className="rightsidebarInfo">
        <div className="rightsidebarInfoItem">
                <span className="rightsidebarInfoKey">Pronouns:</span>
                <span className="rightsidebarInfoValue"> She/Her</span>
            </div>
            <div className="rightsidebarInfoItem">
                <span className="rightsidebarInfoKey">Location:</span>
                <span className="rightsidebarInfoValue"> Rock, Colorado</span>
            </div>
            <div className="rightsidebarInfoItem">
                <span className="rightsidebarInfoKey">Age:</span>
                <span className="rightsidebarInfoValue"> 19</span>
            </div>
            <div className="rightsidebarInfoItem">
                <span className="rightsidebarInfoKey">Genre:</span>
                <span className="rightsidebarInfoValue"> Indie-Pop</span>
            </div>
            <div className="rightsidebarInfoItem">
                <span className="rightsidebarInfoKey">Instruments:</span>
                <span className="rightsidebarInfoValue"> Pan Flute</span>
            </div>
        </div>
        <h4 className="rightsidebarTitle">Top Songs</h4>
        <div className="rightsidebarFollowings">
            <div className="rightsidebarFollowing">
                <img src="assets/profile/photo1.jpg" alt="" className="rightsidebarFollowingImg" />
                <span className="rightsidebarFollowingName"> Tipitipitiu</span>
            </div>
            <div className="rightsidebarFollowing">
                <img src="assets/profile/photo2.jpg" alt="" className="rightsidebarFollowingImg" />
                <span className="rightsidebarFollowingName">John Cena</span>
            </div>
            <div className="rightsidebarFollowing">
                <img src="assets/profile/photo3.jpg" alt="" className="rightsidebarFollowingImg" />
                <span className="rightsidebarFollowingName">John Cena</span>
            </div>
            <div className="rightsidebarFollowing">
                <img src="assets/profile/photo1.jpg" alt="" className="rightsidebarFollowingImg" />
                <span className="rightsidebarFollowingName">John Cena</span>
            </div>
            <div className="rightsidebarFollowing">
                <img src="assets/profile/photo2.jpg" alt="" className="rightsidebarFollowingImg" />
                <span className="rightsidebarFollowingName">John Cena</span>
            </div>
            <div className="rightsidebarFollowing">
                <img src="assets/profile/photo3.jpg" alt="" className="rightsidebarFollowingImg" />
                <span className="rightsidebarFollowingName">John Cena</span>
            </div>
        </div>
        </>

        )
    }
    return (
        <div className="rightsidebar">
            <div className="rightsidebarWrapper">
              <ProfileRightbar/>  

            </div>
        </div>
    );
}
