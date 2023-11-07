import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { CardOverview } from "./cards";
import { getPeople } from "../../store";


export const Team = () => {

  const dispatch = useDispatch();
  const { page, people = [], gender } = useSelector(state => state.people);


  useEffect(() => {
    dispatch(getPeople(1, gender))
    console.log('People', people)
  }, [])

  const handlePrevPage = () => {
    if (page <= 1) return
    dispatch(getPeople(page - 1, gender))
  }

  const handleNextPage = () => {
    dispatch(getPeople(page + 1, gender))
  }


  return (
    <div className="container">
      <div className="text-center text-secondary pb-2">
        <h1 className="title"> Conoce a nuestros psicólogos y psicólogas </h1>
        <div className="alert" role="alert">
          En las sesiones de Psicoterapia Online buscamos aportar un granito de arena al proceso de autoconocimiento y bienestar de las personas que acuden a consulta,
          ya que hemos comprobado la belleza de transitar este camino con un buen guía que acompañe y nutra.
          <br />
          Nada nos llena más que acompañar procesos profundos de cambio.
          <hr />
          <button className="btn btn-outline-secondary rounded-pill" type="button">Solicitar sesión</button>
        </div>

      </div>
      <div>
        <div className="form-group mb-3">
          <label htmlFor="genderSelect" className="form-label">Seleccionar género:</label>
          <select
            id="genderSelect"
            className="form-select"
            value={gender}
            onChange={(e) => dispatch(getPeople(1, e.target.value))}
          >
            <option value="">Todos</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>
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


