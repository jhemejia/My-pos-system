import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../features/NavBar/NavBar'
import Styles from '../Styles/styles.module.scss'

const HomePage = () => {
  return (
    <div className={Styles.homePage}>
        <NavBar />
        <Outlet />
    </div>
  )
}

export default HomePage
