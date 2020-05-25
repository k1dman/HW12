import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const Main = () => {
  const [userName, setUserName] = React.useState('')
 
  return (
    <div>
      <input
        id="input-field"
        type="text"
        className="text-black"
        value={userName}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            history.push(`/${userName}`)
          }
        }}
        onChange={(e) => {
          setUserName(e.target.value)
        }}
      />
      <button id="search-button" type="button" className="bg-indigo-500" onClick>
        <Link to={`/${userName}`}> Go </Link>
      </button>
    </div>
  )
}

Main.propTypes = {}

export default Main
