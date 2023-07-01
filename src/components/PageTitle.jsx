export const PageTitle = ({ title }) => {

    let gettingProCounter = 0;
    let gettinProTimeout = null;
    const gettingPro = () => {
        gettingProCounter++;
        if ( gettingProCounter === 5 ) {
            document.documentElement.setAttribute('data-theme', 'lemba-mode');
        } else if ( gettingProCounter > 0 ) {
            clearTimeout(gettinProTimeout);
        }

        gettinProTimeout = setTimeout(() => {
            gettingProCounter = 0;
        }, 500);
    }
    return (
        <>
            <h2 className="page-title conan-font" onClick={gettingPro}>{title}</h2>
            <hr/>
        </>
    )
}
