import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../store/slices/cart-slice'

function CartTile({cartitem}) {
  const dispatch = useDispatch()
    const handleRemoveFromCart = ()=>{
     dispatch(removeFromCart(cartitem.id))
    }
  return (
    <>
    <div className='flex justify-between items-center p-3 bg-red-500 border rounder-xl rounded-lg mb-3'>
         <div className='flex items-center space-x-3 '>
            <img className='h-28 w-28 rounded-lg' src={cartitem?.image} alt={cartitem?.title} />
            <div className='flex flex-col '>
            <h1 className='ml-5 text-white font-bold text-xl '>{cartitem?.price}</h1>
            <h1 className='ml-5 text-white font-bold text-xl '>Price</h1>
            </div>
         </div>
         <div>
            <button onClick={handleRemoveFromCart} className='ml-10 px-4 py-4 bg-red-900 text-white font-bold rounded-lg font-bold '>Remove From Cart</button>
         </div>
    </div>
    </>
  )
}

export default CartTile
