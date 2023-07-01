import { Link } from "react-router-dom"

export const Header = () => {
    return (
        <>
            <div className="header">
                <Link 
                    className="nav-item nav-link"
                    to="/">
                    <h1 className="conan-font text-conan-primary mb-0" to="/">Conan de los Wevos</h1>
                </Link>
            </div>
        </>
    )
}
