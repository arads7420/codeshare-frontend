import "./post.scss"
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined'
import ArrowDropUpOutlinedIcon from '@mui/icons-material/ArrowDropUpOutlined'
import { Popup } from "../Popup/Popup"
import { useState } from "react"

export const Post = ({post}) => {
  const [openPopup, setOpenPopup] = useState(false)
  
  return (
    <>
      <div className="post" onClick={() => setOpenPopup(true)}>
          <div className="left">
            <img src={post.logo} alt="" />
          </div>
          <div className="center">
            <div className="header">
              <div className="title">{post.title}</div>
              <div className="shortDesc">{post.shortDesc}</div>      
            </div>
            <div className="info">
              <div className="comment-count">
                <ModeCommentOutlinedIcon style={{fontSize: "0.8rem"}}/>
                {post.comments}
              </div>
              <div className="type">{post.type}</div>
              <div className="category">{post.category}</div>
            </div>
          </div>
          <div className="right">
            <div className="upvotes">
              <ArrowDropUpOutlinedIcon style={{fontSize: "2.2rem"}}/>
              {post.upvotes}
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
              <a href={post.link}>Visit</a>
              <button className="upvote">
                <ArrowDropUpOutlinedIcon style={{fontSize: "2.2rem"}}/>
                <span>Upvote</span>
                <span>{post.upvotes}</span>
              </button>
            </div>
          </div>
          <div className="info">
            <div className="type">{post.type}</div>
            <div className="category">{post.category}</div>
          </div>
          <div className="desc">
            {post.description}
          </div>
        </div>
      </Popup>
    </>
  )
}
