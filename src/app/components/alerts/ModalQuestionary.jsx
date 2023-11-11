import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPeople } from "../../../store";


export const ModalQuestionary = () => {

    const dispatch = useDispatch();
    const { page, gender, nationality } = useSelector(state => state.people);
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState(false);

    const nationalities = {
        AU: 'Australia', BR: 'Brasil', CA: 'Canadá', CH: 'Suiza', DE: 'Alemania', DK: 'Dinamarca', ES: 'España', FI: 'Finlandia', FR: 'Francia', GB: 'Reino Unido', IE: 'Irlanda',
        IN: 'India', IR: 'Irán', MX: 'México', NL: 'Países Bajos', NO: 'Noruega', NZ: 'Nueva Zelanda', RS: 'Serbia', TR: 'Turquía', UA: 'Ucrania', US: 'Estados Unidos'
    };

    const handleNameChange = e => {
        setName(e.target.value);
    }

    const handleNationalityChange = e => {
        const selectedNationality = e.target.value;
        dispatch(getPeople(page, gender, selectedNationality));
    };

    const handleGenderChange = e => {
        const selectedGender = e.target.value;
        dispatch(getPeople(page, selectedGender, nationality))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (name.trim() === '') {
            setErrorName(true);
            alert("Por favor, diligencia el nombre.");
        } else {
            setErrorName(false);
            dispatch(getPeople(1, gender, nationality));
        }
    };
    

    return (
        <div className="modal modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">¡Felicitaciones! <br />Completando este formulario ya estás dando el primer paso hacia tu bienestar.</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="d-flex form-label text-start" htmlFor="validationServer01">Nombre</label>
                                <input
                                    type="text"
                                    className={`form-control ${errorName ? 'is-invalid' : 'is-valid'}`}
                                    id="validationServer01"
                                    value={name}
                                    required
                                    onChange={handleNameChange}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="d-flex form-label text-start">¿Te gustaria que tu terapeuta fuera de algun país especifico?</label>
                                <select
                                    id="nationalitySelect"
                                    name="nationality"
                                    className="form-select form-select-sm"
                                    value={nationality}
                                    onChange={handleNationalityChange}
                                >
                                    <option defaultValue={""}>Todos</option>

                                    {Object.entries(nationalities).map(([nat, country]) => (
                                        <option key={nat} value={nat}>
                                            {country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="genderSelect" className="d-flex form-label">¿Tienes alguna preferencia de genero?</label>
                                <select
                                    id="genderSelect"
                                    name="gender"
                                    className="form-select"
                                    value={gender}
                                    onChange={handleGenderChange}
                                >
                                    <option defaultValue={""}>Todos</option>
                                    <option value="male">Masculino</option>
                                    <option value="female">Femenino</option>
                                </select>
                            </div>
                            <div>
                                <button 
                                    type="submit" 
                                    className="btn btn-outline-secondary d-flex justify-content-start" 
                                    onClick={handleSubmit}
                                    data-bs-dismiss="modal"
                                >
                                    ¡Quiero que me recomienden un profesional!
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
