import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardItem, PageTitle } from "../components";

import { startLoadingNews } from "../store/news/thunks";

export const News = () => {

    const { news } = useSelector( state => state.news );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( startLoadingNews() );
    }, []);
    
    return (
        <>
            <PageTitle title="Noticias" />
            {
                news.map( element => (
                    <CardItem 
                        key={element.id}
                        { ...element }
                    />
                ))
            }
        </>
    )
}
