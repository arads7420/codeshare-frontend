import "./categoryposts.scss"
import { useParams } from "react-router-dom"

export const CategoryPosts = () => {
    const category = useParams().category

    return (
      <div className="categoryposts">
        <div className="header">
            <div className="title">{category}</div>
            <div className="shortDesc">Discover the latest and greatest software projects in our community-curated collection.</div>
        </div>
      </div>
    )
}
