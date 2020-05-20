import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown/with-html'
import axios from 'axios'

const Repo = ({ userName, repositoryName }) => {
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
      <div id="description">
        <ReactMarkdown source={description} escapeHtml={false} />
      </div>
    </div>
  )
}

export default Repo
