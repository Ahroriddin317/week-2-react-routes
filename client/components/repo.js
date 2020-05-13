import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'

const Repo = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [description, setDescription] = useState([])
  useEffect(() => {
    axios
      .get(`https://api.github.com/repos/${userName}/${repositoryName}/contents/:description`)
      .then((it) => {
        setDescription(it.data)
      })
  }, [userName, setDescription])
  return (
    <div>
      <Header repositoryUserName={userName} />
      <div id="description">{JSON.stringify(description)}</div>
    </div>
  )
}

export default Repo
