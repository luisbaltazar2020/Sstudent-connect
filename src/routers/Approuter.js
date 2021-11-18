import {Routes, Route, BrowserRouter } from "react-router-dom"
import { LoguinScreen } from "../components/Loguin/LoguinScreen"
import { RegistroScreen } from "../components/Registro/RegistroScreen"
import { Navbar } from "../components/ui/Navbar"


export const Approuter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<LoguinScreen/>}/>
                <Route path="/registro" element={<RegistroScreen />} />
            </Routes>
            
        </BrowserRouter>
    )
}
