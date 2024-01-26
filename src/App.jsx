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
        <section className='content'>

        </section>
        <aside className='lateral'>
          <div className='search'>
            <h3 className='title'></h3>
            <form action="">
              <input type="text" />
              <button>Submit</button>
            </form>
          </div>
          <div className='add'>
            <h3>Add Movie</h3>
            <form action="">
              <input type="text" placeholder='Title'/>
              <textarea name="" id="" cols="30" rows="10" placeholder='description'></textarea>
              <input type="submit" value="save"/>
            </form>
          </div>
        </aside>
        <footer>
          &copy; Master en JavaScript ES12 y TypeScript - <a href="http://laylarodasweb.es">laylarodasweb.es</a>
        </footer>
      </div>
      
    </>
  )
}

export default App
