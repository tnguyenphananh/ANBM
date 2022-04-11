import Leftsidebar from "../../components/leftsidebar/Leftsidebar";
import Rightsidebar from "../../components/rightsidebar/Rightsidebar";
import Feed from '../../components/mainfeed/Feed';
import "./home.css"

export default function Home(){
    return (
        <>
            <div className="homeContainer">
            <Leftsidebar />
            <Feed />
            <Rightsidebar />
            </div>
        </>
    );
}
