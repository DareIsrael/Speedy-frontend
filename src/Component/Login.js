import react, { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login () {

  const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const {login, error, isloading} = useLogin()

    // const handleSubmit = async (e) => {
    //     e.preventDefault()

    //     await login( email, password )
    // }


    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        // Call your login function
        await login ( email, password );
    
        // If login is successful, display a success toast notification
        toast.success('Login successful!', {
          position: 'top-right', // You can adjust the position as needed
          autoClose: 3000, // Duration in milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (error) {
        // Handle any errors that may occur during login
        console.error('Error during login:', error);
        toast.error('Login failed. Please check your credentials and try again.', {
          position: 'top-right', // You can adjust the position as needed
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    };
    
    
     
    return (
    <div className="log-p">
      <div className="log-d">
      <ToastContainer />
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