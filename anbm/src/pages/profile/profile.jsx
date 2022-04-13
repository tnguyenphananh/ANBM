import "./profile.css"
import Leftsidebar from "../../components/leftsidebar/Leftsidebar";
import Rightsidebar from "../../components/rightsidebar/Rightsidebar";
import Feed from '../../components/mainfeed/Feed';
import NavBar from '../../components/NavBar/NavBar';

export default function Profile() {
    return (
        <>
            <NavBar />
            <div className="profile">
                <Leftsidebar />
                <div className="profileRight"></div>
                <div className="profileRightTop">
                    <img src="assets/post/3" alt="" />
                </div>
                <div className="profileRightBottom"></div>
                <Feed />
                <Rightsidebar />
            </div>
        </>
    )

}