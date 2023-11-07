import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <div className="container-fluid bg-white">
            <header className="d-flex flex-wrap justify-content-md-between py-3 mb-4 border-bottom">
                <div className="d-flex">
                    <NavLink to={"/"} className="nav-link title">
                        <img src='https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png' className='mindfulness'/>
                    </NavLink>
                    <NavLink to={"/"} className="nav-link title p-1">
                        Mente Sana <br />Psicología Clínica
                    </NavLink>
                </div>

                <ul className="nav col-12 col-md-7 mb-2 justify-content-start align-content-center mb-md-0 d-flex">
                    <li><NavLink className="nav-link px-2 fw-light" to={"/"}>Inicio</NavLink></li>
                    <li><NavLink className="nav-link px-2 fw-light" to={"/therapy"}>Terapia Online</NavLink></li>
                    <li><NavLink className="nav-link px-2 fw-light" to={"/team"}>Equipo</NavLink></li>
                </ul>
            </header>
        </div>
    )
}
