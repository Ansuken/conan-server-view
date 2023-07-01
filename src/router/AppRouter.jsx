import { Route, Routes } from "react-router-dom";

import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { News } from "../pages/News";
import { Lore } from "../pages/Lore";
import { ServerInfo } from "../pages/ServerInfo";
import { Discord } from "../pages/Discord";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/about' element={<About/>} />
                <Route path='/discord' element={<Discord/>} />
                <Route path='/lore' element={<Lore />} />
                <Route path='/news' element={<News />} />
                <Route path='/server-info' element={<ServerInfo />} />
                <Route path='/' element={<News/>} />
                <Route path='*' element={<News/>} />
            </Routes>
        </>
    )
}
