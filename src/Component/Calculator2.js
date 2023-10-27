import react, { useState } from "react"
import { Icon } from '@iconify/react';

import Trucking from "./Trucking";

import Trucking2 from "./Trucking2";
import Couriercargo2 from "./Couriercargo2";

import AirCargo2 from "./AirCargo2";
import OceanCargo2 from "./OceanCargo2";
import { useAuthContext } from "../hooks/useAuthContext";


function Calculator2 () {
    
    

    const [trucking, setTrucking] = useState()
   const [courier, setCourier] = useState()
   const [aircargo, setAircargo] = useState()
   const [oceancargo, setOceancargo] = useState()


   const { user } = useAuthContext ()

    function Trucking () {
         return (
            setTrucking (<Trucking2 />  )
         )
    }
      
    function Courier () {
        return (
            setCourier (<Couriercargo2 />)
           )
    }

    function Aircargo () {
        return (
         setAircargo(<AirCargo2 />)
        )
    }

    function Oceancargo () {
        return (
         setOceancargo(<OceanCargo2 />)
        )
    }

    return (
        
       <div className="Cal">
        <div className="cal-user">
         <Icon className="cal-user-img" icon="fluent-mdl2:contact" />
         <span>{user.email}</span>
        </div>
        
        <div className="Cal-1">
    
        <div className="Cal-2">
        <Icon className="Cal-Icon" icon="ri:truck-line" />
        <h1>Trucking Cost Calculator</h1>
        
         <button onClick={Trucking}>GET QUOTE</button> 
        
      </div> 

        <div className="Cal-3">
        <Icon className="Cal-Icon" icon="jam:plane" />
        <h1>Air Cargo Cost Calculator</h1>
         <button onClick={Aircargo}>GET QUOTE</button> 
        </div>

        <div className="Cal-4">
        <Icon className="Cal-Icon" icon="majesticons:ship-line" />
        <h1>Ocean Cargo Cost Calculator</h1>
         <button onClick={Oceancargo } >GET QUOTE</button> 
        </div>

        <div className="Cal-5">
        <Icon className="Cal-Icon" icon="material-symbols:trolley-outline" />
        <h1> Courier Service Cost Calculator</h1>
        <button onClick={Courier}>GET QUOTE</button>
        </div>

        </div>
        <div>
        {trucking} {courier} {aircargo} {oceancargo}
        </div>
        
       </div> 
    )
}

export default Calculator2;