import React from 'react'

const Searchbar = (props) => {

  const changeValue =(value) => {
  props.onChange(value)
  console.log(value)
}
  return (
    <div className='search-bar'>
        <p>Search Item</p>
       <input type='text' placeholder='Apple Watch, Samsung S21, Macbook Pro, ...' onChange={(e) => changeValue(e.target.value)}/>
    </div>
  )
}

export default Searchbar