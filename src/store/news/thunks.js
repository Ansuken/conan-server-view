import { loadNews } from '../../helpers/loadNews';
import { setNews } from './newsSlice';

export const startLoadingNews = () => {
    return async ( dispatch ) => {
        const news = await loadNews();
        dispatch( setNews( news ) );
    }
}