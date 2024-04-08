import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewFilm } from "../pages/NewFilm";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/newfilm" element={<NewFilm />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/profile" element={<Profile />}/>

        </Routes>
    )
}
