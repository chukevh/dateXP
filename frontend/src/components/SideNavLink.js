import { Link } from "react-router-dom"

export default function SideNavLink(props) {
    const title = props.title
    const logo = props.logo
    const link = props.link

    return (
        <div className="sidenav-link">
            <div className="sidenav-link-logo">
                {logo}
            </div>
            <Link to={link} className="sidenav-link-text">{title}</Link>
        </div>
    )
}