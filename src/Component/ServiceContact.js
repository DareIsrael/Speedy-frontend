import react from "react"
import { Icon } from '@iconify/react';

function ServiceContact () {
    return (
       <div className="servCon">
         <div className="servCon-1">
         <h1> OUR CUSTOMERS SERVICE IS AVAILABLE 24/7 </h1>
         <div className="servCon-2">
         {/* <Icon className="servConicon" icon="fluent:call-12-filled" /> */}
         <Icon className="Conicon1" icon="formkit:whatsapp" />
         <h2>+44 7438 079290</h2>  
         </div>
         <div className="servCon-2">
         {/* <Icon className="servConicon" icon="fluent:call-12-filled" /> */}
         <Icon className="Conicon2"  icon="gg:phone" />
         <h2>+44 7845 134587</h2>
         </div>
         
         <div className="servCon-3">
            <a href="https://api.whatsapp.com/send?phone=447438079290&text=Hello, how can I help you" target="_blank"><Icon className="Conicon" icon="logos:whatsapp-icon" /></a>
            <a href=""><Icon className="Conicon" icon="devicon:facebook" /> </a>
            <Icon className="Conicon" icon="skill-icons:twitter"  />
            <Icon className="Conicon" icon="skill-icons:instagram" />

            {/* <Icon className="servConicon" icon="ic:outline-facebook" />
            <Icon className="servConicon" icon="formkit:twitter" />
            <Icon className="servConicon" icon="formkit:whatsapp" /> */}
         </div>
         </div>
       </div>
    )
}

export default ServiceContact;