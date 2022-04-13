import "./rightsidebar.css"
import {FeaturedPlayList} from "@material-ui/icons";
import {Face} from "@material-ui/icons";
import {MusicNote} from "@material-ui/icons";
import {TrendingUp} from "@material-ui/icons";
import {Whatshot} from "@material-ui/icons";
import { Users } from "../../dummyData";
import Suggest from "../suggest/Suggest";

export default function Rightsidebar() {
    return (
        <div className="rightsidebar">
            <div className="rightsidebarWrapper">
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
            </div>
        </div>
    );
}
