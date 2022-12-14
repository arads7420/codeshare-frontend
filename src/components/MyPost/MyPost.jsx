import "./mypost.scss"
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'
import { Popup } from "../Popup/Popup"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import { AuthContext } from "../../context/authContext"
import { useQuery, useQueryClient, useMutation } from 'react-query'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { makeRequest } from "../../axios"
import { EditPostForm } from "../EditPostForm/EditPostForm"
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Carousel from 'nuka-carousel'

export const MyPost = ({post}) => {
    const {currentUser} = useContext(AuthContext)

    const { isLoading, error, data } = useQuery(['upvotes', post.id], () =>
      makeRequest.get("/upvotes?postId=" + post.id).then(res => {
        return res.data
      })
    )
  
    let liked = false
    if(currentUser && data) {
      const upvoteUsers = data.map(obj => obj.userId)
      if(upvoteUsers.includes(parseInt(currentUser.id))) {
        liked = true;
      }
    }

    const [openPopup, setOpenPopup] = useState(false)
    const handleClick = () => setOpenPopup(true);
  
    const [openEditPopup, setOpenEditPopup] = useState(false)
    const handleEditClick = () => setOpenEditPopup(true);
  
    const [openDeletePopup, setOpenDeletePopup] = useState(false)
    const handleDeleteClick = () => setOpenDeletePopup(true);

    const handleUpvote = e => {
      upvoteMutation.mutate(liked)
    }
  
    const queryClient = useQueryClient()
    const upvoteMutation = useMutation((liked) => {
        if(liked) {
          return makeRequest.delete("/upvotes", {
            data: {postId: post.id}
          })
        }
        else {
          return makeRequest.post("/upvotes", {postId: post.id})
        }
      }, {
      onSuccess: () => {
        queryClient.invalidateQueries(['upvotes', post.id])
      },
    })

    const deleteMutation = useMutation(() => {
        return makeRequest.delete("/posts", {
          data: {postId: post.id}
        })
    }, {
    onSuccess: () => {
      queryClient.invalidateQueries(['myposts'])
      setOpenDeletePopup(false)
    },
  })


    const handleDelete = () => {
      deleteMutation.mutate()
    }
    
    
    return (
        <>
        <div className="mypost">
            <div className="left">
                <img src={post.logo} alt="" onClick={handleClick}/>
            </div>
            <div className="center">
                <div className="header">
                    <div className="title" onClick={handleClick}>{post.title}</div>
                    <div className="shortDesc">{post.shortDesc}</div>      
                </div>
                <div className="info" onClick={handleClick}>
                    <div className="type">{post.type.name}</div>
                    <div className="category">
                        {post.category.name}
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="upvotes" onClick={handleUpvote}>
                    {liked ? <ArrowDropUpOutlinedIcon style={{fontSize: "2.2rem", color: "#FF6154"}}/> : <ArrowDropUpOutlinedIcon style={{fontSize: "2.2rem"}}/>}
                    { !isLoading && data.length }
                </div>
                <div className="editpost">
                    <button onClick={handleEditClick}>
                        <EditOutlinedIcon/>
                    </button>
                </div>
                <div className="deletepost" onClick={handleDeleteClick}>
                    <DeleteOutlineRoundedIcon/>
                </div>
            </div>
        </div>
        <Popup
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
        >
        <div className="post-detailed">
          <div className="top">
            <img src={post.logo} alt="" />
          </div>
          <div className="second">
            <div className="textcontent">
              <div className="title">
                {post.title}
              </div>
              <div className="shortDesc">
                {post.shortDesc}
              </div>
            </div>
            <div className="buttons">
              <a href={post.link} target="_blank" rel="noreferrer">Visit</a>
              {liked ? (
                <button className="upvote secondary" onClick={handleUpvote}>
                  <ArrowDropUpOutlinedIcon style={{fontSize: "2.2rem"}}/>
                  <span>Upvoted</span>
                  <span> { !isLoading && data.length }</span>
                </button>
              ) : (
                <button className="upvote primary" onClick={handleUpvote}>
                  <ArrowDropUpOutlinedIcon style={{fontSize: "2.2rem"}}/>
                  <span>Upvote</span>
                  <span> { !isLoading && data.length }</span>
                </button>  
              )}

            </div>
          </div>
          <div className="info">
            <div className="type">{post.type.name}</div>
            <div className="category">{post.category.name}</div>
          </div>
          <div className="desc">
            {post.description}
          </div>
          <div className="imagecarousel">
            {post.images.length > 0 && (
              <Carousel wrapAround={true} adaptiveHeight={true}>
                  {post.images.map((imgUrl, idx) => 
                    <img className="carouselimg" src={imgUrl} key={idx} alt="" />)}
               </Carousel>
            )}
          </div>
          <div className="developedby">
            <p>Developed By</p>
            <div className="user">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" />
              <Link to={`/profile/${post.userId}`}>
                  {post.username}
              </Link>
              </div>
          </div>
        </div>
      </Popup>

        <Popup
            openPopup={openEditPopup}
            setOpenPopup={setOpenEditPopup}
            title="Update Project"
        >
            <EditPostForm post={post} setOpenEditPopup={setOpenEditPopup}/>
        </Popup>
  
        <Popup
            openPopup={openDeletePopup}
            setOpenPopup={setOpenDeletePopup}
            title="Delete Project"
        >
          <p>Are you sure you want to delete this project?</p>
          <div className="confirmbuttons">
            <button onClick={handleDelete}>Yes</button>
            <button className="cancel" onClick={() => setOpenDeletePopup(false)}>No</button>
          </div>
        </Popup>
      </>
    )
}
