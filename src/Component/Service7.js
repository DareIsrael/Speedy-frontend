import react, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";


function Service7 () {
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (
        <div className="home3">

            <div className="home3-1">
            <div className="home3-2">
            <h1 data-aos="fade-right"> TRUCK YOUR CARGO </h1>
            <p className="line"></p>
            <h2> We care for the environment, which means we are guided by strong values </h2>
            <p> Moving house can create as much emotional upheaval as a bereavement or divorce. You can rely on our experience and expertise to make your move.

            Our tailored solutions are geared to the individual needs of expatriate staff, HR managers, private individuals, families and diplomats.
            We offer a range of services that include careful packing of your belongings..</p>
            </div>

            <div className="home3-3">
                <img src="images/serv7.jpeg"></img>
                {/* <img src="images/container8.jpeg"></img> */}
            </div>
            

            </div>
        </div>

    )
}

export default Service7;