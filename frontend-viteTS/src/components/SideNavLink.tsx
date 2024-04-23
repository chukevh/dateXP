import { Link } from "react-router-dom"

interface SideNavLinkProps {
    logo: React.ReactNode;
    title: string;
    link: string;
}

export default function SideNavLink(props: SideNavLinkProps) {
    const logo = props.logo
    const title = props.title
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