import React from 'react'
import type { ProductCartProps } from '../Types/ProductCartInterface'

const BASE_URL = 'https://shop.sprwforge.com/uploads/'
const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
  return (
    <div className='border p-4 rounded  hover:shadow-lg  transition'>
      <img
        src={`${BASE_URL}${product.image}`}
        alt={product.title}
        className='w-full h-40 object-cover mb-2 rounded'
      />
      <h3 className='text-lg font-semibold'>{product.title}</h3>
    </div>
  )
}

export default ProductCart
