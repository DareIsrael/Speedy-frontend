import react, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";


function Home4 () {
    
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (
        <div id="about" className="home4">
            <div className="home4-1">
           <h1>ABOUT US</h1>
           <p className="line"></p>
           <div className="home4-2">
           <div data-aos="fade-up" className="home4-3">
           <h1>1,073+</h1>
           <p>DELIVERED PACKAGES</p>
           </div>

           <div data-aos="fade-down" className="home4-3">
           <h1>324,325+</h1>
           <p>MILES IN 2022</p>
           </div>

           <div data-aos="fade-up" className="home4-3">
           <h1>2,456+</h1>
           <p>SOLUTIONS</p>
           </div>
            
           </div>
            </div>
        </div>
    )
}

export default Home4;