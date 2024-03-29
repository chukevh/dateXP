// import Header from "../components/Header";
// import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
    return (
        <>
            <div className="wrapper">
                <SideNav />
                <Outlet />
                {/* <div className="main-container">
                
                </div> */}
            </div>
        </>
    )
}