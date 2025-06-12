import react, { useState } from "react"

function Home11 () {
      
//   const [name, setName] = useState("")
//   const [truckload, setTruckload] = useState("")
//   const [email, setEmail] = useState("")
//   const [commodity, setCommodity] = useState("")
//   const [error, setError] = useState(null)

//   const handleSubmit = async (e) => {
//       e.preventDefault()

      

      

//       const cargo = {name, truckload, email, commodity}

//       const response = await fetch ("/api/Cargo", {
//           method: 'POST',
//           body: JSON.stringify(cargo),
//           headers: {
//               "Content-Type": 'application/json'
//           }
//       })
//       const json = await response.json()

//       if (!response.ok) {
//           setError(json.error)
//       }
//       if (response.ok) {
//           setName("")
//           setTruckload("")
//           setEmail("")
//           setCommodity("")
//           setError(null)
//           console.log('new Customer Added', json)
//       }
//   }

    
  

    return (
        <div className="home11">

        <div className="home-opacity"></div>

<form action="/login" >
<div className="home11-0">
<h1>Get a quick offer</h1>

</div>
  <div className="home11-1">
  <label typeof="name">YOUR NAME</label>
  <input type="text" placeholder="Your name"  />
  <label typeof="name">EMAIL</label>
  <input type="text" placeholder="Email address" />
  </div>

  <div className="home11-1">
  
  <label typeof="name">TRUCKLOAD</label>
  <select id="Truckload"  >
  <option value="select">select</option>
  <hr></hr>
  <option value="straight">Straight Truck</option>
  <hr></hr>
  <option value="dry">Dry Van</option>
  <hr></hr>
  <option value="step">Step Deck</option>
  </select>
    <label typeof="name" >COMMODITY</label>
    <select className="select" id="Truckload"  >
  <option value="select">select</option>
  <hr></hr>
  <option value="soft">Soft Commodity</option>
  <hr></hr>
  <option value="petrol">Petroleum</option>
  <hr></hr>
  <option value="agric">Agricultural Products</option>
  </select>
  </div>
  
  <a href="/login"><button type="submit" className="home11-btn">GET A QUOTE</button> </a>
  
</form>

</div>
    )
}

export default Home11;