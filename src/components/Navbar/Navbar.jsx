import "./navbar.scss"
import { Link } from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search'
import { useContext } from "react"
import { AuthContext } from "../../context/authContext"
import AddIcon from '@mui/icons-material/Add'
import { makeRequest } from "../../axios"
import { useNavigate, useLocation } from "react-router-dom"
import {
  useMutation,
} from 'react-query'

export const Navbar = () => {
  const {currentUser, logout} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();

  const reload = () => {
    navigate(location.pathname);
  };

  const mutation = useMutation(() => {
      return makeRequest.post("/auth/logout")
  })

  const handleLogout= async () => {
    try {
      await logout()
      mutation.mutate()
      reload()
    } catch (error) {
      
    }
  }

  return (
    <div className="navbar">
      <div className="left">
          <Link to="/">
            <span className="logo">CodeShare</span>
          </Link>
      </div>
      <div className="center">
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {currentUser ? (
      <div className="right">
        <Link to="/createpost">
          <div className="newproject">
            <AddIcon/>
            <span>Add Project</span>
          </div>
        </Link>
        <div className="parent">
          <div className="user">
            {currentUser && (
              <>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
                <span>{currentUser.username}</span>
              </>
            )}
          </div>

          <div className="dropdownmenu">
            <Link to={`/profile/${currentUser.id}`}>
              <div className="item">My profile</div>
            </Link>
            <Link to={`/profile/${currentUser.id}`}>
              <div className="item">My projects</div>
            </Link>
            <div className="item" onClick={handleLogout}>Logout</div>
          </div>
         

        </div>
        
      </div>
      ) :(<div></div>)}
    </div>
  )
}
