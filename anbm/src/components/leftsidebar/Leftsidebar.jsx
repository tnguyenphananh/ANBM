import "./leftsidebar.css"
import {Favorite} from "@material-ui/icons";
import {Home} from "@material-ui/icons";
import {ViewColumn} from "@material-ui/icons";



export default function Leftsidebar() {
    return (
        <div className="leftsidebar">
            <div className="leftsidebarWrapper">
                <ul className="leftsidebarList">
                <li className="leftsidebarListItem">
                        <Home className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Home</span>
                  </li>
                    <li className="leftsidebarListItem">
                        <Favorite className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Saved Posts</span>
                  </li>
                  <li className="leftsidebarListItem">
                        <ViewColumn className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Genre Columns</span>
                  </li>
                </ul>
            </div>
        </div>
    )
}
