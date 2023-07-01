import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PageTitle } from "../components";

import { startLoadingServerInfo } from "../store/server/thunks";
import { sanitizedDOM } from "../helpers/sanitizedDOM";

export const ServerInfo = () => {

    const { serverInfo } = useSelector( state => state.serverInfo );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingServerInfo() );
    }, []);

    const renderSanitizedInfo = ( data ) => (<div dangerouslySetInnerHTML={sanitizedDOM(data)}></div>);
    const renderInfoHeader = ( data ) => (<h5 className="text-main-color">{data}</h5>);

    return (
        <>
            <PageTitle title="Info del Servidor" />
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm-6">
                            {renderInfoHeader('Nombre:')}
                        </div>
                        <div className="col-sm-6">
                            {renderInfoHeader('Dirección:')}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            {serverInfo[0]?.name}
                        </div>
                        <div className="col-sm-6">
                            {serverInfo[0]?.address}
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                    <div className="row">
                        <div className="col-sm-6">
                            {renderInfoHeader('Reglas de Servidor:')}
                        </div>
                        <div className="col-sm-6">
                            {renderInfoHeader('Reglas del PvP:')}
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            {renderSanitizedInfo(serverInfo[0]?.rules)}
                        </div>
                        <div className="col-sm-6">
                            <div className="text-conan-primary"><small>Recuerda que estos horarios de PvP es tan soño a daño entre jugadores, no a estructuras</small></div>
                            {renderSanitizedInfo(serverInfo[0]?.pvp_rules)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}