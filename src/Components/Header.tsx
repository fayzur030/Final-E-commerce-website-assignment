import { CircleArrowRight, Mail, Phone } from 'lucide-react'
import LanguageDropdown from './LanguageDropdown'
import header_logo from '../assets/header-logo.svg'
import { IoIosSearch } from 'react-icons/io'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className=' bg-white'>
      {/* Top bar */}
      <div className='max-w-7xl mx-auto px-3 py-2 flex justify-between items-center text-sm'>
        <div className='flex gap-4 items-center'>
          <div>
            <LanguageDropdown />
          </div>
          <div className='hidden md:flex items-center gap-1'>
            <Mail size={16} /> <span>webzedcontact@gmail.com</span>
          </div>
          <div className='hidden md:flex items-center gap-1'>
            <Phone size={16} /> <span> Helpline 4534345656</span>
          </div>
        </div>
        {/* LOGIN */}
        <Link to={'/login'} className='flex items-center gap-1 cursor-pointer'>
          <CircleArrowRight size={16} /> <span>LOGIN</span>
        </Link>
      </div>

      {/* Main Navbar */}
      <nav className='border-t'>
        <div className='max-w-7xl mx-auto px-6 py-3 flex justify-between items-center flex-col md:flex-row md:items-center md:justify-between gap-3 '>
          <img src={header_logo} alt='' className='h-10 w-auto' />
          <div className='relative w-full md:w-10/12'>
            <input
              type='text'
              placeholder='Search Here'
              className='border w-full rounded-md bg-gray-100 px-4 py-2 focus:outline-none'
            />{' '}
            <div className='absolute right-0 top-1/2 -translate-y-1/2 bg-purple-900 p-3 rounded-r-lg cursor-pointer'>
              <IoIosSearch className='text-white' size={20} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
