import { Link } from 'react-router-dom';
import { ModalQuestionary } from '../components/alerts';


export const Home = () => {
  return (
    <div className='container home'>
      <div className="d-flex p-5 mb-4 bg-body-tertiary rounded-3 purple">
        <div className="container-fluid">
          <h2 className='title'>Hablemos de</h2>
          <h1 className="display-3 fw-bold title">SALUD MENTAL</h1>
          <p className="col-md-8 fs-4 p-0 lead">
            La estabilidad emocional es posible.
            <br />Los procesos terapéuticos cambian vidas.
            Si buscás asistencia online en salud mental de calidad,
            ¡Bienvenid@, llegaste al lugar indicado!
          </p>
        </div>
        <div className='flex-shrink-1'>
          <img src="https://cdn.pixabay.com/photo/2017/01/19/09/32/communication-1991851_1280.png" className='img-home' />
        </div>
      </div>
      <div className="row align-items-md-stretch ">
        <div className="col-md-6">
          <div className="h-100 p-5 border rounded-3">
            <h3>Encuentra tu psicologo con nuestro sistema de matching</h3>
            <p className='lead'>Buscar el psicólogo adecuado, puede resultar complejo. Por eso, hemos creado un sistema de matching que encuentra al mejor psicólogo/a para ti.
              <br />¿Cómo funciona? Tú rellenas un breve cuestionario y nuestro algoritmo, encontrará el mejor psicologo según tus necesidades.
              <br /><strong>¡Así de rápido!</strong></p>
            <Link className="nav-link px-2" to={"/team"}>
              <button className="btn active btn-outline-secondary" type="button">Conoce nuestro equipo</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className="h-100 p-5 border rounded-3 align-content-center purple">
            <h2 className='pb-2'>Sabias que...</h2>
            <p className='lead pt-5 pb-5'>La psicología online es una nueva forma de terapia cómoda y flexible,
              que permite acercar a paciente y terapeuta sin límites geográficos,
              y que puede ser realizada en cualquier momento del día
              en base al horario que te resulte más cómodo.</p>
            <Link className="nav-link px-2" to={"/therapy"}>
              <button className="btn btn-outline-secondary" type="button">Conoce más</button>
            </Link>

          </div>
        </div>
      </div>
      <footer className="pt-3 mt-4 text-body-secondary border-top">
        {/* Importar Footer */}
      </footer>

    </div>
  )
}