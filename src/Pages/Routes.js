import { Routes, Route } from "react-router-dom";

import Login from "./Login/index"
import Registration from "./Registration/index"
import Main from "./Main/index"
import NewEntry from "./Main/NewEntry"
import NewExit from "./Main/NewExit"

export default function RoutesFun(){

    return(
        <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Registration />} />
            <Route path="/main" element={<Main />} />
            <Route path="/novaEntrada" element={<NewEntry />} />
            <Route path="/novaSaida" element={<NewExit />} />

        </Routes>
    )
    
}