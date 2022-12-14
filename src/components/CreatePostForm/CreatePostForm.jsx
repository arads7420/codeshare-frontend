import "./createpostform.scss"
import { useState } from "react"
import { StepOne } from "./StepOne"
import { StepTwo } from "./StepTwo"
import { StepThree } from "./StepThree"
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom"
import {
  useMutation,
} from 'react-query'
import { makeRequest } from "../../axios"

export const CreatePostForm = () => {
  const {currentUser} = useContext(AuthContext)
  const [page, setPage] = useState(0)
  const[error, setError] = useState(null)
  const [images, setImages] = useState([])
  const [inputs, setInputs] = useState({
    title: "",
    shortDesc: "",
    type : null,
    link: "",
    logo: "",
    description: "",
    category: null,
    user: {
      id: currentUser.id
    }
  })

  const handleImagesUploadResult = (res) => {
    if(res.event === 'success') {
        setImages(prevState => [...prevState, res.info.url])
    }
  }

  const handleDeleteImg = (e) => {
    let url = images[e.currentTarget.getAttribute("data-idx")]
    let newImg = images.filter(img => img !== url)
    setImages(newImg)
  }
  
  const handleChange = e => {
    if(e.target.name === "type") {
      setInputs(prev => ({...prev, type: {id: Number(e.target.value)}}))
    }
    else if(e.target.name === "category") {
      setInputs(prev => ({...prev, category: {id: Number(e.target.value)}}))
    }
    else {
      setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }
  }

  const navigate = useNavigate()

  const mutation = useMutation((inputs) => {
      return makeRequest.post("/posts", {...inputs, images: images})
    }, {
    onSuccess: () => {
      navigate("/")
    },
  })

  const handleClick = async (e) => {
    e.preventDefault()  
    if(inputs.title.length === 0) {
      setError("Please provide a title")
    }
    else if(inputs.link.length === 0) {
      setError("Please provide a link to your project")
    }
    else if(inputs.shortDesc.length === 0) {
      setError("Please provide a short description")
    }
    else if(inputs.type === null) {
      setError("Please provide a type")
    }
    else if(inputs.logo.length === 0) {
      setError("Please provide a link to your project logo")
    }
    else if(inputs.description.length === 0) {
      setError("Please provide a description")
    }
    else if(inputs.category === null) {
      setError("Please provide a category for your project")
    }
    else {
      mutation.mutate(inputs) 
    }
  }

  const formTitles = ["Submit a project", "Tell us more about the project", "Describe your project"]

  const PageDisplay = () => {
    if(page === 0) {
      return <StepOne 
        images={images} 
        handleDeleteImg={handleDeleteImg} 
        error={error} inputs={inputs} 
        handleChange={handleChange}
        handleImagesUploadResult={handleImagesUploadResult}
      />
    }
    else if(page === 1) {
      return <StepTwo error={error} inputs={inputs} handleChange={handleChange}/>
    }
    else {
      return <StepThree error={error} inputs={inputs} handleChange={handleChange}/>
    }
  }

  return (
    <div className="createpostform">
      <div className="left">
         {/* Put an image or background */}
      </div>
      <div className="right">
        <div className="progressbar">
          <div className="prog" style={{ width: page === 0 ? "33.33%" : page === 1 ? "66.6%" : "100%"}}></div>
        </div>
        <div className="formcontainer">
          <div className="header">
            <h1>{formTitles[page]}</h1>
          </div>
          <div className="body">
            {PageDisplay()}
          </div>
          <div className="footer">
            <button 
              className="secondary"
              onClick={() => setPage(prev => prev - 1)}
              style={page === 0? {display: "none"} : {display: "inline-block"}}
            >Prev</button>
            <button 
              className="primary" 
              onClick={() => setPage(prev => prev + 1)}
              style={page === formTitles.length - 1? {display: "none"} : {display: "inline-block"}}>Next</button>
            <button 
              className="primary" 
              onClick={handleClick}
              style={page === formTitles.length - 1? {display: "inline-block"} : {display: "none"}}>Create</button>
          </div>
        </div>     
      </div>

    </div>
  )
}
