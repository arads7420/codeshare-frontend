import "./leftnavbar.scss"
import { NavLink } from "react-router-dom"

export const LeftNavbar = ({isOpen}) => {
  
  return (
    <div className="leftnavbar" style={isOpen ? {display: "block"} : {display: "none"}}>
      <div className="container">
        <NavLink 
          to="/"
          className={({ isActive }) => 
            isActive ? "active" : undefined
        }>
          Explore
        </NavLink>
        <NavLink 
          to="/categories"
          className={({ isActive }) => 
          isActive ? "active" : undefined 
        }>
          Categories
        </NavLink>
      </div>
    </div>
  )
}
