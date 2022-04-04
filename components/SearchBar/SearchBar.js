
import React, { useCallback, useRef, useState } from 'react'

import "./SearchBar.css"
const options={person:"person",post:"post"}
const inputPlaceholders={
    person:"please type the person's id",
    post:"please type post's associated hastags",
}
function SearchBar() {

    const input = useRef(null)
    const select = useRef(null)

    const[optionSelected,setOptionSelected]=useState(options.person)

    const changePlaceholder=useCallback(
      () => {
        setOptionSelected(select.current.value)

      },
      [],
    )
    
  return (
      <div className="search-form-wrapper">

      <form className="flex f-column  f-gap-0p5">
<div className="search-input-wrapper flex f-gap-1">

<label>
<span className="label">
  {inputPlaceholders[optionSelected]}
  </span>
<input type="text"  ref={input}/>
<button className="btn">search</button>
</label>
</div>
<p>What are you searching for ? </p>
<select ref={select} onChange={changePlaceholder}>
    <option value={options.person}>{options.person}</option>
    <option value={options.post}>{options.post}</option>
</select>

      </form>
    <h2 className="title">Your Search Results</h2>
      </div>
  )
}

export default SearchBar