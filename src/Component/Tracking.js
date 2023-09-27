import React, { useState } from 'react';

const Tracking = () => {
  const [apiKey] = useState('asat_02be73b680384fc7b78f052593d39816');
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState(null);

  const trackShipment = async () => {
    try {
      const response = await fetch(
        `https://api.aftership.com/v4/trackings/${trackingNumber}`,
        {
          method: 'GET',
          headers: {
            'as-api-key': apiKey,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed with status: ${response.status}`);
      }

      const data = await response.json();
      setTrackingInfo(data.data.tracking);
    } catch (err) {
      setError(err.message);
      console.error('Error:', err);
    }
  };

  return (
    <div>
      <h1>Shipment Tracker</h1>
      <div>
        <label>
          Tracking Number:
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={trackShipment}>Track Shipment</button>
      </div>
      {error && <p>Error: {error}</p>}
      {trackingInfo && (
        <div>
          <h2>Tracking Info:</h2>
          <pre>{JSON.stringify(trackingInfo, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Tracking;
