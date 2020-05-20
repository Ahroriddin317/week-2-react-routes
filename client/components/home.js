import React, { useState, useEffect } from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import InputView from './inputview'
import ListRepos from './listrepos'
import Repo from './repo'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repos, setRepos] = useState([])
  const [readmeMD, setReadmeMD] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      setRepos(it.data.map((item) => item.name))
    })
  }, [userName])

  useEffect(() => {
    axios
      .get(
        `https://api.github.com/repos/${userName}/${repositoryName}/contents/README.md?ref=master`
      )
      .then((it) => {
        setReadmeMD(atob(it.data.content))
      })
  }, [userName, repositoryName])
  return (
    <div>
      {userName && <Header userName={userName} repositoryName={repositoryName} />}
      <Switch>
        <Route exact path="/" component={() => <InputView />} />
        <Route
          exact
          path="/:userName"
          component={() => <ListRepos userName={userName} listRepositorys={repos} />}
        />
        <Route
          exact
          path="/:userName/:repositoryName"
          component={() => <Repo readmeMD={readmeMD} />}
        />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
