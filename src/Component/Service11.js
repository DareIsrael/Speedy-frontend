import react from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

function Service11 () {
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);
    
    return (
        <div className="home3">

        <div className="home3-1">
        <div className="home3-2">
        <h1 data-aos="fade-right">WAREHOUSING</h1>
        <p className="line"></p>
        <h2>We provide a robust express network through its cooperation, which is 
          based on a history of dependable scheduled air-cargo service.</h2>
        <p>We provide a secure and controlled environment to protect these 
        items from theft, damage, or environmental factors. We
        are equipped for cross-docking, a process in which products are received
         and immediately shipped out without being stored. This is common in industries
          requiring just-in-time delivery</p>
        <a href="/contact"> <button>CONTACT US</button></a>
        </div>

        <div className="home3-3">
            <img src="https://media.giphy.com/media/I16ojdo6NgOMufTEOx/giphy.gif"></img>
            {/* <img src="images/home7-2.jpeg"></img> */}
        </div>
        

        </div>
    </div>
)

    
}

export default Service11;