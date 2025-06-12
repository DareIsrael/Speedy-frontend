import react, {useEffect} from "react"
import AOS from "aos";
 import "aos/dist/aos.css";


function Service9 () {

    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (

        <div className="home3">

        <div className="home3-1">
        <div className="home3-2">
        <h1 data-aos="fade-left">MAIYEGUN LANDING & CLEARING COMPANY</h1>
        <p className="line"></p>
        <h2>Allied Company In Nigeria. </h2>
        <p> Nigeria aborted its pre-shipment inspection policy in favor of a destination
         inspection policy for imports. Under this policy, all imports are inspected on 
         arrival into Nigeria. This significantly increases clearance times and expenses. 
         Our Campany Expertise in Clearing of imported goods, Clearing Process and funding
          is our best responsibility, with the time frame of 3 months to refund. It inquires a 10% 
          interest per month of clearing cost.</p>
          <a href="#home8"> <button>CONTACT US TODAY</button> </a>
        </div>

        <div className="home3-3">
            <img src="images/clearing1.png"></img>
            <img src="images/clearing2.jpeg"></img>
        </div>
        

        </div>
    </div>


)
}

export default Service9;