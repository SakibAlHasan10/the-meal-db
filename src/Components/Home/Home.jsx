// import { Outlet } from "react-router-dom";
// import Bottom from "../Bottom/Bottom";
import Navbar from "../Navbar/Navbar";
import ReChart from "../ReChart/ReChart";
import Axios from "../Axios/Axios";

const Home = () => {
    return (
        <div className="bg-orange-900 text-white text-center">
                <Navbar></Navbar>
            <div className="max-w-screen-xl mx-auto px-8">
                {/* <Outlet></Outlet> */}
                <Axios></Axios>
                <ReChart></ReChart>
                {/* <Bottom></Bottom> */}
            </div>
        </div>
    );
};

export default Home;