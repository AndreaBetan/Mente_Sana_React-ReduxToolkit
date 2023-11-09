

export const OnlineTherapy = () => {
    
    const videoId = 'UESj5FrnMfM';

    return (
        <div classNameName="container">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
                <div className="row d-flex align-items-center justify-content-center">
                    <div className="col-md-7">
                        <h1 className="display-3 fw-bold title">¿Qué es la Psicoterapia Online?</h1>
                        <p className="lead">La psicoterapia online surge como una nueva modalidad terapéutica que pretende acercar al paciente mediante las tecnologías actuales. Es decir que es la versión a distancia de la psicoterapia de siempre, utilizando las ventajas y los recursos de Internet.</p>
                    </div>
                    <div className="col-md-5">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item rounded" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video" style={{ width: '100%', height: '300px' }}></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row align-items-md-stretch ">
                <div className="text-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden purple">
                    <div className="my-3 py-3">
                        <h2 className="display-5">Modalidad</h2>
                        <p className="lead">El servicio se presta a través de videollamada en tiempo real. 
                        <br /> La terapia online es una terapia real y efectiva, ya que se produce un contacto real entre la persona y el terapeuta, en un espacio “virtual”.
                        </p>
                    </div>
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2021/05/15/20/53/online-meeting-6256618_1280.jpg" alt="" style={{ width: '60%', height: '300px', borderRadius: '21px 21px 0 0' }}/>
                    </div>
                </div>
                <div className="bg-body-tertiary me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
                    <div className="my-3 p-3">
                        <h2 className="display-5">Efectividad</h2>
                        <p className="lead">Esta modalidad de intervención psicológica se adapta al potencial de las nuevas herramientas tecnológicas, aprovechando su capacidad para flexibilizar el tipo de servicio ofrecido.</p>
                    </div>
                    <div className="bg-dark shadow-sm mx-auto purple" style={{ width: '60%', height: '300px', borderRadius: '21px 21px 0 0' }}>
                        <img src="https://cdn.pixabay.com/photo/2019/06/13/09/41/business-4271251_640.png" alt="" style={{ width: '50%', height: '300px', borderRadius: '21px 21px 0 0'}} />
                    </div>
                </div>
            </div>
        </div>
    );
};