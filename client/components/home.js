import React from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Header from './header'
import Replist from './replist'
import Reptext from './reptext'
import Main from './main'

const Home = () => {
  const { userName, repositoryName } = useParams()

  const [repos, setRepos] = React.useState([])

  React.useEffect(() => {
    if (userName) {
      axios.get(`https://api.github.com/users/${userName}/repos`).then((res) => {
        setRepos(res.data)
        console.log(res.data)
      })
    }
  }, [userName])

  const [repository, setRepository] = React.useState('')

  React.useEffect(() => {
    if (userName && repositoryName) {
      axios.get(`https://api.github.com/repos/${userName}/${repositoryName}/readme`).then((res) => {
        const { content } = res.data
        const decodedContent = atob(content)
        setRepository(decodedContent)
      })
    }
  }, [userName, repositoryName])

  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Route exact path="/" component={() => <Main />} />
          <Route exact path="/:userName" component={() => <Replist repos={repos} />} />
          <Route exact path="/:userName/:repositoryName" component={() => <Reptext repository={repository} />} />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)