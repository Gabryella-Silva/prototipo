import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home/Home";
import Tasks from "../pages/Tasks/Tasks";
import About from "../pages/About/About";

export default function AppRoutes(){
    return(

        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/tasks" element={<Tasks/>}/> 
            <Route path="/about" element={<About/>}/> 

        </Routes>
    )
}