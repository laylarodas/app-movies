import React from 'react'

export const Edit = ({movie}) => {

    const componentTitle = "Edit Movie"

  return (
    <div className='editForm'>
        <hr />
        <h3 className='title'>{componentTitle}</h3>
        <form action="">
            <input type="text" name='title' className='editTitle' defaultValue={movie.title} />

            <textarea name="description" id="" cols="30" rows="10" className='editDescription' defaultValue={movie.description} placeholder='Movie description'></textarea>

            <input type="submit" value="update" className='edit' />
        </form>
    </div>
  )
}
