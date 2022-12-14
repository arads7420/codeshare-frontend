import "./searchbar.scss"
import SearchIcon from '@mui/icons-material/Search'
import { Popup } from "../Popup/Popup"
import { useEffect, useState } from "react"
import { Post } from "../Post/Post"
import axios from "axios"

export const SearchBar = () => {
  const [results, setResults] = useState([])
  const [searchtext, setSearchText] = useState("")
  const [openPopup, setOpenPopup] = useState(false)
  const handleClick = () => setOpenPopup(true);

  useEffect(() => {
    const fetchResults = async () => {
      const posts = await axios.get("http://localhost:5000/api/posts/search?searchtext=" + searchtext)
      setResults(posts.data)
    }
    fetchResults()

  }, [searchtext])

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <>
      <div className="searchbar" onClick={handleClick}>
        <div className="search">
          <SearchIcon/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
      <div className="searchcontainer">
        <div className="searchbar" onClick={handleClick}>
          <div className="search">
            <SearchIcon/>
            <input type="text" value={searchtext} placeholder="Search for projects" onChange={handleChange} />
          </div>
        </div>
        <div className="searchresults">
          {results.length > 0 ? results.map(post => <Post post={post} key={post.id} />) 
          : "No posts found"}
        </div>
      </div>

      </Popup>
    </>
  )
}
