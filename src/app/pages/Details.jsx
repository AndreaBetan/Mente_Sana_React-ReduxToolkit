import { Link } from "react-router-dom";
import { ModalForms } from "../components/alerts";
import { useSelector } from "react-redux";


export const Details = () => {

    const { selectedPerson } = useSelector((state) => state.people);

    return (
        <div className="container col-xxl-8 px-4 py-5 purple rounded">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={selectedPerson.picture.large} className="d-block mx-lg-auto img-fluid rounded" alt="Temas de arranque" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h2 className="display-6 fw-bold lh-1 mb-3 title">¡Hola!</h2>
                    <h1 className="display-5 fw-bold lh-1 mb-3 title">Mi nombre es <br />{selectedPerson.name.first} {selectedPerson.name.last}</h1>
                    <p className="lead">Actualmente vivo en {selectedPerson.location.country} en la ciudad de {selectedPerson.location.city} estado de {selectedPerson.location.state}.</p>
                    <p className="lead">Tengo {selectedPerson.dob.age} años de los cuales {selectedPerson.registered.age} he dedicado a mi servicio profesional.</p>
                    <p className="lead">Acabas de dar el primer paso para cambiar tu vida y me encantará acompañarte en el proceso.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        <button type="button" className="btn active btn-outline-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Solicitar sesión
                        </button>
                        <ModalForms />
                        <Link className="nav-link px-2" to={"/team"}>
                            <button className="btn btn-outline-secondary rounded-pill" type="button">Volver al equipo</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};
