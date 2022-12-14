import "./categories.scss"
import {Category} from "../category/Category"
import { useQuery } from 'react-query'
import { makeRequest } from "../../axios"

export const Categories = () => {
  const { isLoading, error, data: categories } = useQuery(['categories'], () =>
      makeRequest.get("/categories").then(res => {return res.data})
  )
  // const categories = [
  //   {
  //     id: 1,
  //     name: "Artificial Intelligence",
  //     desc: "If time is most precious, this collection of lifehacks is so so precious. Be more productive and optimize your life."
  //   },
  //   {
  //     id: 2,
  //     name: "Cloud Computing",
  //     desc: "Software to help you write software."
  //   },
  //   {
  //     id: 3,
  //     name: "Data Science",
  //     desc: "If time is most precious, this collection of lifehacks is so so precious. Be more productive and optimize your life."
  //   },
  //   {
  //     id: 4,
  //     name: "Cloud Computing",
  //     desc: "Is your product easy for people to understand and use? If you're unsure, here are some tools to find out."
  //   },
  //   {
  //     id: 5,
  //     name: "Data Science",
  //     desc: "Design is more than just pretty pixels (no offense, pretty pixels). It's about user experience (UX), graphic design, and so much more, often aided by tools like Photoshop, Sketch,"
  //   },
  //   {
  //     id: 6,
  //     name: "Cloud Computing",
  //     desc: "Live in the future with the latest in connected devices, furniture built for comfort, and robots. Yes, robots."
  //   },
  //   {
  //     id: 7,
  //     name: "Data Science",
  //     desc: "Data doesn't lie. Neither do we when we say these products will help."
  //   },
  //   {
  //     id: 8,
  //     name: "Cloud Computing",
  //     desc: "Data doesn't lie. Neither do we when we say these products will help."
  //   },
  //   {
  //     id: 9,
  //     name: "Data Science",
  //     desc: "Data doesn't lie. Neither do we when we say these products will help."
  //   }
  // ]

  return (
  <>
    {isLoading ? "Loading..." 
    : (
      <div className="categories">
        <div className="header">
          <div className="title">Categories</div>
          <div className="shortDesc">Discover the latest and greatest software projects in our community-curated collection.</div>
        </div>

        <div className="container">
          {categories.map(item => 
            <Category category={item} key={item.id}/>
          )}
        </div>
      </div>
    ) }
   
  </>
  )
}
