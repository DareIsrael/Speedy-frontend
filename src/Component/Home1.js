import react from "react"
 import Typed from "typed.js"
 import { useEffect, useRef } from "react";


  function Home1 () {
   const el = useRef(null);

  useEffect(() => {
      const typed = new Typed(el.current, {
          strings: [" SPELL CARGO LIMITED"],
          startDelay: 300,
          typeSpeed: 200,
          backDelay: 150,
          smartBackspace: true,
          showCursor: false,
          loop: true,
      });
  })

     return (
      

        <div id="home1" className="home1">
         <div className="home1-1">
            
         </div>
          <div className="home1-2">
          <h1 className="homeh1">SPEEDY <span ref={el}></span></h1>
        <h6>CARGO HANDLING FROM THE UK TO LAGOS AND ALL PARTS OF NIGERIA AND ACCRA GHANA</h6>
        <a href="./service"> <button>OUR SERVICES</button></a>
        <h2></h2>
         
        
         </div>
          
          

        </div>
   )
 }

 export default Home1;

  