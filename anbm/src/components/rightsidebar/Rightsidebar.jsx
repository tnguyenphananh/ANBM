import "./rightsidebar.css"
import { FeaturedPlayList } from "@material-ui/icons";
import { Face } from "@material-ui/icons";
import { MusicNote } from "@material-ui/icons";
import { TrendingUp } from "@material-ui/icons";
import { Whatshot } from "@material-ui/icons";
import { Users } from "../../dummyData";
import Suggest from "../suggest/Suggest";
import Profile from "../../pages/profile/profile";

export default function Rightsidebar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const HomeRightbar = () => {
        return (
            <>
                <ul className="rightsidebarList">
                    <li className="rightsidebarListItem">
                        <FeaturedPlayList className="rightsidebarIcon" />
                        <span className="rightsidebarListItemText">Suggested Columns</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <Face className="rightsidebarIcon" />
                        <span className="rightsidebarListItemText">Artists</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <MusicNote className="rightsidebarIcon" />
                        <span className="rightsidebarListItemText">Songs</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <TrendingUp className="rightsidebarIcon" />
                        <span className="rightsidebarListItemText">Trending Profiles</span>
                    </li>
                    <li className="rightsidebarListItem">
                        <Whatshot className="rightsidebarIcon" />
                        <span className="rightsidebarListItemText">Trending Songs</span>
                    </li>
                </ul>
                <button className="rightsidebarButton">Show More</button>
                <hr className="rightsidebarHr" />
                <ul className="rightsidebarFriendList">
                    {Users.map(u => (
                        <Suggest key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightsidebarTitle">Bio</h4>
                <div className="rightsidebarInfo">
                    <div className="rightsidebarInfoItem">
                        <span className="rightsidebarInfoKey">Pronouns:</span>
                        <span className="rightsidebarInfoValue"> {user.pronoun === "" ? "N/A" : user.pronoun}</span>
                    </div>
                    <div className="rightsidebarInfoItem">
                        <span className="rightsidebarInfoKey">Location:</span>
                        <span className="rightsidebarInfoValue"> {user.location === "" ? "N/A" : user.location} </span>
                    </div>
                    <div className="rightsidebarInfoItem">
                        <span className="rightsidebarInfoKey">Age:</span>
                        <span className="rightsidebarInfoValue"> {user.age === "" ? "N/A" : user.age}</span>
                    </div>
                    <div className="rightsidebarInfoItem">
                        <span className="rightsidebarInfoKey">Genre:</span>
                        <span className="rightsidebarInfoValue"> {user.genre === "" ? "N/A" : user.genre}</span>
                    </div>
                    <div className="rightsidebarInfoItem">
                        <span className="rightsidebarInfoKey">Instruments:</span>
                        <span className="rightsidebarInfoValue"> {user.instrument === "" ? "N/A" : user.instrument}</span>
                    </div>
                </div>
                <h4 className="rightsidebarTitle">Top Songs</h4>
                <div className="rightsidebarFollowings">
                    <div className="rightsidebarFollowing">
                        <img src={`${PF}profile/photo1.jpg`} alt="" className="rightsidebarFollowingImg" />
                        <span className="rightsidebarFollowingName"> Tipitipitiu</span>
                    </div>
                    <div className="rightsidebarFollowing">
                        <img src={`${PF}profile/photo2.jpg`} alt="" className="rightsidebarFollowingImg" />
                        <span className="rightsidebarFollowingName">John Cena</span>
                    </div>
                    <div className="rightsidebarFollowing">
                        <img src={`${PF}profile/photo3.jpg`} alt="" className="rightsidebarFollowingImg" />
                        <span className="rightsidebarFollowingName">John Cena</span>
                    </div>
                    <div className="rightsidebarFollowing">
                        <img src={`${PF}profile/photo1.jpg`} alt="" className="rightsidebarFollowingImg" />
                        <span className="rightsidebarFollowingName">John Cena</span>
                    </div>
                    <div className="rightsidebarFollowing">
                        <img src={`${PF}profile/photo2.jpg`} alt="" className="rightsidebarFollowingImg" />
                        <span className="rightsidebarFollowingName">John Cena</span>
                    </div>
                    <div className="rightsidebarFollowing">
                        <img src={`${PF}profile/photo3.jpg`} alt="" className="rightsidebarFollowingImg" />
                        <span className="rightsidebarFollowingName">John Cena</span>
                    </div>
                </div>
            </>

        )
    }
    return (
        <div className="rightsidebar">
            <div className="rightsidebarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    );
}
