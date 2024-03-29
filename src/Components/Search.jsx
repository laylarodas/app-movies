import React, { useState } from 'react'


export const Search = ({listState, setListState}) => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false);

  const searchMovie = (e) => {
    //crear estado y actualizarlo
    setSearch(e.target.value);

    //Filtrar
    let foundMovies = listState.filter(movie => {
      return movie.title.toLowerCase().includes(search.toLocaleLowerCase());
    })


    if(search.length <= 1 || foundMovies <= 0){
      foundMovies = JSON.parse(localStorage.getItem("movies"));
      setNotFound(true);
    }else{
      setNotFound(false);
    }


    //console.log(foundMovies);
    setListState(foundMovies);

  }

  return (
    <div className='search'>
       <h3 className='title'>Search</h3>
       { (notFound == true && search.length > 1 && 
            (<span className='notFound'>No match found</span>)
       )}
        <form action="">
            <input type="text" id="searchField" name='search' autoComplete='off' onChange={ searchMovie }/>
            <button>Submit</button>
        </form>
    </div>
  )
}
