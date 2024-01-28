import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ListMovies } from './Components/ListMovies'
import { Search } from './Components/Search'
import { Add } from './Components/Add'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='layout'>
        <header className='header'>
          <div className='logo'>
            <div className='play'></div>
          </div>
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
          <ListMovies />
        </section>
        <aside className='lateral'>
          <Search />
          <Add />
        </aside>
        <footer className='footer'>
          &copy; Master en JavaScript ES12 y TypeScript - <a href="http://laylarodasweb.es">laylarodasweb.es</a>
        </footer>
      </div>
      
    </>
  )
}

export default App
