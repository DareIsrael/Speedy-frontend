import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [ error , setError ] = useState(null)
    const [isLoading, setIsLoading] = useState (null)
    const { dispatch } = useAuthContext ()

    const login = async ( email, password) => {
        setIsLoading(true)
        setError (null)
      

        const response = await fetch ('https://speedyspell-api.onrender.com/api/user/login', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

       
        if (response.ok) {
            // Update the user state and perform other actions
            dispatch({ type: 'LOGIN', payload: json });
          
            // Store user data in localStorage
            localStorage.setItem('user', JSON.stringify(json));
            
            // Display success toast after the user state has been updated
            toast.success(' ✔️ Login successful!', {
              position: 'top-right', // You can adjust the position as needed
              autoClose: 3000, // Duration in milliseconds
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          
            setIsLoading(false);
          } else {
            setIsLoading(false);
            setError(json.error);
          
            // Display error toast for failed login
            toast.error('Login failed. Please check your credentials and try again.', {
              position: 'top-right', // You can adjust the position as needed
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
          
    }

    return {login, isLoading, error }
}