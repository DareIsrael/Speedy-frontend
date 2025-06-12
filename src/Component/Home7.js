import react from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"

function Home7 () {
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);
    
    return (
        <div className="home3">

        <div className="home3-1">
        <div className="home3-2">
        <h1 data-aos="fade-right">OUR FLEET</h1>
        <p className="line"></p>
        <h2>We provide a robust express network through its cooperation, which is 
          based on a history of dependable scheduled air-cargo service.</h2>
        <p>When commodities are imported into the nation, they occasionally arrive early. Other times, before reaching 
        the export headquarters, products need to be kept elsewhere for a while..</p>
        <a href="/service"> <button>READ MORE</button></a>
        </div>

        <div className="home3-3">
            <img src="images/home7-1.jpeg"></img>
            <img src="images/home7-2.jpeg"></img>
        </div>
        

        </div>
    </div>
)

    
}

export default Home7;