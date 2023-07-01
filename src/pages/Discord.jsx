import { CardItem, PageTitle } from "../components";

export const Discord = () => {

    const info = {
        title: 'Comunidad de Discord',
        body: `<p>¡Bienvenido al Discord de la comunidad de "Conan de los wevos"! 
                Si eres un apasionado del juego Conan Exiles y te encanta explorar y conquistar en este universo de fantasía, ¡este es el lugar adecuado para ti!
            </p>
            <p>En nuestro servidor de Discord, podrás encontrar toda la información relacionada con nuestro servidor de Conan Exiles, incluyendo actualizaciones, 
                eventos, y todo lo que necesitas saber para disfrutar al máximo de tu experiencia de juego. Además, podrás unirte a nuestra comunidad de jugadores, 
                compartir tus aventuras y hacer amigos que compartan tu misma pasión por Conan Exiles.
            </p>
            <p>En Conan de los wevos, buscamos crear una comunidad amigable y acogedora donde todos puedan disfrutar de este maravilloso juego. 
                Si eres un jugador experimentado, podrás compartir tus conocimientos y ayudar a otros a mejorar en el juego. 
                Si eres un jugador novato, podrás aprender de los más experimentados y disfrutar de una experiencia más enriquecedora.
            </p>
            <p>¡No esperes más y únete a nuestra comunidad de Conan Exiles en Discord! Haz clic en el enlace que te proporcionamos y comienza a vivir tus aventuras en este increíble mundo de fantasía. 
            </p>
            <p><a href="https://discord.gg/2Q5VNJAn" target="_blank">Comunidad de Discord</a></p>
            <p>
                ¡Te esperamos en el servidor de "Conan de los wevos"!
            </p>`
    };
    return (
        <>
            <PageTitle title="Discord" />
            <CardItem 
                { ...info }
            />
            
        </>
    )
}
