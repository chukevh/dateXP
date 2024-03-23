import { Link } from "react-router-dom";

export default function SideNav() {
    return (
        <div className="sidenav-container">
            <span className="text-h1">DateXP</span>
            <nav className="sidenav">
                <Link to="/">Dashboard</Link>
                <Link to="/details">Details</Link>
            </nav>
        </div>
    )
}