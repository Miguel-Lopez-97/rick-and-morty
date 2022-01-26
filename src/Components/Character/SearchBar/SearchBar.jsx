import React, { useState } from 'react'
import './searchBar.css'

export default function SearchBar ({ onChange }) {
  const [name, setName] = useState('')

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        onChange(name)
      }}
    >
      <input
        id="inputCharacter"
        type='text'
        placeholder='Name...'
        value={name}
        onChange={event => {
          setName(event.target.value)}}
        className='textInput'
      />

      <input type='submit' value='Add' className='buttonInput'/>
    </form>
  )
}
