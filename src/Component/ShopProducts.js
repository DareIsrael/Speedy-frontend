import { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Icon } from '@iconify/react';


function ShopProducts ( { post } ) {
    return (
         
         <div className="shop2-5">
            <div className="shop2-55">
           <img src= {post.image} ></img>
           {/* <img src="images/cat2.jpeg"></img> */}
           </div>
            
            <hr></hr>
            <h1>{post.name}</h1>
            <p className="line"></p>
            <p>#{post.price}</p>
            <a><Icon className="shop-location" icon="gridicons:location" />lagos</a>
            <a href="https://api.whatsapp.com/send?phone=447438079290&text=Hello" target="_blank"><button>contact us</button></a>
            <p className="shop-details">Contact us for more </p>
            </div>
           
           
            

    )
}

export default ShopProducts;

