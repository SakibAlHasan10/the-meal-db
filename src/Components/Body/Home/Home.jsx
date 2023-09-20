import { Outlet } from "react-router-dom";
import Navbar from "../../Header/Navbar/Navbar";
import HomeContent from "./HomeContent";
import Bootm from "../../Bottom/Bootm";

const Home = () => {
    return (
        <div className="bg-orange-900">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <HomeContent></HomeContent>
            <Bootm></Bootm>
            
        </div>
    );
};

export default Home;