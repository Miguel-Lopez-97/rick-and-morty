import React, { useState } from 'react'
import './searchBar.css'

export default function SearchBar ({ onChange }) {
  const [name, setName] = useState('')

const handleChange = event => {
  event.preventDefault()
  onChange(name)
  setName("")  
}

  return (
    <form
      onSubmit={handleChange}>
      <input
        id="inputCharacter"
        type='text'
        placeholder='Name...'
        value={name}
        onChange={event => {
          setName(event.target.value)}}
        className='textInput'
      />

      <input type='submit' value='Add' className='buttonInput' disabled={name?"":"disable"}/>
    </form>
  )
}
