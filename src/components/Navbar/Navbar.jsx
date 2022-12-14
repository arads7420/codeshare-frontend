import "./navbar.scss"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"
import AddIcon from '@mui/icons-material/Add'
import { makeRequest } from "../../axios"
import { useNavigate, useLocation } from "react-router-dom"
import {
  useMutation,
  useQuery
} from 'react-query'
import { SearchBar } from "../SearchBar/SearchBar"
import { LeftNavbar } from "../LeftNavbar/LeftNavbar"

export const Navbar = () => {
  const [navopen, setNavOpen] = useState(false)
  const {currentUser, logout} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation();

  const { isLoading, error, data } = useQuery('navuser', () =>
     makeRequest.get("/users/find/" + currentUser.id).then(res => {return res.data}),
     {enabled: currentUser ? true : false}
  )

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
        <div className="dots" onClick={() => setNavOpen(prev => !prev)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <LeftNavbar isOpen={navopen}/>
        <Link to="/">
          <span className="logo">CodeShare</span>
        </Link>
      </div>
      <div className="center">
        {/* <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search" />
        </div> */}
        <SearchBar/>
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
              {!isLoading && (
                <img src={!isLoading && data.img} alt="" />
              )}
 
                <span>{currentUser.username}</span>
              </>
            )}
          </div>
          <div className="dropdownmenu">
            <a href={`/profile/${currentUser.id}`}>
              <div className="item">My profile</div>
            </a>
            <Link to="/myprojects">
              <div className="item">My projects</div>
            </Link>
            <div className="item" onClick={handleLogout}>Logout</div>
          </div>
         

        </div>
        
      </div>
      ) :(<div>
        <Link to="/register" className="primary signupbutton" style={
          {
            background: "#FF6154", 
            color: "#ffffff",
            padding: "5px 10px",
            borderRadius: "10px"
          }}>Sign Up</Link>
      </div>)}
    </div>
  )
}
