import React, { useState, useEffect } from 'react';


console.log(process.env)

function ShipmentNews() {
  const [news, setNews] = useState([]);
  
const apiKey = "3ee11dc7fe9d40b199e62099f007be6c"

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=shipment&apiKey=${apiKey}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, [apiKey]);

  return (
    <div className='news1'>
      <h1>Shipment News</h1>
      <ul className='news2'>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <img
                src={article.urlToImage}
                alt={article.title}
                width="100"
                height="100"
              />
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShipmentNews;
