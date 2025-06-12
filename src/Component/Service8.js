import react from "react"
import { Icon } from '@iconify/react';

function Service8 () {
    return (
        <div className="serv-8">
            <div className="icons">
            <div className="eachicons" >
            <Icon className="img" icon="eos-icons:container-outlined" />
            
            <h5>IMPORT LOGISTICS</h5>
            </div>
            <div className="eachicons">
            <Icon className="img"  icon="mdi:truck-cargo-container" />
            
            <h5>EXPORT LOGISTICS</h5>
            </div>
            <div className="eachicons">
            <Icon className="img"  icon="streamline:shipping-transfer-truck-time-truck-shipping-delivery-time-waiting-delay" />
            
            <h5>CARGO EXPRESS</h5>
            </div>
            <div  className="eachicons" >
            <Icon className="img"  icon="material-symbols:warehouse-rounded" />
            
            <h5>WAREHOUSE</h5>
            <h5></h5>
            </div>
            <div className="eachicons">
            <Icon className="img"  icon="streamline:shipping-transfer-cart-package-box-fulfillment-cart-warehouse-shipping-delivery" />
            
            <h5>INFORMATION EXPRESS</h5>
            
            </div>
            <div className="eachicons">
            <Icon className="img"  icon="mdi:tow-truck" />
            
            <h5>VEHICLE RECOVERY</h5>
            
            </div>
            
            </div>
        </div>

    )
}

export default Service8;