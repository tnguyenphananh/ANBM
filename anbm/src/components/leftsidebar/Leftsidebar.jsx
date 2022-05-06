import "./leftsidebar.css"
import {Save} from "@material-ui/icons";
import {Home} from "@material-ui/icons";
import {ViewColumn} from "@material-ui/icons";

export default function Leftsidebar() {
    return (
        <div className="leftsidebar">
            <div className="leftsidebarWrapper">
                <div className="leftsidebarList">
                <div className="leftsidebarListItem">
                        <Home className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Home</span>
                  </div>
                    <div className="leftsidebarListItem">
                        <Save className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Saved Posts</span>
                  </div>
                  <div className="leftsidebarListItem">
                        <ViewColumn className="leftsidebarIcon"/>
                    <span className="leftsidebarListItemText">Genre Columns</span>
                  </div>
                </div>
            </div>
        </div>
    )
}
