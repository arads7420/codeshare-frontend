import "./category.scss"
import { Popup } from "../../components/Popup/Popup"
import { useState } from "react"
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios"
import { Post } from "../../components/Post/Post"

export const Category = ({category}) => {
    const { isLoading, error, data: posts } = useQuery(['categoryposts', category.id], () =>
        makeRequest.get("/posts?categoryId=" + category.id).then(res => {return res.data})
    )
    const [openPopup, setOpenPopup] = useState(false)
    const handleClick = () => setOpenPopup(true);

    return (
        <>
            <div className="category-item" key={category.id}>
                <div className="left">
                    <img src={category.img} alt="" />
                </div>
                
                <div className="right" onClick={handleClick}>
                    <div className="name">
                    {category.name}
                    </div>
                    <div className="desc">
                    {category.desc}
                    </div>
                </div>
            </div>
            <Popup
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                title={category.name}
            >
                <div className="categorypostcontainer">
                    {
                        error ? "Something went wrong" 
                        : isLoading ? "Loading..." 
                        : posts.length > 0 ? posts.map(post => <Post post={post} key={post.id} />)
                        : "No projects found"
                    }
                </div>

            </Popup>
        </>
    )
}

