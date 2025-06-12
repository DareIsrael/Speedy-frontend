import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";

function Service10 () {
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (
       
        <div className="home3">

        <div className="home3-1">
        <div className="home3-2">
        <h1 data-aos="fade-right"> VEHICLE RECOVERY SERVICES WITHING UK </h1>
        <p className="line"></p>
        
        
        </div>

        <div data-aos="fade-left" className="home3-3">
        <p>Our company provide assistance to drivers whose vehicles have broken down, 
        become immobilized, or are otherwise inoperable. We offer
        roadside assistance programs, and auto clubs. We render services for both personal 
        vehicle owners and businesses with fleets of vehicles.
        We ensure road safety, maintaining the flow of traffic, and providing assistance to 
        individuals and businesses when they encounter vehicle-related issues on the road.
         Whether you have a flat tire, a dead battery, or a vehicle in need of towing,
        these services are there to help when you're in a tough situation on the road.
        We recover up to 10 tons vehicles from any where in the UK to Your
        chosen destination.</p>
        <a href="/contact"> <button>CONTACT US</button></a>
        </div>
        

        </div>
    </div>

    )
}

export default Service10;