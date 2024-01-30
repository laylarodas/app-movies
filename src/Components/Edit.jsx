import React from 'react'

export const Edit = () => {

    const componentTitle = "Edit Movie"

  return (
    <div className='editForm'>
        <hr />
        <h3 className='title'>{componentTitle}</h3>
        <form action="">
            <input type="text" name='title' className='editTitle' defaultValue="Original Title" />

            <textarea name="description" id="" cols="30" rows="10" className='editDescription'>Movie Description</textarea>

            <input type="submit" value="update" className='edit' />
        </form>
    </div>
  )
}
