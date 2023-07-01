import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNews = async() => {

    const collectionRef = collection( FirebaseDB, 'news' );
    const docs = await getDocs( collectionRef );

    const news = [];
    
    docs.forEach( doc => {
        news.push( {
            id: doc.id,
            ...doc.data()
        });
    })

    return news;
}