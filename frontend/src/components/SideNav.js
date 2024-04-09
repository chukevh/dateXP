import { Link } from "react-router-dom";
import logo from "../images/datexplogo.png"
import { IoMdHeart, IoMdHelpCircle, IoMdHome, IoMdLogIn, IoMdPerson, IoMdSettings, IoMdMenu } from "react-icons/io";
import SideNavLink from "./SideNavLink";


export default function SideNav() {
    const logoSize = "1.3rem"

    return (
        <div className="sidenav-container">
            <button><IoMdMenu /></button>
            <div className="sidenav-logo-container">
                <Link to="/">
                    <img src={logo} alt="logo" className="logo"/>
                </Link>
            </div>
            <nav className="sidenav-main">
                <SideNavLink logo={<IoMdHome size={logoSize}/>} title="Dashboard" link="/"/>
                <SideNavLink logo={<IoMdHeart size={logoSize}/>} title="Matches" link="/details"/>
                <SideNavLink logo={<IoMdSettings size={logoSize}/>} title="Settings" link="/"/>
            </nav>
            <nav className="side-nav-footer">
                <SideNavLink logo={<IoMdHelpCircle size={logoSize}/>} title="Help" link="/"/>
                <SideNavLink logo={<IoMdLogIn size={logoSize}/>} title="Login" link="/"/>
                <SideNavLink logo={<IoMdPerson size={logoSize}/>} title="Sign-up" link="/"/>
            </nav>
        </div>
    )
}