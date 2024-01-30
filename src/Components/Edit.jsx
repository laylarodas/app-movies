import React from 'react'

export const Edit = ({movie, getMovies, setEdit,setListState}) => {

    const componentTitle = "Edit Movie";

    const saveEdit = (e , id) => {
        e.preventDefault();
        
        //Conseguir el target del evento
        let target = e.target

        //buscar el indice del  objeto de la pelicula a actualizar
        const storedMovies = getMovies();
        //console.log(storedMovies):

        const index = storedMovies.findIndex(movie => movie.id === id);

        //crear objeto con ese indice
        let updatedMovie = {
            id,
            title: target.title.value,
            description: target.description.value
        }

        //actualizar el elemento con los nuevos valores
        storedMovies[index] = updatedMovie;

        //guardar en el local storage
        localStorage.setItem("movies", JSON.stringify(storedMovies));

        //actualizar estados
        setListState(storedMovies);
        setEdit(0);
    }

  return (
    <div className='editForm'>
        <hr />
        <h3 className='title'>{componentTitle}</h3>
        <form action="" onSubmit={ e => { saveEdit(e, movie.id)}}>
            <input type="text" name='title' className='editTitle' defaultValue={movie.title} />

            <textarea name="description" id="" cols="30" rows="10" className='editDescription' defaultValue={movie.description} placeholder='Movie description'></textarea>

            <input type="submit" value="update" className='edit' />
        </form>
    </div>
  )
}
