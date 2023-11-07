import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export const Details = () => {

    const { uuid } = useParams();
    const { people } = useSelector(state => state.people);
    const person = people.find(person => person.login.uuid === uuid);
    console.log(person.login.uuid)

    return (
        <div className="container col-xxl-8 px-4 py-5 body rounded">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={person.picture.large} className="d-block mx-lg-auto img-fluid rounded" alt="Temas de arranque" width="700" height="500" loading="lazy" />
                </div>
                <div className="col-lg-6">
                    <h2 className="display-6 fw-bold lh-1 mb-3 title">¡Hola!</h2>
                    <h1 className="display-5 fw-bold lh-1 mb-3 title">Mi nombre es <br />{person.name.first} {person.name.last}</h1>
                    <p className="lead">Actualmente vivo en { person.location.country } en la ciudad de { person.location.city } estado de { person.location.state }.</p>
                    <p className="lead">Tengo { person.dob.age } años de los cuales { person.registered.age } he dedicado a mi servicio profesional.</p>
                    <p className="lead">Acabas de dar el primer paso para cambiar tu vida y me encantará acompañarte en el proceso.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                        {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primario</button> */}
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Solicitar sesión</button>
                    </div>
                    <div className="inner-wrap"><div className="row-bg using-bg-color" style={{backgroundColor: "#ffffff"}}></div></div>
                </div>
            </div>
        </div>
    )
};
