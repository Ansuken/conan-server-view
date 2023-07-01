import { loadServerInfo } from '../../helpers/loadServerInfo';
import { setServerInfo } from './serverSlice';

export const startLoadingServerInfo = () => {
    return async ( dispatch ) => {
        const serverInfo = await loadServerInfo();
        dispatch( setServerInfo( serverInfo ) );
    }
}