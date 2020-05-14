import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'

const ListRepos = () => {
  const { userName } = useParams()
  const [repos, setRepos] = useState([])
  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      setRepos(it.data.map((item) => item.name))
    })
  }, [userName])
  return (
    <div>
      <Header repositorylist={false} />
      <div>
        {repos.map((repo) => {
          return (
            <div
              className="flex justify-center items-center bg-blue-500 text-white text-center text-sm font-bold rounded-lg w-25 m-6"
              role="alert"
            >
              <Link
                className="w-full text-center sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 mb-4 p-4 text-xl"
                to={`/${userName}/${repo}`}
              >
                {repo}
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListRepos
