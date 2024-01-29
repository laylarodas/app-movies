import React, { useEffect, useState } from 'react'

export const ListMovies = ({listState, setListState}) => {

  //const [listState, setListState] = useState([]);

  useEffect(() => {
    console.log("Cargando componente listado de peliculas")
    getMovies();
  },[]);


  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setListState(movies);

  }

  return (
    <>
      {listState != null ? 
        listState.map(movie => {

            return (
              <article key={movie.id} className='movieItem'>
                <h3 className='title'>{movie.title}</h3>
                <p className='description'>{movie.description}</p>
                <button className='edit'>Edit</button>
                <button className='delete'>Delete</button>
              </article>
            )
        })
        : <h3>There aren't movies</h3>
      }
          
    </>
  )
}
