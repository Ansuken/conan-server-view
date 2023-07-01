import { Link } from "react-router-dom";

export const NavBar = () => {
    return (
        <>
            <ul className="nav justify-content-center">
                <Link 
                    className="nav-item nav-link"
                    to="/news">
                        Noticias
                </Link>
                <Link 
                    className="nav-item nav-link"
                    to="/lore">
                        Lore
                </Link>
                <Link 
                    className="nav-item nav-link"
                    to="/server-info">
                        Información del Servidor
                </Link>
                <Link 
                    className="nav-item nav-link"
                    to="/discord">
                        Discord
                </Link>
                {/*<Link 
                    className="nav-item nav-link"
                    to="/about">
                        About
                </Link>
                <a 
                    className="nav-item nav-link"
                    target="_blank"
                    href="https://www.google.com">
                        Donate
                </a>*/}
            </ul>
        </>
    )
}
