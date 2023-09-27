import react, { useState } from "react"
import { Icon } from '@iconify/react';

function BottomIcon () {
   
     const [Up, setUp] = useState(false)
      
     function UpDown () {
        setUp (!Up)
     }


    return (
         <div onClick={UpDown} className={Up ? "bottomIcon1" : "bottomIcon"}>

       {Up ? <a href="#home1"> <Icon icon="ei:arrow-up" /> </a> : <a href="#home8"> <Icon icon="ei:arrow-up" /> </a>}
         </div>
    )
}

export default BottomIcon;