import { CircleArrowRight, Mail, Phone } from 'lucide-react'
import LanguageDropdown from './LanguageDropdown'

const Header = () => {
  return (
    <header className='bg-slate-50 shadow-sm px-4 py-3 sm:justify-between'>
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row  justify-between items-center gap-3'>
        <ul className='flex flex-col sm:flex-row items-center gap-4'>
          <li>
            <LanguageDropdown />
          </li>
          <li>
            <div className='flex gap-2 items-center text-sm text-slate-700'>
              <Mail size={18} />{' '}
              <span className='hidden sm:inline cursor-pointer'>
                Mail webzedcontact@gmail.com
              </span>
            </div>
          </li>
          <li>
            <div className='flex gap-2 items-center  text-sm text-slate-700'>
              <Phone size={18} />{' '}
              <span className='hidden sm:inline'>Helpline 4534345656</span>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <button className='flex gap-2 items-center text-sm transition '>
              {' '}
              <CircleArrowRight size={18} /> LOGIN
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
