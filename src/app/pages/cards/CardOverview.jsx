import { Link } from 'react-router-dom';

export const CardOverview = ({ person }) => {

  return (

    <div className="card-container" style={{width: '35rem'}}>
      <div className="card purple">
        <div className="row g-0">
          <div className="col-md-5">
            <img src={person.picture.large} className="card-img rounded-circle p-3" alt={person.picture}/>
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div className="card-body text-dark">
              <h3 className="card-title mb-0"> {person.name.first} {person.name.last} </h3>
              <p className="card-text mb-0">{person.dob.age} años</p>
              <p className="card-text">{person.location.country}, {person.location.city}</p>
              <Link to={`/team/${person.login.uuid}`}>
                <button className="btn btn-outline-secondary rounded-pill">Ver mas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

