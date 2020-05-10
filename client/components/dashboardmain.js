import React from 'react'
import { Link } from 'react-router-dom'
// import Head from './head'

const DashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/801272aa-c09f-4038-a090-9ee84aefa3d8">Go To Profile</Link>{' '}
      <Link to="/dashboard/">Go To Root</Link>
    </div>
  )
}

DashboardMain.propTypes = {}

export default DashboardMain
