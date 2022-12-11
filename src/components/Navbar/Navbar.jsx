import "./navbar.scss"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
          <Link to="/">
            <span class="logo">CodeShare</span>
          </Link>
      </div>
      <div className="center">
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <div className="user">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}
