import react, { useEffect} from "react"
import { Icon } from '@iconify/react';
import AOS from "aos";
import "aos/dist/aos.css";

function Service3 () {

    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (
        <div className="serv3">
            <div className="serv3-1">
            </div>

            <div className="serv3-2">

            <div className="serv3-3">
            <Icon data-aos="fade-right" className="serv3-4" icon="ph:truck" />
            <h2>Transport by Road</h2>
            <p>Sometimes goods can arrive early when they are being 
            brought into.</p>
            </div>

            <div className="serv3-3">
            <Icon data-aos="fade-right" className="serv3-4" icon="tabler:plane" />
            <h2>Air Cargo</h2>
            <p>User generated content in real-time will have 
            multiple touchpoints sales.</p>
            </div>

            <div className="serv3-3">
            <Icon data-aos="fade-right" className="serv3-4" icon="uil:ship" />
            <h2>Ocean Cargo</h2>
            <p>Bring to the table win-win survival strategies to
             ensure proactive end.</p>

            </div>

            <div className="serv3-3">
            <Icon data-aos="fade-right" className="serv3-4" icon="emojione-monotone:train" />
            <h2>Fast Train Cargo</h2>
            <p>Leverage agile frameworks to provide a robust synopsis
             for high level.</p>

            </div>

            <div className="serv3-3">
            <Icon data-aos="fade-left" className="serv3-4" icon="iconoir:internet" />
            <h2>Track Your Shipment</h2>
            <p>Dynamically procrastinate B2C users after installed 
            base benefits rates.</p>

            </div>

            <div  className="serv3-3">
            <Icon data-aos="fade-left" className="serv3-4" icon="game-icons:hand-truck" />
            <h2>Local Moving</h2>
            <p>Nanotechnology immersion along the information 
            highway will close.</p>


            </div>

            <div className="serv3-3">
            <Icon data-aos="fade-left" className="serv3-4" icon="carbon:tcp-ip-service" />
            <h2>Courier Services</h2>
            <p>Taking seamless key performance indicators offline 
            to maximise.</p>

            </div>

            <div className="serv3-3"> 
            <Icon data-aos="fade-left" className="serv3-4" icon="icon-park-outline:import-and-export" />
            <h2>Import & Export</h2>
            <p>Ballpark value added activity to beta test override 
            the digital.</p>

            </div>


            </div>
        </div>
    )
}

export default Service3;