import { useEffect, useState } from 'react'
import Sidebar from '../Components/Sidebar'
import ProductCart from '../Components/ProductCart'
import type { Product } from '../Types/ProductType'

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const fetchProducts = async (categorySlug: string) => {
    setLoading(true)
    try {
      const res = await fetch(
        `https://shop.sprwforge.com/api/v1/products${
          categorySlug ? '?category=' + categorySlug : ''
        }`
      )
      const data = await res.json()
      console.log(data)
      setProducts(data.data.result.data)
    } catch (error) {
      console.error('Error fetching products', error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchProducts('')
  }, [])
  return (
    <div className='flex bg-[#f1f2f3]'>
      <Sidebar onCategoryClick={fetchProducts} />
      <div className='flex-1 p-4'>
        <h2 className='text-xl font-semibold mb-4'>Products</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 '>
            {products?.map((product) => (
              <ProductCart key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomePage
