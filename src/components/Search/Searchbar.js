import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

function Searchbar(props) {
  return (
    <div className='searchBar'>
      <select>
        <option value={'_id'}> Id </option>
        <option value={'title'}> Title </option>
        <option value={'genre'}> Genre </option>
        <option value={'seasons'}> Seasons </option>
      </select>
      <i> <BiSearch /> </i>
      <input 
          type={'text'} 
          placeholder='Search anything...' 
          onChange={(event) => {props.setSearch(event.target.value)}}
      />
    </div>
  )
}

export default Searchbar