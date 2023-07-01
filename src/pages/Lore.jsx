import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem, PageTitle } from "../components";

import { startLoadingLore } from "../store/lore/thunks";

export const Lore = () => {

    const { lore } = useSelector( state => state.lore );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingLore() );
    }, []);

    const itemsRender = () => {
        return [].concat(lore)
            .sort((a, b) => a.created.seconds < b.created.seconds ? 1 : -1 )
            .map( element => (
                <CardItem 
                    key={element.id}
                    { ...element }
                />
            ));
    }
    
    return (
        <>
            <PageTitle title="Lore" />
            { itemsRender() }
        </>
    )
}