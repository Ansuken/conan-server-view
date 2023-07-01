import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadServerInfo = async() => {

    const collectionRef = collection( FirebaseDB, 'servers' );
    const docs = await getDocs( collectionRef );

    const serverInfo = [];
    
    docs.forEach( doc => {
        serverInfo.push( {
            id: doc.id,
            ...doc.data()
        });
    })

    return serverInfo;
}