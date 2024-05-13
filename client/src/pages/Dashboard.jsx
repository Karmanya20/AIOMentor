import React from 'react'
import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default Dashboard
