import React, { useState , useEffect} from "react";
import ShopProducts from "./ShopProducts";
import { usePostsContext } from "../hooks/usePostsContext"
import FadeLoader from "react-spinners/FadeLoader";

// import Cart from "./Cart";
// import Cart2 from "./Cart2";

function Shop2() {
    const {posts, dispatch} = usePostsContext()
    
    const [loading, setLoading] = useState(false)
     useEffect(()=> {
        setLoading(true)
        setTimeout(()=> {
        setLoading(false)
        }, 5000)
     }, [])
    

    useEffect (() => {
        const fetchPosts = async () => {

            const response = await fetch ('/api/post')
            const json = await response.json()

            if (response.ok) {
            dispatch({type: 'SET_POSTS', payload: json})
                // setPosts(json)
           
            }
        }

        fetchPosts()
     }, [])

    return (
        <div className="shop2-1">
           <div className="shop2-2">
            <div className="shop2-3">
                {/* ........ */}
            <div className="shop2-4">
            {
                loading? 
                (<FadeLoader color={"#E25E3E"} loading={loading}  size={100} aria-label="Loading Spinner"  data-testid="loader"
      />)   : 

       

      ( posts && posts.map((post, index) => (
        
        <ShopProducts  key = {post._id}  post = { post } index = {index}/>
       
        )))
            }

            {/* {posts && posts.map((post, index) => (
        
        <ShopProducts  key = {post._id}  post = { post } index = { index }/>
       
        ))} */}

            
             
            </div>
             
                {/* ........ */}

            <div className="shop2-6">
             <div className="shop2-7">
               {/* <div className="shop2-8">
               <h1>Cart</h1>
               <p className="line"></p>
                
               </div> */}

               {/* <div className="shop2-8">
               <h1>Filter by Price</h1>
               <p className="line"></p>
               
               <button>Filter</button>
               </div> */}

                           {/* FEATURE */}


               <div className="shop2-9">
               <h1>Featured Products</h1>
               <p className="line"></p>
             

               <div className="shop2-10">
               <img src="images/cat2.jpeg"></img>
               <div className="shop-11">
               <h2>Toyota Ice</h2>
               <p className="line"></p>
               <span className="star">★★★</span><span>☆☆</span>
               <p>$6,500,000.00</p>
               </div>
               <hr></hr>
               </div>

               <div className="shop2-10">
               <img src="images/cat5.jpeg"></img>
               <div className="shop-11">
               <h2>Daf, 7.5 tones</h2>
               <p className="line"></p>
               <span className="star">★★★★</span><span>☆</span>
               <p>$12,000000</p>
               </div>
               <hr></hr>
               </div>

               <div className="shop2-10">
               <img src="images/cat4.jpeg"></img>
               <div className="shop-11">
               <h2>Fold Transist Van</h2>
               <p className="line"></p>
               <span className="star">★★★★</span><span>☆</span>
               <p>$4,500,000</p>
               </div>
               <hr></hr>
               </div>

               </div>
                

               </div>

            </div>

            </div>
           </div>
        </div>
    )
}

export default Shop2;