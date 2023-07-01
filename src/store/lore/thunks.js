import { loadLore } from '../../helpers';
import { setLore } from './loreSlice';

export const startLoadingLore = () => {
    return async ( dispatch ) => {
        const lore = await loadLore();
        dispatch( setLore( lore ) );
    }
}