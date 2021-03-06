import React from 'react'
import { Link } from 'react-router-dom'

const ListRepos = ({ listRepositorys, userName }) => {
  return (
    <div>
      <div>
        {listRepositorys.map((repo) => {
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
