import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

export const Add = ({setListState}) => {

  const titleComponent = "Add Movie";
  const [movieState, setMovieState] = useState({
    title: '',
    description: ''
  })

  const { title, description} = movieState;

  const GetFormValues = (e) => {
    e.preventDefault();

    //Obtener datos del formulario
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    // crear objeto de la nueva pelicula

    let movie = {
      id: new Date().getTime(),
      title,
      description
    }

    //guardar estado
    setMovieState(movie);
    //console.log(movieState);

    // actualizar listado
    setListState(items => {
      return [...items, movie]
    })


    //guardar en el localstorage
    //localStorage.setItem('movies', JSON.stringify([movie]));
    SaveInStorage("movies", movie);
    

  }

  return (
    <div className='add'>

        <h3>{titleComponent}</h3>

        { (title && description) && " Movie Added: "  + title}
        

        <form action="" onSubmit={GetFormValues}>
            <input type="text" 
            id='title' 
            name='title'
            placeholder='Title'/>

            <textarea name="description" id="description" cols="30" rows="10" placeholder='description'></textarea>

            <input type="submit" value="save"/>
        </form>
    </div>
  )
}
