import React from 'react'
import { Link } from 'react-router-dom'
import { history } from '../redux'

const Main = () => {
  const [userName, setUserName] = React.useState('')

  return (
    <form>
      <input
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
      <button id="btn" type="button" className="bg-indigo-500" onSubmit>
        <Link to={`/${userName}`}> Go </Link>
      </button>
    </form>
  )
}

Main.propTypes = {}

export default Main
