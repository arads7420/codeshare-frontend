import "./editpostform.scss"
import { useState } from "react"
import { UploadWidget } from "../UploadWidget.js/UploadWidget"
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { makeRequest } from "../../axios"
import CloseIcon from '@mui/icons-material/Close';

export const EditPostForm = ({post, setOpenEditPopup}) => {
    const [logo, setLogo] = useState(post.logo ? post.logo : "")
    const [images, setImages] = useState((post.images && post.images.length > 0 ) ? post.images : [])
    const [inputs, setInputs] = useState({
        title: post.title ? post.title : "",
        shortDesc: post.shortDesc ? post.shortDesc : "",
        type: post.type ? post.type : "",
        link: post.link ? post.link : "",
        category: post.category ? post.category : "",
        description: post.description ? post.description : "",
    })
    const { isLoading, data: categories } = useQuery(['categories'], () =>
        makeRequest.get("/categories").then(res => {return res.data})
    )
  
    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleUploadResult = (res) => {
        if(res.event === 'success') {
            setLogo(res.info.url)
        }
    }

    const handleImagesUploadResult = (res) => {
        if(res.event === 'success') {
            setImages(prevState => [...prevState, res.info.url])
        }
    }

    const queryClient = useQueryClient()

    const mutation = useMutation((inputs) => {
        return makeRequest.put("/posts", 
        {...inputs, 
            postId: post.id,
            logo: logo,
            images: images
        })
      }, {
      onSuccess: () => {
        queryClient.invalidateQueries(['myposts'])
        setOpenEditPopup(false)
      },
    })

    const handleClick = async (e) => {
        e.preventDefault()  
        mutation.mutate({inputs})
    }

    const handleDeleteImg = (e) => {
        let url = images[e.currentTarget.getAttribute("data-idx")]
        let newImg = images.filter(img => img !== url)
        setImages(newImg)
    }
    

    return (
    
        <div className="editpostform">
            <div className="logo">
                <img src={logo} alt="" />
                <div className="imageinput">
                    <label>Logo</label>
                    <div>
                        <UploadWidget handleUploadResult={handleUploadResult} />
                    </div>
                </div>

            </div>
            <div className="images">
                <div className="imageinput">
                    <label>Project Images</label>
                    {images.length > 0 && (
                        <div className="uploadedimages">
                            
                            {images.map((imgSrc, idx) => 
                                <div className="imgcontainer" key={idx}>
                                    <div className="deleteButton" onClick={handleDeleteImg} data-idx={idx}><CloseIcon style={{fontSize: "0.8rem"}}/></div>
                                    <img src={imgSrc} key={idx}></img>
                                </div>)
                            }
                        </div>
                    )}

                    
                    <div>
                        <UploadWidget handleUploadResult={handleImagesUploadResult} />
                    </div>
                </div>
            </div>
            <form>
                <label>Title of project</label>
                <input type="text" value={inputs.title} placeholder="Title of project" name="title" onChange={handleChange}/>
                <label>Short Description</label>
                <input type="text" value={inputs.shortDesc} placeholder="Short Description" name="shortDesc" onChange={handleChange}/>
                <label>Type of project</label>
                <select name="type" defaultValue={inputs.type.id} onChange={handleChange}>
                    <option value="1">Free</option>
                    <option value="2">Paid</option>
                </select>
                <label>Select a Category</label>
                <select name="category" defaultValue={inputs.category.id} onChange={handleChange}>
                    {!isLoading && (categories.map(item => 
                        <option value={item.id} key={item.id}>{item.name}</option>)
                    )}
                </select>
                <label>Description</label>
                <textarea rows="10" value={inputs.description} name="description" placeholder="Description" onChange={handleChange} />

                <button onClick={handleClick}>Update</button>
            </form>
        </div>
    )
}
