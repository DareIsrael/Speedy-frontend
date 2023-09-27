import react, { useState } from "react"
import { useLogin } from "../hooks/useLogin"



function Login () {

  const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const {login, error, isloading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login( email, password )
    }

     
     
    return (
    <div className="log-p">
      <div className="log-d">
      <h1>SPEEDY-SPELL</h1>
          <h2>We can handle any size of load, to-and-from anyplace, 
          and within any service time frame, giving you our
           very best and bringing a win-win situation to the table.</h2>
      </div>



    <div className= "login-page"  >

    <h1>Login to your account</h1>

    <form onSubmit={handleSubmit}>
    <label>Email</label>
    <input type="email" placeholder="✉️ Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
    <label>Password</label>
    <input type="Password" placeholder="🔒 Password" onChange={(e) => setPassword (e.target.value)} value={password} />
    <button disabled={isloading}>login</button>
    {error && <div className="error">{error}</div>}
    </form>
    <p><a href="/register">Register</a> an account</p>

    </div>
        </div>
        
        
         
          
        
         
         
    )
    }

    export default Login;