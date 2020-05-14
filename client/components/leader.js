import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const Leader = () => {
  const [inputValue, setInputValue] = useState('')

  const handlInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const handlBtnClick = (e) => {
    e.preventDefaulr()
    setInputValue('')
    history.push()
  }
  return (
    <form className="w-full max-w-sm m-8">
      <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
        <input
          id="input-field"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          value={inputValue}
          placeholder="write userName"
          onChange={handlInputChange}
        />
        <Link to={`/${inputValue}`}>
          <button
            id="search-button"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
            onClick={handlBtnClick}
          >
            search
          </button>
        </Link>
      </div>
    </form>
  )
}

export default Leader
