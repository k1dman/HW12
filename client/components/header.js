import React from 'react'
import { useParams, Link, withRouter } from 'react-router-dom'
// import { history } from '../redux'

const Header = ({ match }) => {
  const { userName, repositoryName } = useParams()

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div>
        <div id="repository-name"> </div>
        {userName} {repositoryName}
        {match.url !== "/" ? <button id="go-back" type="button" className="rounded-1g border-2 solid-1g p-1 m-1 text-white bg-teal-800 p-2" onClick><Link to='/'> Go home Mother Fucker </Link> </button> : null}
        {match.params.repositoryName ? <button id="go-repository-list" type="button" className="rounded-1g border-2 solid-1g p-1 m-1 text-white bg-teal-800 p-2" onClick><Link to={`/${userName}`}> Go to repos Son of a bitch </Link> </button> : null }
      </div>
    </nav>
  )
}

export default withRouter(React.memo(Header))
