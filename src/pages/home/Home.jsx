import "./home.scss"
import { PostContainer } from "../../components/PostContainer/PostContainer"

export const Home = () => {
  return (
    <div className="home">
      <div className="homeheader">
        <div className="hometitle">Explore</div>
        <div className="homeshortdesc">Find a world of innovative software projects. Try them out and find the perfect fit for your needs.</div>
      </div>
      <PostContainer />
    </div>
  )
}
