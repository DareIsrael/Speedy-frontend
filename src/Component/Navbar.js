import React, { useState, useEffect, useRef } from "react"
import { Outlet, Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";


import { Icon } from '@iconify/react';
import Login from "./Login";

function Navbar () {
  const [icon, setIcon ] = useState (false);
  const [show, setShow] = useState (false)


  const { logout } = useLogout()
    const { user } = useAuthContext ()

  const handleClick = () => {
     logout()
  }

     function nav ()  {
      return (
            setIcon (!icon)
         )    
  }

  
   function nav2 () {
      setShow (!show )
      
     
       
    }

  //   const [textbox, setTextbox] = useState ("searchinput");

  //   function searchbox () {
  //      if(textbox === "searchinput") {
  //        return (
  //           setTextbox ("searchinput2")
  //        )
  //      } else {
  //        return (
  //           setTextbox ("searchinput")
  //        )
  //        }
      
  //  }

   
   
   
       
     
   
   
    
  return (
      <div className="cargoNav">

        
        <nav className="nav"  >
       <div className="cargoinfo">
       <a href="/"><Icon icon="subway:world" className="logo" /></a>
        <span className="logoname">SPEEDY-SPELL</span>
        
       </div>
       
        <ul className={show? "nav-active" : "nav-1"}>
        
         <li onClick={nav2} > <Link className="navli" to="/">HOME</Link> </li> 
         <li onClick={nav2}><Link className="navli" to="/service">SERVICES</Link></li> 
         <li onClick={nav2} ><Link className="navli" to="/about">ABOUT US</Link></li>
       
         <li onClick={nav2} ><Link className="navli" to="/shop">SHOP</Link></li>
         <li onClick={nav2} ><Link className="navli" to="/news">BLOG/NEWS</Link></li>
         <li onClick={nav2} ><Link className="navli" to="/contact">CONTACT</Link></li>
         <div className="navlog">

         { user && (
                    <div>
                    <span>{user.email}</span>
                    <button className="logout" onClick={handleClick}>Logout</button>
                    </div>
           )}

         { !user && ( 
          <div className="navlog2"> 
           <li onClick={nav2} ><Link className="navli2" to= "/register">Register</Link></li>
              <li  onClick={nav2} ><Link className="navli" to= "/login">Login</Link></li>
            </div>

         )}
         </div>
         
         <div className="search">
        {/* <input placeholder="🔍    Search" className={textbox}></input> */}
        <a href="/search">🔍</a>
        </div>
       
        </ul>
        
        
          <div onClick={nav2} >
         <div className="navIcon" onClick={nav}  >
         
         <Icon icon="tdesign:menu" />
         {/* {icon ? <Icon icon="typcn:times" /> : <Icon icon="mingcute:align-justify-fill" />} */}
         
         
         </div>

        
        
        </div>
        {/* { user && ( */}
        
        
       
       </nav>
       <Outlet />
        </div>
  )



 
}

export default Navbar;
    


