import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const result = await response.json(); 
        setData(result);
        setLoading(false); 
      } catch (err) {
        setError(err.message); 
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

 
  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>; 
  }

  return (
    <div>
      <h1 className = "navbar-align"> Fetching data</h1>
      <p className = "content-below-heading">This is the content of data</p>
      <h2>Fetched Data from API</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>: {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetcher;
