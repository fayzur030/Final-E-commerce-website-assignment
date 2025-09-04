import { Outlet, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import LoginPage from './Pages/LoginPage'

function App() {
  const location = useLocation()
  const hideHeaderRoutes = ['/login']
  const shouldHideHeader = hideHeaderRoutes.includes(location.pathname)
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        {!shouldHideHeader && <Header />}

        <main className='flex-grow'>
          <Routes>
            <Route path='/login' element={<LoginPage />} />
          </Routes>
          <Outlet />
        </main>
      </div>
    </>
  )
}

export default App
