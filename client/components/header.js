import React from 'react'
import { useParams, withRouter, Link } from 'react-router-dom'
// import { history } from '../redux'

const Header = ({ history, match }) => {
  const { userName, repositoryName } = useParams()
  console.log(history)
  console.log(match)

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div>
        {userName} {repositoryName}
        {match.url !== "/" ? <button type="button" className="rounded-1g border-2 solid-1g p-1 m-1 text-white bg-teal-800 p-2" onClick><Link to='/'> Go back </Link> </button> : null}
        {match.params.repositoryName ? <button type="button" className="rounded-1g border-2 solid-1g p-1 m-1 text-white bg-teal-800 p-2" onClick><Link to={`/${userName}`}> Go repo </Link> </button> : null }
      </div>
    </nav>
  )
}

export default withRouter(React.memo(Header))
