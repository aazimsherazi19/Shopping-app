import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartTile from '../components/cartTile';

function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const {cart} = useSelector(state=> state);


useEffect(()=>{
 setTotalCart(cart.reduce((acc, curr)=> acc + curr.price, 0));
},[cart])

  console.log(cart,totalCart)
  return (
   <div className='flex justify-center'>
    {
      cart && cart.length ? 
      <>
      <div className='min-h-[80] max-w-6xl mx-auto grid md:grid-cols-2'>
       <div className='flex flex-col justify-center items-center p-3'>
        {cart.map((cartitem)=> <CartTile cartitem={cartitem}/>)}
       </div>
      </div> 

      <div>
        <div className='flex flex-col justify-start items-end space-y-5 p-5 mt-14'>
          <h1 className='text-red-800 font-extrabold text-xl '>Your Cart Summary</h1>
          <p className='text-gray-800 font-bold text-xl'><span>Total Item:</span><span>{cart?.length}</span></p>
          <p className='text-gray-800 font-bold text-xl'><span>Total Amount:</span><span>{Math.ceil(totalCart)}</span></p>
        </div>
      </div>
      </>
      : 
      <div className='min-h-[80vh] flex flex-col justify-center items-center'>
      <h1 className='text-gray-800 font-bold text-xl mb-2'>Your cart is empty</h1>
      <Link to={'/'}>
      <button className='px-4 py-4 bg-red-900 text-white font-bold rounded-lg font-bold '>Shop Now</button>
      </Link>
      </div>
    }
   </div>
  )
}

export default Cart
