import { Routes, Route } from "react-router-dom";

import Login from "./Login/index"
import Registration from "./Registration/index"

export default function RoutesFun(){

    return(
        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registration />} />

        </Routes>
    )
    
}