import GoogleMap from "./GoogleMap";
import GoogleMapUk from "./GoogleMapUk";




function GoogleMapRen() {
    return (
      <div className="googlemap">
       <div className="googlemap1">
       <h1>NIGERIA</h1>
        <GoogleMap />
       </div>
        <div className="googlemap2">
        <h1>UNITED KINGDOM</h1>
        <GoogleMapUk />
        </div>
        
      </div>
    );
  }
  
  export default GoogleMapRen;