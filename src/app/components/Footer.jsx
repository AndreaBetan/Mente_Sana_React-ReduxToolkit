import { Link } from "react-router-dom"

export const Footer = () => {

    return (
        <div>
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between aling-items-center py-3 my-4 border-top title">
                    <div className="d-flex col-3 mb-3">
                        <Link to={"/"} className="nav-link title">
                            <img src='https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png' className='mindfulness p-0' />
                        </Link>
                        <Link to={"/"} className="nav-link title p-1">
                            Mente Sana <br />Psicología Clínica
                        </Link>
                    </div>

                    <div className="col-3 mb-3 title">
                        <h5>CLÍNICA VIRTUAL PSICOLÓGICA</h5>
                        <ul className="nav flex-column ">
                            <li className="nav-item mb-2 "><Link to={'/'} className="nav-link p-0 title">Home</Link></li>
                            <li className="nav-item mb-2"><Link to={'/therapy'} className="nav-link p-0 title">Terapia Online</Link></li>
                            <li className="nav-item mb-2"><Link to={'/team'} className="nav-link p-0 title">Equipo</Link></li>
                        </ul>
                    </div>

                    <div className="col-3 mb-3">
                        <h5>CONTACTANOS</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><Link to={'/therapy'} className="nav-link p-0 text-body-secondary title">Info Terapia Online</Link></li>

                        </ul>
                    </div>

                    <div className="col-3 mb-3">
                        <h5>SÍGUENOS EN</h5>
                        <ul className="nav col-md-4 justify-content-end d-flex list-unstyled">
                            <li className="nav-item mb-2"><Link className="nav-link pe-1 title"><i className="bi bi-facebook"></i></Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link pe-1 title"><i className="bi bi-instagram"></i></Link></li>
                            <li className="nav-item mb-2"><Link className="nav-link pe-1 title"><i className="bi bi-twitter"></i></Link></li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

