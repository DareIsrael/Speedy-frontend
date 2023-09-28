import react, { useState, useEffect } from "react";
import { Icon } from '@iconify/react';


function AirCargo2 () {

  

  const [height, setHeight] = useState ("")
  const [width, setWidth] = useState ("")
  const [depth, setDepth] = useState ("")
  const [commodity, setCommodity] = useState("")
  const [distance, setDistance] = useState(0)
  const [consignorName, setConsignorName] = useState("")
  const [consignorEmail, setConsignorEmail] = useState("")
  const [consignorPhone, setConsignorPhone] = useState("")
  const [consignorAddress, setConsignorAddress] = useState("")
  const [consignorPrefSer, setConsignorPrefSer] = useState("")
  const [consignorPrefSertime, setConsignorPrefSertime] = useState("")

  const [consigneeName, setConsigneeName] = useState("")
  const [consigneeEmail, setConsigneeEmail] = useState("")
  const [consigneePhone, setConsigneePhone] = useState("")
  const [consigneeAddress, setConsigneeAddress] = useState("")
  const [consigneePostcode, setConsigneePostcode] = useState("")
  const [consigneePrefSertime, setConsigneePrefSertime] = useState("")
  const [success, setSuccess] = useState("")
  const [error, setError] = useState(null)




  



  const airSubmit = async (e) => {
      e.preventDefault()

      

      

      const airConsignor = {
        height, width, commodity, distance, consignorName,consignorEmail,
        consignorPhone, consignorAddress, consignorPrefSer, consignorPrefSertime,
        consigneeName, consigneeEmail, consigneePhone,
        consigneeAddress, consigneePostcode, consigneePrefSertime
      }

      const response = await fetch ("https://speedyspell-api.onrender.com/api/air", {
          method: 'POST',
          body: JSON.stringify(airConsignor ),
          headers: {
              "Content-Type": 'application/json'
              
          }
      })
      const json = await response.json()

      if (!response.ok) {
        setError(" *  Please fill every blank space ❌❌")
      }
      if (response.ok) {
          setHeight("")
          setWidth("")
          setDepth("")
          setCommodity("")
          setDistance("")
          setConsignorName("")
          setConsignorEmail("")
          setConsignorPhone("")
          setConsignorAddress("")
          setConsignorPrefSer("")
          setConsignorPrefSertime("")

          setConsigneeName("")
          setConsigneeEmail("")
          setConsigneePhone("")
          setConsigneeAddress("")
          setConsigneePostcode("")
          setConsigneePrefSertime("")
          setSuccess("Successfully Submitted ✔️")

          setError(null)
          console.log('new Customer Added', json)
      }
  }


  const [quote, setQuote] = useState(null);

  useEffect(() => {
    // Define your pricing rules based on height, width, depth, and distance
    const basePricePerCubicMeter = 50; // Base price per cubic meter
    const pricePerKm = 5; // Price per kilometer

    if (height && width && depth && distance >= 0) {
      const volume = parseFloat(height) * parseFloat(width) * parseFloat(depth) / 1000000; // Convert to cubic meters
      let total = volume * basePricePerCubicMeter + parseFloat(distance) * pricePerKm;

      setQuote(`TQ : $${total.toFixed(2)}`);
    } else {
      setQuote("Invalid input");
    }
  }, [height, width, depth, distance]);
    
  
    

    return (
          <div className="truck">
          <h1 className="cargo-h1" >Air Cargo Cost Calculator</h1>
          <div className="truck-1">
              <div className="truck-2">
                <h1>Get your quote instantly</h1>
                <p className="line"></p>
                <p>Offering robust synopses using agile
                 frameworks for high-level overviews and iterative techniques.</p>
                <div className="truck-3">
                    <form onSubmit={airSubmit} >
                        <label>Height (cm)</label><br></br>
                        <select onChange={(e) => setHeight(e.target.value)}  value={height}>
                        <option>Select...</option>
                        <option>100cm+</option>
                        <option>200cm+</option>
                        <option>500cm+</option>
                        <option>800cm+</option>
                     </select><br></br>
                        <label>Width(cm)</label> <br></br>
                        <select onChange={(e) => setWidth(e.target.value)}  value={width}>
                        <option>Select...</option>
                        <option>100cm+</option>
                        <option>200cm+</option>
                        <option>500cm+</option>
                        <option>800cm+</option>
                     </select><br></br>
                        <label>Depth</label><br></br>
                        <select onChange={(e) => setDepth(e.target.value)}  value={depth}>
                        <option>Select...</option>
                        <option>100cm+</option>
                        <option>200cm+</option>
                        <option>500cm+</option>
                        <option>800cm+</option>
                     </select><br></br>
                    
                     <label> Commodity Type</label>  <br></br>
                     <select onChange={(e) => setCommodity(e.target.value)}  value={commodity} >
                        <option>Select...</option>
                        <option>General Merchandise</option>
                        <option>Fragile Goods</option>
                        <option>Fine Arts</option>
                        <option>Hazardous Goods</option>
                     </select><br></br>

                     <label>Distance(km)</label> <br></br>
                     <div className="truck-input">
                     <span>0(km)</span>
                     <input type="range" min="20-40" max="1000" onChange={(e) => setDistance(e.target.value)}  value={distance} />
                     <span>{distance}(km)</span>
                     </div>
                     <div className="truck-price">
                        
                     {
                            quote &&  <div className="truck-price2">
                                   <p><span className="truck-span"></span>{quote}</p>
                       
                              </div>
                              }
                        
                     </div>
                     
                    
                    <div className="truck-form">
                    <h5>Consignor</h5>
                    <div className="truck-form2">
                     <input type="text" placeholder="Name" onChange={(e) => setConsignorName(e.target.value)}  value={consignorName}/>
                     <input type="text" placeholder="Email" onChange={(e) => setConsignorEmail(e.target.value)}  value={consignorEmail}/>
                     <input type="number" placeholder="Phone" onChange={(e) => setConsignorPhone(e.target.value)}  value={consignorPhone}/>
                     <input type="text" placeholder="Address" onChange={(e) => setConsignorAddress(e.target.value)}  value={consignorAddress}/>
                     {/* <input type="text" placeholder="Preferred Service" onChange={(e) => setConsignorPrefSer(e.target.value)}  value={consignorPrefSer}/> */}
                     <select onChange={(e) => setConsignorPrefSer(e.target.value)}  value={consignorPrefSer}>
                        <option>From...</option>
                        <option>United Kindom</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        
                     </select>
                     <input type="date" placeholder="Preferred Service time" onChange={(e) => setConsignorPrefSertime(e.target.value)}  value={consignorPrefSertime}/>
                    </div>
                    <h5>Consignee</h5>
                    <div className="truck-form2">
                     <input type="text" placeholder="Name" onChange={(e) => setConsigneeName(e.target.value)}  value={consigneeName}/>
                     <input type="text" placeholder="Email" onChange={(e) => setConsigneeEmail(e.target.value)}  value={consigneeEmail}/>
                     <input type="number" placeholder="Phone" onChange={(e) => setConsigneePhone(e.target.value)}  value={consigneePhone}/>
                     <input type="text" placeholder="Address" onChange={(e) => setConsigneeAddress(e.target.value)}  value={consigneeAddress}/>
                     {/* <input type="text" placeholder="Post Code" onChange={(e) => setConsigneePostcode(e.target.value)}  value={consigneePostcode}/> */}
                     <select onChange={(e) => setConsigneePostcode(e.target.value)}  value={consigneePostcode}>
                        <option>To...</option>
                        <option>United Kindom</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        
                     </select>
                     <input type="date" placeholder="Preferred Service time" onChange={(e) => setConsigneePrefSertime(e.target.value)}  value={consigneePrefSertime}/>
                    </div>

                    <textarea placeholder="Message"></textarea>
                    </div>
                    <button type="submit">Submit</button>

                    {error && <div className="error-res" >{error}</div> || success && <div className="success-res">{success}</div>}
                    </form>
                </div>
              </div>



              <div className="truck-4">
               <img src="images/plane1.jpeg"></img>
               <div className="truck-5">
               
                <div className="truck-6">
                <Icon className="truck-icon" icon="ic:twotone-perm-device-information" />
                    <div>
                    <h2>Details</h2>
                    <p>Submit the service details.</p>
                    </div>
                    
                </div>
                <div className="truck-6">
                <Icon className="truck-icon" icon="carbon:request-quote" />
                  <div>
                  <h2>Quote</h2>
                    <p>Get cost estimate about our service.</p>
                  </div>
                    
                </div>
                <div className="truck-6">
                <Icon className="truck-icon" icon="solar:book-linear" />
                    <div>
                    <h2>Book</h2>
                    <p>Book prefered service time.</p>
                    </div>
                    
                </div>
                <div className="truck-6">
                <Icon className="truck-icon" icon="bxs:contact" />
                <div>
                    <h2>Contact</h2>
                    <p>We will contact you for additional info.</p>
                </div>
                    
                </div>
               </div>
              </div>
              </div>
          </div>
    )
}

export default AirCargo2;