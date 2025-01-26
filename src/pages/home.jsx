import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Circles } from 'react-loader-spinner';
import ProductTile from '../components/product-tile';

function Home() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false)
  async function fetchListOfProducts (){
    setLoading(true)
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
     if(data) {
      setLoading(false)
      setProduct(data)
     }
  }

  useEffect(()=>{
    fetchListOfProducts();
  },[])
  return (
    <div>
       
        
        {loading ?
         (
          <div className='min-h-screen w-full flex justify-center items-center'>
           <Circles
          height={120}
          width={120}
          color='rgb(200, 29, 29)'
          visible={true}
         /> </div>
            
         ) : <div className="min-h-[80vh] w-full p-10 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
          {
            product && product.length ? 
            product.map((productItem)=> <ProductTile product={productItem}/>)
            : null
          }
         </div> 
        }
        </div>
      
    
  )
}

export default Home
