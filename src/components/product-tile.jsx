import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { addToCart, removeFromCart } from '../../store/slices/cart-slice';


function ProductTile({product}) {
  const dispatch = useDispatch();
  const {cart} = useSelector(state=> state);

  const handleAddToCart = ()=>{
    dispatch(addToCart(product))
  }
  const handleRemoveFromCart = ()=>{
    dispatch(removeFromCart(product.id))
  }
  return (
    <div>
      <div className='h-[360px] p-4  flex flex-col gap-3 border-2 border-red-900 rounded-xl mt-10 ml-5 group items-center '>
        <div className='h-[180px]'>
            <img 
            src={product?.image}
            alt={product?.title}
            className='object-cover w-full h-full'
            />
        </div>
        <div >
            <h1 className='w-40 truncate mt-3 text-lg text-gray-800 font-bold'>{product?.title}</h1>
        </div>
        <div className='flex items-center justify-center mt-5 w-full'>
            <button onClick={cart.some(item=> item.id === product.id) ? handleRemoveFromCart : handleAddToCart } className='px-4 py-4 bg-red-900 text-white font-bold rounded-lg font-bold '>{cart.some(item=> item.id === product.id) ? 'Remove From Cart' : 'Add To Cart'}</button>
        </div>
      </div>
    </div>
  )
}

export default ProductTile
