import React, { useEffect, useState } from 'react'
import { Edit } from './Edit';

export const ListMovies = ({listState, setListState}) => {

  //const [listState, setListState] = useState([]);

  const [edit, setEdit] = useState(0);
  
  useEffect(() => {
    console.log("Cargando componente listado de peliculas")
    getMovies();
  },[]);


  const getMovies = () => {
    let movies = JSON.parse(localStorage.getItem("movies"));

    setListState(movies);
    return movies;
  }

  const deleteMovie = (id) => {

    //obtener peliculas almacenadas
    let storedMovies = getMovies();
    
    //filtrar las peliculas
    let newMoviesArray = storedMovies.filter(movie => movie.id !== parseInt(id));
    //console.log(storedMovies, newMoviesArray);
    
    //actualizar estado del listado
    setListState(newMoviesArray);
    
    //actualizar datos en el local storage
    localStorage.setItem('movies',JSON.stringify(newMoviesArray));
  }

  return (
    <>
      {listState != null ? 
        listState.map(movie => {

            return (
              <article key={movie.id} className='movieItem'>
                <h3 className='title'>{movie.title}</h3>
                <p className='description'>{movie.description}</p>
                <button className='edit' onClick={
                  () => setEdit(movie.id)
                }>Edit</button>
                <button className='delete' onClick={() => { deleteMovie(movie.id)}}>Delete</button>

                {/* Edit Form*/}
                {
                  edit === movie.id && (
                    
                    <Edit movie={movie} getMovies={getMovies} setEdit={setEdit} setListState={setListState}/>
                  )
                }

              </article>
            )
        })
        : <h3>There aren't movies</h3>
      }
          
    </>
  )
}
