import { Header, NavBar } from './components';
import { AppRouter } from './router/AppRouter';

export const ConanApp = () => {
    return (
        <>
            <Header />
            <NavBar />
            <div className="container">
                <AppRouter/>
            </div>
        </>
    );
}