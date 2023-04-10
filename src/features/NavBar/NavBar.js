 import React from 'react'
 import { NavLink } from 'react-router-dom'
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faDisplay, faCartShopping, faWarehouse } from '@fortawesome/free-solid-svg-icons'
 import Styles from "../../Styles/styles.module.scss"
 import { UserAuth } from '../auth/Auth'

const NavBar = () => {
  const { logout } = UserAuth();

   return (
    <nav className={Styles.navBar}>
  <NavLink  to="#">
    <FontAwesomeIcon icon={faDisplay} />
    <span>Dashboard</span>
  </NavLink >
  <NavLink  to="sales">
  <FontAwesomeIcon icon={faCartShopping} />
      <span>Sales</span>
  </NavLink >
  <NavLink  to="inventory" >
        <FontAwesomeIcon icon={faWarehouse} />
      <span>Inventory</span>
  </NavLink >
  <NavLink  to="#">
      <span>Something</span>
  </NavLink >
  <div className={Styles.logoutButton}>
      <button onClick={()=>logout()}>Log Out</button>
  </div>
</nav>
     
   )
 }
 
 export default NavBar
 