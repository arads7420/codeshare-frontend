import "./leftbar.scss"
import { NavLink } from "react-router-dom"

export const LeftBar = () => {
  return (
    <div className="leftbar">
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
