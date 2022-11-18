import { Routes, Route } from "react-router-dom";

import Login from "./Login/index"
import Registration from "./Registration/index"
import Main from "./Main/index"

export default function RoutesFun(){

    return(
        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/main" element={<Main />} />

        </Routes>
    )
    
}