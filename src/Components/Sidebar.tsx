import { useEffect, useState } from 'react'
import type { SidebarProps } from '../Types/SidebarProps'
import type { Category } from '../Types/CategoriesProps'

const Sidebar: React.FC<SidebarProps> = ({ onCategoryClick }) => {
  const [categories, setCategories] = useState<Category[]>([])
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`https://shop.sprwforge.com/api/v1/common`)
        const data = await res.json()
        // console.log(data)
        setCategories(data?.categories || data?.data?.categories || [])
      } catch (error) {
        console.error('Error fetching categories', error)
      }
    }
    fetchCategories()
  }, [])
  return (
    <div className='w-64 p-4 border-r h-full'>
      <h2 className='text-xl font-semibold'>Categories</h2>
      <ul>
        {categories?.map((cat) => (
          <li
            key={cat.id}
            className='mb-2 cursor-pointer hover:text-gray-500'
            onClick={() => onCategoryClick(cat.slug)}
          >
            {cat.title}
            {cat.in_footer_child && cat.in_footer_child.length > 0 && (
              <ul className='ml-4 m-1'>
                {cat.in_footer_child.map((child) => (
                  <li
                    key={child.id}
                    className='mb-1 cursor-pointer hover:text-gray-500'
                    onClick={() => onCategoryClick(child.slug)}
                  >
                    {child.title}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
