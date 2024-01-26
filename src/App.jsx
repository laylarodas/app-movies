import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='layout'>
        <header className='header'>
          <h1>Movies</h1>
        </header>
        <nav className='nav'>
          <ul>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      
    </>
  )
}

export default App
