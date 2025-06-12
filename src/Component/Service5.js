import react, {useEffect} from "react"
import { Icon } from '@iconify/react';
import AOS from "aos";
 import "aos/dist/aos.css";


function Service5 () {
  useEffect(() => {
    AOS.init({duration: 1000 });
    AOS.refresh();
  }, []);


    return (
        <div className="home3">

        <div className="home3-1">
        <div className="home3-2">
        <h1 data-aos="fade-right"> Our Expertise is the Best in the Logistics Service </h1>
        <p className="line"></p>
        <h2>Our company offers a comprehensive range of express, times and easy economy 
           delivery services.
         We provide affordable postal. </h2>
         <div className="serv5-1">
         <div className="serv5-2">
         <Icon className="serv5icon" icon="carbon:dns-services" />
         <h2> Express Delivery </h2>
         <p> Our company provides warehousing and distribution
           from our HQ. Our company provides warehousing. </p>

         </div>
         <div className="serv5-2">
         <Icon className="serv5icon" icon="svg-spinners:clock" />

         <h2> Timed Delivery </h2>
         <p> Bring to the table win-win survival strategies to 
          ensure proactive domination and at the end of the day. </p>

         </div>

         <div className="serv5-2">
         <Icon className="serv5icon" icon="carbon:network-4" />
         <h2> Economy Service </h2>
         <p> Capitalize on low hanging fruit to identify a ballpark 
          value added activity to beta test. Override the digital. </p>

         </div>

         </div>
        </div>

        <div className="home3-3">
            <img src="images/serv5.png"></img>
            <img src="images/serv7-2.jpeg"></img>
        </div>
        

        </div>
    </div>
    )
}

export default Service5;