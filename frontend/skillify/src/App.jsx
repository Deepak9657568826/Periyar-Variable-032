import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/Navbar'
import AllRoutes from './AllRoutes'
import Footer from './component/Footer'
import PostYourService from './pages/PostYourService'
import ServiceDescription from './pages/ServiceDescription'
import Services from './pages/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      {/* <AllRoutes/> */}
      <PostYourService/>
      <Footer/>
    </div>
  )
}

export default App
