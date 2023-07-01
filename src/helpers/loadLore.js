import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadLore = async() => {

    const collectionRef = collection( FirebaseDB, 'lore' );
    const docs = await getDocs( collectionRef );

    const lore = [];
    
    docs.forEach( doc => {
        lore.push( {
            id: doc.id,
            ...doc.data()
        });
    })

    return lore;
}