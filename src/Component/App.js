import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import News from "./News"
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Shop from "./Shop";
import Calculator from "./Calculator";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Trucking from "./Trucking";
import AirCargo from "./AirCargo";
import OceanCargo from "./OceanCargo";
import Couriercargo from "./Couriercargo"
import Login from "./Login";
import LogReg from "./LogReg";
import Register from "./Register";
import { useAuthContext } from "../hooks/useAuthContext"
import Home11 from "./Home11";
import SRegister from "./SRegister";
import Search from "./Search";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home6 from "./Home6";
import Pricing from "./Pricing";







function App () {

  const { user } = useAuthContext()


  
  return (
    <BrowserRouter>

  <Routes>
    <Route path="/" element={<Navbar />}>
      <Route index element={ <Home /> } />
       <Route path="/service" element={<Service />} />
       <Route path="/about" element={<About />} /> 
       <Route path="/news" element={<News />} />
       <Route path="/shop" element={<Shop />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/calculator" element={user?  <Calculator /> : <Navigate to="/login" /> } />
       <Route path="/search" element= { <Search />} />
       <Route path="/home11" element={user? <Home11 /> : <Navigate to="/login" />}/>
       <Route path="/news" element={<News />}/>
          
          
        
       <Route path="/sregister" element= {<SRegister />} />
       
        <Route path="/LogReg" element={<LogReg />} />
        <Route path="/register" element= {!user ? <Register /> : <Navigate to= "/sregister" /> } />

        <Route path="/login" element={ !user? <Login /> : <Navigate to= "/calculator" />} />
    
  


        
        
          
        
        

    </Route>
  </Routes>
</BrowserRouter>
      
    
   
  )
}

export default App;