import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <NavLink to={"/"} className="d-flex title">Mente Sana </NavLink>    
                </div>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink className="nav-link px-2 link-secondary" to={"/"}>Inicio</NavLink></li>
                    <li><NavLink className="nav-link px-2" to={"/therapy"}>Terapia Online</NavLink></li>
                    <li><NavLink className="nav-link px-2" to={"/team"}>Equipo</NavLink></li>
                </ul>

                <div className="col-md-3 text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                </div>
            </header>
        </div>
    )
}
