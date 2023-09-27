import react from "react"
import Service from "./Service"

function Service2 () {
    return (
        <div className="serv2">
        <div  className="serv2-1">
        <div className="serv2-2">
        <img src="images/service2.jpeg"></img>
        <div className="serv2-3">
        <h1>Logging trucks</h1>
        <p>A logging truck or timber lorry is a large truck used to
             carry logs to the construction.</p>
            <a href="/calculator"> <button>GET QUOTE</button> </a> 
        </div>
        
        </div>
        <div className="serv2-2">
        <img src="images/service3.jpeg"></img>
        <div className="serv2-3">
         <h1> Concrete trucks </h1>
         <p> Special concrete transport trucks are made to transport and mix concrete up.</p>
         <a href="/calculator"><button>GET QUOTE</button></a> 
        </div>
        </div>
        <div className="serv2-2">
        <img src="images/service4.jpeg"></img>
        <div className="serv2-3">
        <h1>Dump trucks</h1>
        <p>A dump truck is a truck used for transporting loose material for construction.</p>
        <a href="/calculator"> <button>GET QUOTE</button> </a> 
        </div>
        
        </div>

        </div>
        </div>
    )
}

export default Service2;