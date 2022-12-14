import "./profile.scss"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { makeRequest } from "../../axios"
import { useContext , useState, useEffect } from "react"
import { AuthContext } from "../../context/authContext"
import { useParams, useLocation, useNavigate} from "react-router-dom"
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Popup } from "../../components/Popup/Popup"
import { EditProfileForm } from "../../components/EditProfileForm/EditProfileForm"

export const Profile = () => {
  const {currentUser} = useContext(AuthContext)
  const userId = useParams().id

  const { isLoading, error, data: user } = useQuery(['user'], () =>
    makeRequest.get("/users/find/" + userId).then(res => {
      return res.data
    })
  )
  const navigate = useNavigate()
  const [openPopup, setOpenPopup] = useState(false)
  const handleClick = () => setOpenPopup(true);

  if(user) {
    return (
      <div className="profile">
        <div className="top">
          <div className="userdetails">
            <div className="left">
              <img src={user.img} alt="" />
              <div className="center">
                <div className="name">
                  {user.name}
                </div>
                <div className="username">
                  @{user.username}
                </div>
                <div className="shortDesc">
                  {user.shortDesc}
                </div>
              </div> 
            </div>
            {currentUser && user.id === currentUser.id && (
              <div className="right">
                <button onClick={handleClick}>
                  <EditOutlinedIcon/>
                  Edit Profile
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="content">
            {user.about && (
              <div className="item">
                <span>ABOUT</span>
                <p>{user.about}</p>
              </div>
            )}

            {(user.githublink || user.linkedinlink) && (
              <div className="item">
                <span>LINKS</span>
                <div className="links">
                  {user.githublink && (
                    <div className="link-item">  
                      <GitHubIcon/>
                      <a href={user.githublink} target="_blank" rel="noreferrer">Github</a>
                    </div>
                  )}
                  {user.linkedinlink && (
                    <div className="link-item">
                      <LinkedInIcon />
                      <a href={user.linkedinlink} target="_blank" rel="noreferrer">Linkedlin</a>
                    </div>
                  )}

                </div>
              </div>   
            )}
            
          </div>
        </div>
        {/* EDIT PROFILE FORM */}
        <Popup
          openPopup={openPopup}
          setOpenPopup={setOpenPopup}
          title="Update Profile"
        >
        <EditProfileForm user={user} setOpenPopup={setOpenPopup}/>
        </Popup>
      </div>
    )
  }
  else {
    return (
    <div className="notfound">
      <div className="title">404</div>
      <span>We're sorry, but the requested user does not exist.</span>
    </div>)
  }
}
