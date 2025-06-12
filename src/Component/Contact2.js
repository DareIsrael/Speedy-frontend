import react from "react"
import { Icon } from '@iconify/react';

function Contact2 () {
    return (
        <div className="con">
        <div className="con2">
            <div className="con2-1">
            <h1>KEEP IN TOUCH</h1>
            <p className="line"></p>
            <h2>Say hello and send us message.</h2>
                <form action="mailto:dareisrael4@gmail.com" method="post" className="con2-2">
                    <div className="con2-3"> 
                    <input type="text" placeholder=" Full Name " />
                    <input type="text" placeholder="Email Address" />
                    </div>
                    <textarea placeholder="Message" />
                    <button type="submit"> SEND REQUEST </button>
                </form>
            </div>

            <div className="con2-1">
            <h1>OUR OFFICE</h1>
            <p className="line"></p>
            <h2> Feel free to contact us anytime you need our services. </h2>
            <p> Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.
             Credibly innovate granular sources. </p>
             <p> Seamlessly empower fully researched growth UK</p> 
             <div className="con2-2">
             <h6><Icon className="Conicon1" icon="formkit:whatsapp" /><span>+44 7438 079290 </span></h6>
             <h6><Icon className="Conicon2"  icon="gg:phone" /><span>+44 7845 134587 </span></h6>
             <h6><Icon className="Conicon2"  icon="entypo:landline"  /><span> 02036682258</span></h6>
             <h6><Icon className="Conicon2"  icon="clarity:email-solid"  /><span> bisiolusola99@gmail.com</span></h6>
             <h6><Icon className="Conicon2"  icon="clarity:email-solid"  /><span> jonas@speedyspellcargo.co.uk</span></h6>
             
             </div>
             
           
             <div className="servCon-3">
             <a href="https://api.whatsapp.com/send?phone=447438079290&text=Hello, how can I help you" target="_blank"><Icon className="Conicon" icon="logos:whatsapp-icon" /></a>
            <Icon className="Conicon" icon="devicon:facebook" />
            <Icon className="Conicon" icon="skill-icons:twitter"  />
            <Icon className="Conicon" icon="skill-icons:instagram" />
         </div>

            </div>
        </div>
        </div>
    )
}

export default Contact2;