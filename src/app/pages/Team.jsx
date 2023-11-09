import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardOverview } from "./cards";
import { getPeople } from "../../store";
import { ModalQuestionary } from "../components/alerts";



export const Team = () => {

  const dispatch = useDispatch();
  const { page, people = [], gender, nationality } = useSelector(state => state.people);


  useEffect(() => {
    dispatch(getPeople(1, gender, nationality))
  }, [gender, nationality])

  const handlePrevPage = () => {
    if (page <= 1) return
    dispatch(getPeople(page - 1, gender, nationality))
  }

  const handleNextPage = () => {
    dispatch(getPeople(page + 1, gender, nationality))
  }


  return (
    <div className="container">
      <div className="text-center pb-2">
        <h1 className="title"> Conoce a nuestros psicólogos y psicólogas </h1>
        <p className="fw-light">En las sesiones de Psicoterapia Online buscamos aportar un granito de arena al proceso de autoconocimiento y bienestar de las personas que acuden a consulta,
          ya que hemos comprobado la belleza de transitar este camino con un buen guía que acompañe y nutra.
        <br />
        Nada nos llena más que acompañar procesos profundos de cambio.
        </p>
        <p className="fw-bold text-dark">‍¡Responde el cuestionario y te recomedaremos un grupo de profesionales idoneos para ti!</p>
        <div>
          <button type="button" className="btn active btn-outline-secondary rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Iniciar cuestionario
          </button>
          <ModalQuestionary />
          <hr />
        </div>
      </div>
      <div>
        <div className="row row-cols-1 row-cols-md-2 g-3 justify-content-evenly">
          {people.map((person) => {
            return (
              <CardOverview key={person.login.uuid} person={person} />
            )
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center p-3">
        <button
          type="button"
          className="btn"
          onClick={handlePrevPage}
        >
          <i className="bi bi-chevron-double-left"></i><i className="bi bi-chevron-double-left"></i>
        </button>
        <span className="d-flex align-items-center">{page}</span>
        <button
          className="btn"
          onClick={handleNextPage}
        >
          <i className="bi bi-chevron-double-right"></i><i className="bi bi-chevron-double-right"></i>
        </button>
      </div>
    </div>
  );
};


