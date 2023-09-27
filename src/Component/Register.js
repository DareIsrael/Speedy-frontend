import react, { useState } from "react" 
import { useSignup } from "../hooks/useSignup"


function Register () {

    const [fName, setfName] = useState('')
    const [lName, setlName] = useState('')
    const [cName, setcName] = useState('')
    const [phone, setPhone] = useState('')
    const [sAddress, setsAddress] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const {signup, error, isloading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await signup( fName, lName, cName, phone, sAddress,
            city, country,email, password)
    }



    return  (

        <div className="log-p">

       <div className="log-d">
          <h1>SPEEDY-SPELL</h1>
           <h2>We can handle any size of load, to-and-from anyplace, 
           and within any service time frame, giving you our
            very best and bringing a win-win situation to the table..</h2>
         </div>

     <div className= "register"  >
        <h1>Register an account</h1>

        <form  onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" placeholder=" First Name" onChange={(e) => setfName(e.target.value) }  value={fName} />
        <label>Last Name</label>
        <input type="text"  placeholder="Last Name" onChange={(e) => setlName(e.target.value) }  value={lName}/>
        <label>Company Name</label>
        <input type="text" placeholder="Company Name" onChange={(e) => setcName(e.target.value) }  value={cName}/>
        <label>Phone Number</label>
        <input type="number" placeholder="Phone Number" onChange={(e) => setPhone(e.target.value) }  value={phone}/>
        <label>Street Address/number</label>
        <input type="text" placeholder="Street Address" onChange={(e) => setsAddress(e.target.value) }  value={sAddress}/>
        <label>City</label>
        <input type="text" placeholder="City" onChange={(e) => setCity(e.target.value) }  value={city}/>
        <label>Country</label>
        <input type="text" placeholder="Country" onChange={(e) => setCountry(e.target.value) }  value={country}/>
        <label>Email Address</label>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value) }  value={email}/>
        <label>Password</label>
        <input type="Password" placeholder="Password" onChange={(e) => setPassword(e.target.value) }  value={password}/>
        
        <button disabled={isloading}>signup</button>
        {error && <div className="error">{error}</div>}
        </form>
        <p>Already have an account? <a href="/login">Login</a></p>
    </div>

        </div>
       

       
    
        
    )
}

export default Register 