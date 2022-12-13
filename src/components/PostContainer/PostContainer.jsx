import "./postcontainer.scss"
import { Post } from "../Post/Post"
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios"

export const PostContainer = () => {
  const { isLoading, error, data } = useQuery('posts', () =>
     makeRequest.get("/posts").then(res => {return res.data})
  )

  return (
    <div className="postcontainer">
      {error ? "Something went wrong" 
      :isLoading ? "Loading.." 
      :data.map(post => <Post post={post} key={post.id} />)}
    </div>
  )
}
