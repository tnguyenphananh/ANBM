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
                         src="assets/post/post3.jpg" 
                         alt="" />
                    <img 
                    className="profileUserImg" 
                    src="assets/profile/photo2.jpg" 
                    alt="" 
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className= "profileInfoName"> Safak Kocaoglu</h4>  
                        <span className="profileInfoDesc" >Hello my friends</span>  
                    </div>
                    <div className="profileRightBottom">
                <Feed />
                <Rightsidebar profile/>
                </div>
                
                </div>
                
            </div>
        </>
    )

}