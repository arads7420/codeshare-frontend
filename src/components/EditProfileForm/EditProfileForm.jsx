import "./editprofileform.scss"
import { useState } from "react"
import { UploadWidget } from "../UploadWidget.js/UploadWidget"
import { useQuery, useQueryClient, useMutation } from 'react-query'
import { makeRequest } from "../../axios"


export const EditProfileForm = ({user, setOpenPopup}) => {
    const [img, setImg] = useState(user.img)
    const [inputs, setInputs] = useState({
        name: user.name ? user.name : "",
        email: user.email ? user.email : "",
        shortDesc: user.shortDesc ? user.shortDesc : "",
        about: user.about ? user.about : "",
        githublink: user.githublink ? user.githublink : "",
        linkedinlink: user.linkedinlink ? user.linkedinlink : "",
    })

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    const handleUploadResult = (res) => {
        if(res.event === 'success') {
            setImg(res.info.url)
        }
    }

    const queryClient = useQueryClient()

    const mutation = useMutation((inputs) => {
        return makeRequest.put("/users", inputs)
      }, {
      onSuccess: () => {
        queryClient.invalidateQueries(['user'])
        queryClient.invalidateQueries(['navuser'])
        setOpenPopup(false)
      },
    })

    const handleClick = async (e) => {
        e.preventDefault()  
        mutation.mutate({...inputs, img})
    }
    

    return (
        <div className="editprofile">
            <form>
                <div className="profilepic">
                    <img src={img} alt="" />
                    <div>Profile Image</div>
                    <div>
                        <UploadWidget handleUploadResult={handleUploadResult} />
                    </div>
                </div>
                <input type="text" value={inputs.name} placeholder="Your fullname" name="name" onChange={handleChange}/>
                <input type="email" value={inputs.email} placeholder="Email" name="email" onChange={handleChange}/>
                <input type="text" value={inputs.shortDesc} placeholder="Short Description" name="shortDesc" onChange={handleChange}/>
                <input type="text" value={inputs.about} placeholder="About" name="about" onChange={handleChange}/>
                <input type="text" value={inputs.githublink} placeholder="Github Profile Link" name="githublink" onChange={handleChange}/>
                <input type="text" values={inputs.linkedinlink} placeholder="LinkedIn Profile Link" name="linkedinlink" onChange={handleChange}/>

                <button onClick={handleClick}>Update</button>
            </form>
        </div>
    )
}
