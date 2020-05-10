import React from 'react'
import { Link, useParams } from 'react-router-dom'
// import Head from './head'

const DashboardProfile = () => {
  const { user } = useParams()
  return (
    <div>
      <Link to="/dashboard/">Go To Root</Link> <Link to="/dashboard/main">Go To Main</Link>
      <div id="title">Profile</div>
      <div id="username"> {user} </div>
    </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
