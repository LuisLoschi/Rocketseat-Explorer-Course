import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { NewNote } from "../pages/NewNote";
import { Details } from "../pages/Details";
import { Profile } from "../pages/Profile";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/newnote" element={<NewNote />}/>
            <Route path="/details/:id" element={<Details />}/>
            <Route path="/profile" element={<Profile />}/>

        </Routes>
    )
}
