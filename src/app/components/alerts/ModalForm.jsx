import { useState } from "react";

export const ModalForms = () => {

    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [email, setEmail] = useState('');
    const [errorEmail, setErrorEmail] = useState(false);

    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleNameEmail = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '') {
            setErrorName(true);
            alert("Por favor diligenciar el nombre!");
        } else {
            setErrorName(false);
        }

        if (email.trim() === '') {
            setErrorEmail(true);
            alert("Por favor diligenciar el email!");
        } else {
            setErrorEmail(false);
        }

        if (name.trim() !== '' && email.trim() !== '') {
            // Realizar la lógica de envío del formulario aquí
            alert("Formulario enviado con éxito!");
        }
    };

    return (
        <div className="modal modal-lg" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 d-flex text-center" id="exampleModalLabel">¡Felicitaciones! <br />Completando este formulario ya estás dando el primer paso hacia tu bienestar.</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="d-flex form-label text-start" htmlFor="validationServerUsername">Nombre*</label>
                                <div className="input-group has-validation">
                                    <input
                                        type="text"
                                        className={`form-control ${errorName ? 'is-invalid' : 'is-valid'}`}
                                        id="validationServer01"
                                        value={name}
                                        required
                                        onChange={handleNameChange}
                                    />
                                    <div id="validationServerUsernameFeedback" className="invalid-feedback">
                                        Por favor diligencie su nombre.
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="d-flex form-label text-start" htmlFor="validationServer01">Email*</label>
                                <input
                                    type="text"
                                    className={`form-control ${errorEmail ? 'is-invalid' : 'is-valid'}`}
                                    id="validationServer01"
                                    value={email}
                                    required
                                    onChange={handleNameEmail}
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="btn active btn-outline-secondary d-flex justify-content-start"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                    onClick={handleSubmit}
                                >
                                    ¡Quiero solicitar sesión!
                                </button>
                                <div id="emailHelp" className="form-text text-start">* Revisa tu email (si no encuentras nada en la bandeja de entrada, revisa el Spam).</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}
