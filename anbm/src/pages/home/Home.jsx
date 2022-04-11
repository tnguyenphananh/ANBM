import Leftsidebar from "../../components/leftsidebar/Leftsidebar";
import Rightsidebar from "../../components/rightsidebar/Rightsidebar";
import "./home.css"

export default function Home(){
    return (
        <>
            <div className="homeContainer">
            <Leftsidebar />
            <Rightsidebar />
            </div>
        </>
    );
}