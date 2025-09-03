import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface Language {
  code: string
  name: string
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'po', name: 'Portuguese' },
]

const LanguageDropdown: React.FC = () => {
  const [selected, setSelected] = useState<Language>(languages[0])
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => setOpen(!open)
  const selectLanguage = (lang: Language) => {
    setSelected(lang)
    setOpen(false)
  }

  return (
    <div className='relative max-w-7xl mx-auto'>
      <button
        onClick={toggleDropdown}
        className=' bg-white border rounded-md shadow-sm flex  items-center focus:outline-none focus:ring-1 focus:ring-purple-800'
      >
        {selected.name}
        <ChevronDown
          className={`transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
          size={20}
        />
      </button>
      {open && (
        <ul className='absolute z-10 mt-1 w-full bg-white border rounded-md shadow-lg text-sm md:text-base '>
          {languages.map((lang) => (
            <li
              key={lang.code}
              onClick={() => selectLanguage(lang)}
              className='px-4 py-2 cursor-pointe hover:bg-gray-200'
            >
              {lang.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageDropdown
