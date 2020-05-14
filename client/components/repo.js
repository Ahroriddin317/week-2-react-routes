import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown/with-html'
import axios from 'axios'
import Header from './header'

const Repo = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [description, setDescription] = useState([])
  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/${userName}/${repositoryName}/contents/README.md?ref=master`
      )
      .then((it) => {
        setDescription(atob(it.data.content))
      })
  }, [userName, repositoryName])
  return (
    <div>
      <Header repositorylist />
      <div id="description">
        <ReactMarkdown source={description} escapeHtml={false} />
      </div>
    </div>
  )
}

export default Repo
