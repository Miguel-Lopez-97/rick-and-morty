import React, { useState } from 'react'

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
        type='text'
        placeholder='Name...'
        value={name}
        onChange={event => setName(event.target.value)}
      />

      <input type='submit' value='Add' />
    </form>
  )
}
