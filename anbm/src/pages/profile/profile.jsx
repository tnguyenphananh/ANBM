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
                    <div className="profileCover">
                        <img 
                        className="profileCoverImg"
                         src="assets/post/post1.jpg" 
                         alt="" />
                    <img 
                    className="profileUserImg" 
                    src="assets/profile/template_3.jpg" 
                    alt="" 
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className= "profileInfoName"> Emily Martinez</h4>  
                        <span className="profileInfoDesc" > I have a need to please </span>  
                    </div>
                    <div className="profileRightBottom">
                <Feed />
                <Rightsidebar profile/>
                </div>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/post/post1.jpg" alt="" />
                            <img className="profileUserImg" src="assets/profile/template_3.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className= "profileInfoName"> Emily Martinez</h4>  
                            <span className="profileInfoDesc" > I have a need to please </span>  
                        </div>
                        <div className="profileRightBottom">
                            <Feed />
                            <Rightsidebar profile/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}