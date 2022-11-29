import React, { useContext, createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route,Link ,Redirect} from "react-router-dom";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./view/Login";
import Dashboard from "./view/Dashboard";
import Customer from "./view/Customer";
import Events from "./view/Events";
import Tickets from "./view/Tickets";
import Register from "./view/Register";

function App() {
  return (
    <Routes>
      
    <Route path="/" element={ <Login/> } />
    <Route path="Register" element={ <Register/> } />
    <Route path="Dashboard" element={ <Dashboard/> } />
    <Route path="Customer" element={ <Customer/> } />
    <Route path="Events" element={ <Events/> } />
    <Route path="Tickets" element={<Tickets/>}/>
    <Route path="*" element={<Login/>}/>
  


    
  </Routes>
  );
}

export default App;
