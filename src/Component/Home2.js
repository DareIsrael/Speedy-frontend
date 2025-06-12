import react, { useEffect } from "react"
import { Icon } from '@iconify/react';
 import AOS from "aos";
 import "aos/dist/aos.css";


function Home2 () {
      
    useEffect(() => {
        AOS.init({duration: 1000 });
        AOS.refresh();
      }, []);

    return (
        <div className="home2">
        <div className="home2-1">
        <h1>OUR SOLUTIONS</h1>
        <p className="line"></p>
        <h2>Logistics through innovation, dedication and technology</h2>
        <div data-aos="fade-right" className="icons">
            <div className="eachicons" >
            <a href="/service"><Icon className="img" icon="eos-icons:container-outlined" /></a>
            
             <h5>IMPORT LOGISTICS</h5> 
             <p>Effective import logistics requires careful planning,
              coordination, and compliance with international trade regulations.</p>
            </div>
            <div  className="eachicons">
            <a href="/service"><Icon className="img"  icon="mdi:truck-cargo-container" /></a>
            
            <h5>EXPORT LOGISTICS</h5>
            <p>We plan, manage, and executing the shipment of goods from one country to another.
            Providing excellent customer service throughout the export process.</p>
            </div>
            <div className="eachicons">
            <a href="/service"><Icon className="img"  icon="streamline:shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay" /></a>
            
            <h5>CARGO EXPRESS</h5>
            <p>We typically specialize in transporting goods, packages, or freight overland (by truck), 
            by air, or by sea.</p>
            </div>
            <div className="eachicons" >
            <a href="/service"><Icon className="img"  icon="material-symbols:warehouse-rounded" /></a>
            
            <h5>WAREHOUSE</h5>
            <p> We provide a secure and controlled environment to 
            protect these items from theft, damage, or environmental factors.
            </p>
            <h5></h5>
            </div>
            <div className="eachicons">
            <a href="/service"><Icon className="img"  icon="streamline:shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery" /></a>
            
            <h5>INFORMATION EXPRESS</h5>
            <p>The primary emphasis is on speed and efficiency. Information is sent or delivered as quickly as possible,
             often in near real-time or with minimal delay.</p>
            </div>
            <div className="eachicons">
            <a href="/service"><Icon className="img"  icon="mdi:tow-truck" /></a>
            
            <h5>VEHICLE RECOVERY</h5>
            <p>We provide services for maintaining road safety,
             ensuring the efficient flow of traffic, providing assistance to 
            individuals and businesses when they encounter vehicle-related issues on the road.</p>
            </div>
            
            </div>
            <div className="home2-button">
            <a href="/calculator"><button>GET DETAILED QUOTE</button></a>
                
            </div>

        </div>
        
        </div>
    )
}

export default Home2;