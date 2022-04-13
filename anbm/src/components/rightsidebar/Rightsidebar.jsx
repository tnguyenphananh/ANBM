import "./rightsidebar.css"
import {FeaturedPlayList} from "@material-ui/icons";
import {Face} from "@material-ui/icons";
import {MusicNote} from "@material-ui/icons";
import {TrendingUp} from "@material-ui/icons";
import {Whatshot} from "@material-ui/icons";
import { Users } from "../../dummyData";

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
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Brendan Wise</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> An Trieu</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Neerav Sharma Nepali</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Harry Phillips</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Patrick Mattar</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Flynn Hersh</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> George Gilligan</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Daniel Bien</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Oscar Sanchez</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Eddie Brees</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Jake Ripple</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Matt Shover</span>
                    </li>
                    <li className="rightsidebarFriend">
                        <img className="rightsidebarFriendImg" src="/assets/profile/template_3.jpg" alt=""/>
                        <span className="rightsidebarFriendName"> Justin Vega</span>
                    </li>
                    
                </ul>

            </div>
        </div>
    );
}
