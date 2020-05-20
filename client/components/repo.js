import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

const Repo = ({ readmeMD }) => {
  return (
    <div>
      <div id="description">
        <ReactMarkdown source={readmeMD} escapeHtml={false} />
      </div>
    </div>
  )
}

export default Repo
