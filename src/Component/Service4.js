import react, { useEffect } from "react";
import { Icon } from '@iconify/react';
import AOS from "aos";
import "aos/dist/aos.css";

function Service4 () {
  
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (
        <div className="serv4">
            <div className="serv4-1">
            <div className="serv4-2">
            <img src="images/service4-1.jpeg"></img>
            <img src="images/service4-2.jpeg"></img>

            </div>

            <div className="serv4-2">
            <h1 data-aos="fade-left">MORE SERVICES</h1>
            <p className="line"></p>
            <h2> We care for the environment, which means we are guided by strong value. </h2>

            <div className="serv4-3">
            <Icon className="serv4icon" icon="game-icons:hand-truck" />
            <div className="serv4-4">
            <h2>Company Logistics</h2>
            <p>Override the digital divide with additional clickthroughs from
             developers and immersion.</p>
            </div>
            </div>

            <div className="serv4-3">
            <Icon className="serv4icon" icon="iconoir:time-zone" />
            <div className="serv4-4">
            <h2>Cargo Services </h2>  
             <p> Bring to the table win-win survival strategies to ensure 
             proactive domination.</p> 
            </div>
            </div>

            <div className="serv4-3">
            <Icon className="serv4icon" icon="carbon:train-time" />

            <div className="serv4-4">
              <h2> Express Delivery</h2> 
              <p> Nanotechnology immersion along the information highway will 
              close the loop on focusing.</p> 
            </div>
            </div>

            <div className="serv4-3">
            <Icon className="serv4icon" icon="streamline:shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay" />
            <div className="serv4-4">
               <h2> Always on Time </h2> 
               <p> Organically grow the holistic world view of disruptive innovation via workplace.</p>
            </div>
            </div>




            </div>

            </div>
        </div>
    ) 
}

export default Service4 ;