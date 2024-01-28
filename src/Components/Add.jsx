import React from 'react'

export const Add = () => {
  return (
    <div className='add'>
        <h3>Add Movie</h3>
        <form action="">
            <input type="text" placeholder='Title'/>
            <textarea name="" id="" cols="30" rows="10" placeholder='description'></textarea>
            <input type="submit" value="save"/>
        </form>
    </div>
  )
}
