

// import React, { useState } from 'react';

// function Tracking() {
//   // const [apiKey, setApiKey] = useState();
//   const [trackingNumber, setTrackingNumber] = useState('');
//   const [trackingData, setTrackingData] = useState(null);
//   const [error, setError] = useState(null);

//   const apiUrl = `https://api.ship24.com/v1/tracking?apiKey=${"apik_X2igQMcEWCCDTM9QGuuqkB8tFA3pW1"}&tracking_number=${trackingNumber}`;

//   const fetchTrackingData = () => {
//     setError(null);
//     setTrackingData(null);

//     fetch(apiUrl)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Request failed with status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         // Check if the response is empty or doesn't contain valid data
//         if (!data || typeof data !== 'object') {
//           throw new Error('Invalid or empty response data');
//         }
//         setTrackingData(data);
//       })
//       .catch((err) => {
//         // Handle errors, including JSON parsing errors
//         setError(err.message);
//       });
//   };

//   return (
//     <div>
//       <h1>Shipment Tracker</h1>
//       {/* <div>
//         <label>
//           API Key:
//           <input
//             type="text"
//             value={apiKey}
//             onChange={(e) => setApiKey(e.target.value)}
//           />
//         </label>
//       </div> */}
//       <div>
//         <label>
//           Tracking Number:
//           <input
//             type="text"
//             value={trackingNumber}
//             onChange={(e) => setTrackingNumber(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <button onClick={fetchTrackingData}>Track Shipment</button>
//       </div>
//       {error && <p>Error: {error}</p>}
//       {trackingData && (
//         <div>
//           <h2>Tracking Data:</h2>
//           <pre>{JSON.stringify(trackingData, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Tracking;



import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const data = [
    { name: "service", link: "/service" },
    { name: "contact", link: "/contact" },
    { name: "shop", link: "/shop" },
    { name: "about", link: "/about" },
    { name: "story", link: "/home6" },
    { name: "welcome", link: "/home" },
    { name: "Search", link: "/search" },
    { name: "Example", link: "/example" },
  ];

  const handleSearch = () => {
    // Filter data based on the search term
    const filteredResults = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className="searchbox">
    <div className="searchbox2">
    <h1>Search...</h1>
      <div className="searchinput">
        <input 
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="searchresult">
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((result, index) => (
              <li className="searchli" key={index}>
                <Link to={result.link}>{result.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>

    </div>
      
    </div>
  );
}

export default Search;
