import "./mypostcontainer.scss"
import { MyPost } from "../MyPost/MyPost"
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios"

export const MyPostContainer = ({setCount}) => {
    const { isLoading, error, data } = useQuery(['myposts'], () =>
        makeRequest.get("/posts/myposts").then(res => {
            setCount(res.data.length)
            return res.data
        })
    )
    return (
        <div className="mypostcontainer">
            {(!isLoading && data.length !== 0) ? (data.map(post => <MyPost post={post} key={post.id}/>))
            : (<div>You have not added a project yet.</div>)}
        </div>
    )
}
