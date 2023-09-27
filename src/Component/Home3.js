import react from "react"
import { motion } from "framer-motion"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

function Home3 ()  {

   useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);
    return (
        <div className="home3">

            <div className="home3-1">
            <div className="home3-2">
            <h1 data-aos="fade-right" >WELCOME</h1>
            <p className="line"></p>
            <h2>All of our investments and efforts are focused on providing superior solutions. </h2>
            <p>When commodities are imported into the nation, they occasionally arrive early. Other times,
             before reaching the export headquarters, products need to be kept elsewhere for a while.</p>
            <p> We provide a robust express network through its cooperation, which is 
          based on a history of dependable scheduled air-cargo service.</p>
          <p>Our tailored solutions are geared to the individual needs of
           expatriate staff, HR managers, private individuals, families and
            diplomats. We offer a range of services that include careful packing of your belongings.</p>
            <img src="images/container8.jpeg"></img>
            
            </div>

            <div className="home3-3">
                <img src="images/container7.jpeg"></img>
                <img src="images/warehouse.jpeg"></img>
            </div>
            

            </div>
        </div>
    )
}

export default Home3;