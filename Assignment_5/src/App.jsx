import React, { useEffect, useState } from 'react'
import getProducts from './hook/useFetch';
import Loader from './hook/loader';



 const App = () => {
  const url = " https://api.escuelajs.co/api/v1/products";
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect (() => {
    async function fetchData() {
      try { 
        setLoading(true);  
        const products = await getProducts(url); URL
        setData(products); 
      }

      catch (error) {
        setError(error); 
      } finally {
        setLoading(false); 
      }
    }
  fetchData();

  }, [url]);

  
  return (
    <>
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', height: '100%' , width: '100%' , backgroundColor:'black'}}> 
    {loading && <Loader />} 
    {error && <p>Error: {error.message}</p>} 
    {!loading && !error && (
      data.map ((product) => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '10px', width: '200px' , color:'white' }}> 
          <div>
            <img src={product.category.image} alt={product.title} width="200" height="200" /> 
          </div>
          <h2>{product.title}</h2>
          <p>Price: ${product.price}</p>
          
        </div>
      ))
    )}  
  </div>
    
    </>
  )
}


export default App;
