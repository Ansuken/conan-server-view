import { sanitizedDOM } from "../helpers/sanitizedDOM";

export const CardItem = ({ title = '', body, created }) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h5 className="text-main-color mb-0">{title}</h5>
                </div>
                <div className="card-body">
                    <p className="card-text" dangerouslySetInnerHTML={sanitizedDOM(body)}></p>
                </div>
                {
                    created 
                    ? (<div className="card-footer text-end"><small>Publicado: {new Date (created.seconds * 1000).toLocaleDateString('es-ES', options)}</small></div>)
                    : ''
                }
            </div>
        </>
    )
}
