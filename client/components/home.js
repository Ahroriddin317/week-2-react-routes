import React from 'react'
import { Route, Switch, useParams } from 'react-router-dom'
import Header from './header'
import Leader from './leader'
import ListRepos from './listrepos'
import Repo from './repo'

const Home = () => {
  const { userName, repositoryName } = useParams()
  return (
    <div>
      {userName && <Header userName={userName} repositoryName={repositoryName} />}
      <Switch>
        <Route exact path="/" component={() => <Leader />} />
        <Route exact path="/:userName" component={() => <ListRepos userName={userName} />} />
        <Route
          exact
          path="/:userName/:repositoryName"
          component={() => <Repo userName={userName} repositoryName={repositoryName} />}
        />
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
