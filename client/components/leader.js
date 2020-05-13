import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Leader = () => {
  const [inputValue, setInputValue] = useState('')

  const handlInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handlBtnClick = (e) => {
    e.preventDefaulr()
    setInputValue('')
  }
  return (
    <form>
      <input
        id="input-field"
        value={inputValue}
        placeholder="write userName"
        onChange={handlInputChange}
      />
      <Link to={`/${inputValue}`}>
        <button id="search-button" type="submit" onClick={handlBtnClick}>
          search
        </button>
      </Link>
    </form>
  )
}

export default Leader
